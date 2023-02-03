import React, { useEffect, useState } from "react";
import { FaHouseUser } from "react-icons/fa";
import { Link } from "react-router-dom";
//import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import Navbar from "react-bootstrap/Navbar";
import Badge from "@material-ui/core/Badge";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { DLT } from "../redux/actions/action";

const Header = () => {
  const [price, setPrice] = useState(0);
  // console.log(price);

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price + price;
    });

    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <Navbar.Brand href="#home">Add to Cart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Badge
            badgeContent={getdata.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ frontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getdata.length ? (
            <div
              className="card_detail"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thread>
                  <tr>
                    <th>Photo</th>
                    <th>Resturant Name</th>
                  </tr>
                </thread>
                <tbody>
                  {getdata.map((e) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink
                              to={`/cardsdetail/${e.id}`}
                              onClick={handleClose}
                            >
                              <img
                                src={e.imgdata}
                                style={{ width: "5rem", height: "5rem" }}
                                alt=""
                              />
                            </NavLink>
                          </td>

                          <td>
                            <p>{e.rname}</p>
                            <p>Price:₹{e.price}</p>
                            <p>Quantity:{e.qnty}</p>
                            <p
                              style={{
                                color: "red",
                                frontSize: 20,
                                cursor: "pointer",
                              }}
                              onClick={() => dlt(e.id)}
                            >
                              <i className="fas fa-trash smalltrash"></i>
                            </p>
                          </td>
                          <td
                            className="mt-5"
                            style={{
                              color: "red",
                              frontSize: 20,
                              cursor: "pointer",
                            }}
                            onClick={() => dlt(e.id)}
                          >
                            <i className="fas fa-trash"></i>
                          </td>
                        </tr>
                      </>
                    );
                  })}

                  <p className="text-center">Total: ₹ {price}</p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className="card-details d-flex justify-content-center align-items-center"
              style={{ width: "24rem", padding: 10, position: "relative" }}
            >
              <i
                className="fas fa-close smallclose"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  frontSize: 23,
                  cursor: "pointer",
                }}
              ></i>

              <p style={{ frontSize: 22 }}>Your cart is empty</p>
              <img
                src="./cart.gif"
                alt=""
                className="emptycart_img"
                style={{ width: "5rem", padding: 10 }}
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </div>
  );
};

export default Header;
