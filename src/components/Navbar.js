import React, { useState } from "react";
import Logo from "../assets/logo-pizza.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Card from "react-bootstrap/Card";
import Delete from "../assets/Delete.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/reducers/reducer";
import { emptyCart } from "../redux/reducers/reducer";
import { incrementQuantity } from "../redux/reducers/reducer";
import { decrementQuantity } from "../redux/reducers/reducer";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  console.log(cart);
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  const getTotalPrice = () => {
    let price = 0;
    cart.forEach((item) => {
      price += item.lastPrice;
    });
    return price;
  };

  return (
    <>
      <div className="navbar">
        <div className="leftSide">
          <Link to="/">
            <img src={Logo} />{" "}
          </Link>
          <div className="hiddenLinks">
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>

          <div className="cart" onClick={() => setOpenLinks(!openLinks)}>
            <span>
              <i className="fas fa-cart-plus"></i>
            </span>
            <span>{getTotalQuantity() || 0}</span>
          </div>
        </div>
      </div>
      {openLinks === true && cart.length > 0 && (
        <Card
          style={{
            width: "25rem",
            border: "none",
            position: "absolute",
            top: "100px",
            minHeight: "150px",
            right: 0,
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            backgroundColor: "#FFFFFF",
            zIndex: 1000,
          }}
          className=" card_style"
        >
          <Card.Body>
            <div
              style={{
                display: "flex",
                gap: 105,
                borderBottom: "2px solid black",
                paddingBottom: "4px",
                fontWeight: "bold",
              }}
            >
              <div>Photo</div>
              <div>Pizza Name</div>
            </div>
            {cart.map((item) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  borderBottom: "1px solid #EEEEEE",
                  paddingBottom: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 70,
                  }}
                >
                  <Link
                    to={{
                      pathname: `/CardsDetails/${item.id}`,
                    }}
                  >
                    <Card.Img
                      src={item.image}
                      style={{ height: "5rem", width: "5rem" }}
                    />
                  </Link>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <div
                      onClick={() => dispatch(incrementQuantity(item.id))}
                      style={{ fontWeight: "bold", cursor: "pointer" }}
                    >
                      +
                    </div>
                    <div>
                      <div>{item.title}</div>
                      <div>Price : ${item.price}</div>
                      <div>Quantity :{item.quantity}</div>
                    </div>
                    <div
                      onClick={() => dispatch(decrementQuantity(item.id))}
                      style={{ fontWeight: "bold", cursor: "pointer" }}
                    >
                      -
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    onClick={() => dispatch(removeItem(item.id))}
                    style={{ width: "20px", cursor: "pointer" }}
                    src={Delete}
                  />
                </div>
              </div>
            ))}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <div style={{ fontWeight: "bold" }}>
                Total : ${getTotalPrice()}
              </div>
              <div
                style={{
                  color: "#D93939",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => dispatch(emptyCart())}
              >
                Empty Cart
              </div>
            </div>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default Navbar;

// import React, { useState } from "react";
// import Logo from "../assets/logo-pizza.png";
// import { Link } from "react-router-dom";
// import "../styles/Navbar.css";
// import { useSelector } from "react-redux";

// function Navbar() {
//   const [openLinks, setOpenLinks] = useState(false);
//   const cart = useSelector((state) => state.cart);
//   const getTotalQuantity = () => {
//     let total = 0;
//     cart.forEach((item) => {
//       total += item.quantity;
//     });
//     return total;
//   };
//   const toggleNavbar = () => {
//     setOpenLinks(!openLinks);
//   };
//   // const { amount } = useSelector((store) => store.cart);
//   return (
//     <div className="navbar">
//       <div className="leftSide" id={openLinks ? "open" : "close"}>
//         <Link to="/">
//           <img src={Logo} />{" "}
//         </Link>
//         <div className="hiddenLinks">
//           <Link to="/"> Home </Link>
//           <Link to="/menu"> Menu </Link>
//           <Link to="/about"> About </Link>
//           <Link to="/contact"> Contact </Link>
//         </div>
//       </div>
//       <div className="rightSide">
//         <Link to="/"> Home </Link>
//         <Link to="/menu"> Menu </Link>
//         <Link to="/about"> About </Link>
//         <Link to="/contact"> Contact </Link>
//         <button onClick={toggleNavbar}></button>
//         <div className="cart">
//           {/* onClick={() => setShow(false)}> */}
//           <span>
//             <i className="fas fa-cart-plus"></i>
//           </span>
//           <span>{getTotalQuantity() || 0}</span>
//         </div>

//         {/* <Stack direction="row" spacing={1}>
//           <IconButton color="primary" aria-label="add to shopping cart">
//             <AddShoppingCartIcon />
//           </IconButton>
//         </Stack>
//         ; */}
//         {/* <div className="nav-container">
//           <CartIcon />
//           <div className="amount-container">
//             <p className="total-amount">{amount}</p>
//           </div>
//         </div>
//         <ReorderIcon /> */}
//       </div>
//     </div>
//   );
// }

// export default Navbar;

// // import React, { useState } from "react";
// // import Logo from "../assets/logo-pizza.png";
// // import { Link } from "react-router-dom";
// // import "../styles/Navbar.css";
// // // import ReorderIcon from "@material-ui/icons/Reorder";
// // // import { CartIcon } from "../icons";
// // // import { useSelector } from "react-redux";
// // // import IconButton from "@mui/material/IconButton";
// // // import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// // // import Stack from "@mui/material/Stack";

// // function Navbar() {
// //   const [openLinks, setOpenLinks] = useState(false);

// //   const toggleNavbar = () => {
// //     setOpenLinks(!openLinks);
// //   };
// //   // const { amount } = useSelector((store) => store.cart);
// //   return (
// //     <div className="navbar">
// //       <div className="leftSide" id={openLinks ? "open" : "close"}>
// //         <Link to="/">
// //           <img src={Logo} />{" "}
// //         </Link>
// //         <div className="hiddenLinks">
// //           <Link to="/"> Home </Link>
// //           <Link to="/menu"> Menu </Link>
// //           <Link to="/about"> About </Link>
// //           <Link to="/contact"> Contact </Link>
// //         </div>
// //       </div>
// //       <div className="rightSide">
// //         <Link to="/"> Home </Link>
// //         <Link to="/menu"> Menu </Link>
// //         <Link to="/about"> About </Link>
// //         <Link to="/contact"> Contact </Link>
// //         <button onClick={toggleNavbar}></button>
// //         <div className="cart">
// //           {/* onClick={() => setShow(false)}> */}
// //           <span>
// //             <i className="fas fa-cart-plus"></i>
// //           </span>
// //           <span>0</span>
// //         </div>

// //         {/* <Stack direction="row" spacing={1}>
// //           <IconButton color="primary" aria-label="add to shopping cart">
// //             <AddShoppingCartIcon />
// //           </IconButton>
// //         </Stack>
// //         ; */}
// //         {/* <div className="nav-container">
// //           <CartIcon />
// //           <div className="amount-container">
// //             <p className="total-amount">{amount}</p>
// //           </div>
// //         </div>
// //         <ReorderIcon /> */}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Navbar;
