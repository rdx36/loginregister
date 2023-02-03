import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "../redux/actions/action";

const CardsDetails = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();
  //console.log(id);
  const history = useNavigate();

  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);
  const compare = () => {
    let comaparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(comaparedata);
  };
  //add data
  const send = (e) => {
    // console.log(e);

    dispatch(ADD(e));
  };

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/cards");
  };
  //remove one
  const remove = (item) => {
    dispatch(REMOVE(item));
  };
  useEffect(() => {
    compare();
  }, [id]);

  return (
    <div>
      <div className="container mt-2">
        <h2 className="text-center">Iteams Detail Page</h2>

        <section className="container mt-3">
          <div className="iteamsdetails">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img src={ele.imgdata} alt="" />
                  </div>

                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaturant</strong>: {ele.rname}
                          </p>
                          <p>
                            <strong>Price</strong>: ₹{ele.price}
                          </p>
                          <p>
                            <strong>Dishes</strong>:{ele.address}{" "}
                          </p>
                          <p>
                            <strong>Total</strong>: ₹300{" "}
                          </p>

                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => remove(ele)}
                            >
                              -
                            </span>
                            <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => send(ele)}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating:</strong>
                            <span
                              style={{
                                background: "green",
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {ele.rating} *
                            </span>
                          </p>
                          <p>
                            <strong>Order Review:</strong>
                            <span>{ele.somedata}</span>
                          </p>
                          <p>
                            <strong>Rating:</strong>
                            <i
                              className="fas fa-trash"
                              onClick={() => dlt(ele.id)}
                              style={{
                                color: "red",
                                fontsize: 20,
                                cursor: "pointer",
                              }}
                            ></i>
                            <span></span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardsDetails;
