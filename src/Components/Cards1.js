import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cardsdata from "./CardsData";
import "./style.css";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
// import ReactPaginate from "react-paginate";

const Cards1 = () => {
  const [data, setData] = useState(Cardsdata);
  //console.log(data);

  const dispatch = useDispatch();
  const send = (e) => {
    // console.log(e);

    dispatch(ADD(e));
  };

  // // const handlePageClick = (data) => {
  // //   console.log(data.selected);
  // };
  return (
    <div className="container mt-3">
      <h2 className="text-center">Add To Cart Project</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((element, id) => {
          return (
            <>
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2 mt-4 card_style"
              >
                <Card.Img
                  variant="top"
                  src={element.imgdata}
                  style={{ height: "16rem" }}
                  className="mt-3"
                />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>Price : ₹ {element.price}</Card.Text>
                  <div className="button_div d-flex justify-content-center">
                    <Button
                      variant="primary"
                      onClick={() => send(element)}
                      className="col-lg-12"
                    >
                      Add To Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}

        {/* <ReactPaginate
          previousLable={"previous"}
          nextLable={"next"}
          pageCount={4}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          onPageChange={handlePageClick}
        />
        */}
      </div>
    </div>
  );
};

export default Cards1;
