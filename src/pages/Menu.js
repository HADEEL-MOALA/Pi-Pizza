import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cardsdata from "./CardsData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/reducers/reducer";

function GridExample() {
  const dispatch = useDispatch();

  return (
    <div className="container mt-3">
      <h2 className="text-center display-5">Our Menu</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {Cardsdata.map((element, id) => {
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
                  <Card.Text>Price : ${element.price}</Card.Text>
                  <div className="button_div d-flex justify-content-center">
                    <Button
                      variant="dark"
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: element.id,
                            title: element.rname,
                            image: element.imgdata,
                            price: element.price,
                          })
                        )
                      }
                      className="col-lg-12"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default GridExample;

// import React from "react";
// // import { MenuList } from "../helpers/MenuList";
// // import MenuItem from "../components/MenuItem";
// // import "../styles/Menu.css";
// import "./style.css";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Cardsdata from "./CardsData";
// import { useDispatch, useSelector } from "react-redux";
// import { ADD } from "../redux/actions/action";

// function GridExample() {
//   const dispatch = useDispatch();

//   const send = (e) => {
//     // console.log(e);
//     dispatch(ADD(e));
//   };
//   return (
//     <div className="container mt-3">
//       <h1 className="text-center display-5">Our Menu</h1>

//       <div className="row d-flex justify-content-center align-items-center">
//         {Cardsdata.map((element, id) => {
//           return (
//             <>
//               <Card
//                 style={{ width: "22rem", border: "none" }}
//                 className="mx-2 mt-4 card_style"
//               >
//                 <Card.Img
//                   variant="top"
//                   src={element.imgdata}
//                   style={{ height: "16rem" }}
//                   className="mt-3"
//                 />
//                 <Card.Body>
//                   <Card.Title>{element.rname}</Card.Title>
//                   <Card.Text>Price : ${element.price}</Card.Text>
//                   <div className="button_div d-flex justify-content-center">
//                     <Button
//                       variant="dark"
//                       onClick={() => send(element)}
//                       className="col-lg-12"
//                     >
//                       Add to Cart
//                     </Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default GridExample;

// import React from "react";
// // import { MenuList } from "../helpers/MenuList";
// // import MenuItem from "../components/MenuItem";
// // import "../styles/Menu.css";
// import "./style.css";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Cardsdata from "./CardsData";
// import { useDispatch } from "react-redux";
// import { ADD } from "../redux/actions/action";

// // import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

// function GridExample() {
//   const [data, setData] = useState(Cardsdata);
//   return (
//     <div className="container mt-3">
//       <h2 className="text-center">Our Menu</h2>{" "}
//       <div className="row d-flex justify-content-center align-items-center">
//         {Cardsdata.map((element, id) => {
//           return (
//             <>
//               console.log(data);
//               <Card
//                 style={{ width: "22rem", border: "none" }}
//                 className="mx-2 mt-4 card_style"
//               >
//                 <Card.Img
//                   variant="top"
//                   src={element.imgdata}
//                   style={{ height: "16rem" }}
//                   className="mt-3"
//                 />
//                 <Card.Body>
//                   <Card.Title>{element.rname}</Card.Title>
//                   <Card.Text>Price : ${element.price}</Card.Text>
//                   <div className="button_div d-flex justify-content-center">
//                     <Button
//                       variant="dark"
//                       onClick={() => send(element)}
//                       className="col-lg-12"
//                     >
//                       Add to Cart
//                     </Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </>
//           );
//         })}
//         سسسسشسيش
//       </div>
//     </div>
//   );
// }

// export default GridExample;
// //     <Row xs={1} md={2} className="g-4">
// //       {Array.from({ length: 4 }).map((_, idx) => (
// //         <Col>
// //           <Card>
// //             <Card.Img variant="top" src="img" />
// //             <Card.Body>
// //               <Card.Title>Card title</Card.Title>
// //               <Card.Text>
// //                 This is a longer card with supporting text below as a natural
// //                 lead-in to additional content. This content is a little bit
// //                 longer.
// //               </Card.Text>
// //             </Card.Body>
// //           </Card>
// //         </Col>
// //       ))}
// //     </Row>
// //   );
// // }

// // export default GridExample;

// // const Cards = () => {
// //   const [data, setData] = useState(Cardsdata);
// //   // console.log(data);

// //   const dispatch = useDispatch();

// //   const send = (e) => {
// //     // console.log(e);
// //     dispatch(ADD(e));
// //   };

// //   return (
// //     <div className="container mt-3">
// //       <h2 className="text-center">Our Menu</h2>

// //       <div className="row d-flex justify-content-center align-items-center">
// //         {data.map((element, id) => {
// //           return (
// //             <>
// //               <Card
// //                 style={{ width: "22rem", border: "none" }}
// //                 className="mx-2 mt-4 card_style"
// //               >
// //                 <Card.Img
// //                   variant="top"
// //                   src={element.imgdata}
// //                   style={{ height: "16rem" }}
// //                   className="mt-3"
// //                 />
// //                 <Card.Body>
// //                   <Card.Title>{element.rname}</Card.Title>
// //                   <Card.Text>Price : ${element.price}</Card.Text>
// //                   <div className="button_div d-flex justify-content-center">
// //                     <Button
// //                       variant="dark"
// //                       onClick={() => send(element)}
// //                       className="col-lg-12"
// //                     >
// //                       Add to Cart
// //                     </Button>
// //                   </div>
// //                 </Card.Body>
// //               </Card>
// //             </>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cards;

// // function Menu() {
// //   return (
// //     <div className="menu">
// //       <h1 className="menuTitle">Our Menu</h1>
// //       <div className="menuList">
// //         {MenuList.map((menuItem, key) => {
// //           return (
// //             <MenuItem
// //               key={key}
// //               image={menuItem.image}
// //               name={menuItem.name}
// //               price={menuItem.price}
// //             />
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Menu;
