import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeItem } from "../redux/reducers/reducer";
import { incrementQuantity } from "../redux/reducers/reducer";
import { decrementQuantity } from "../redux/reducers/reducer";
import { Link } from "react-router-dom";

const CardsDetails = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  let MyId = () => {
    let { id } = useParams();
    return id;
  };
  if (cart.length === 0) {
    window.location.href = "/menu";
  }
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Iteams Details Page</h2>

        <section
          style={{ padding: "50px 0", border: "1px solid #EEEEEE" }}
          className="container mt-3 "
        >
          <div className="iteamsdetails">
            {cart
              .filter((item) => item.id == MyId())
              .map((ele) => (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                      padding: "50px 0",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <img
                        style={{
                          height: "400px",
                          width: "500px",
                          marginBottom: "5px",
                        }}
                        src={ele.image}
                        alt=""
                      />
                    </div>
                    <div style={{ width: "100%", margin: "auto" }}>
                      <div
                        style={{
                          marginBottom: "25px",
                        }}
                      >
                        <strong>Pizza Name</strong> : {ele.title}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 30,
                          marginBottom: "25px",
                        }}
                      >
                        <div>
                          <strong>Price</strong> : ${ele.price}
                        </div>
                        <div>
                          {" "}
                          <strong>Rating :</strong>{" "}
                          <span
                            style={{
                              background: "green",
                              color: "#fff",
                              padding: "2px 5px",
                              borderRadius: "5px",
                              marginBottom: "25px",
                            }}
                          >
                            {ele.rating} ★{" "}
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 30,
                          marginBottom: "25px",
                        }}
                      >
                        <div>
                          {" "}
                          <strong>Address</strong> : {ele.address}
                        </div>
                        <div>
                          {" "}
                          <strong>Order Review :</strong>{" "}
                          <span>{ele.somedata} </span>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 30,
                          marginBottom: "25px",
                        }}
                      >
                        <div>
                          {" "}
                          <strong>Total</strong> :${" "}
                          {ele.quantity === 1 ? ele.price : ele.lastPrice}
                        </div>
                        <div>
                          <strong>Remove :</strong>{" "}
                          <Link
                            onClick={() => {
                              dispatch(removeItem(ele.id));
                            }}
                            to={{
                              pathname: `/menu`,
                            }}
                          >
                            <span>
                              <i
                                className="fas fa-trash"
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                              ></i>{" "}
                            </span>
                          </Link>
                        </div>
                      </div>
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
                          onClick={() => dispatch(decrementQuantity(ele.id))}
                        >
                          -
                        </span>
                        <span style={{ fontSize: 22 }}>{ele.quantity}</span>
                        <span
                          style={{ fontSize: 24 }}
                          onClick={() => dispatch(incrementQuantity(ele.id))}
                        >
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;

// import React, { useEffect, useState } from "react";
// import Table from "react-bootstrap/Table";
// import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { DLT, ADD, REMOVE } from "../redux/actions/action";

// const CardsDetails = () => {
//   const [data, setData] = useState([]);
//   console.log(data);

//   const { id } = useParams();
//   // console.log(id);

//   const history = useNavigate();

//   const dispatch = useDispatch();

//   const getdata = useSelector((state) => state.cartreducer.carts);
//   // console.log(getdata);

//   const compare = () => {
//     let comparedata = getdata.filter((e) => {
//       return e.id == id;
//     });
//     setData(comparedata);
//   };

//   // add data

//   const send = (e) => {
//     // console.log(e);
//     dispatch(ADD(e));
//   };

//   const dlt = (id) => {
//     dispatch(DLT(id));
//     history("/");
//   };

//   // remove one
//   const remove = (item) => {
//     dispatch(REMOVE(item));
//   };

//   useEffect(() => {
//     compare();
//   }, [id]);

//   return (
//     <>
//       <div className="container mt-2">
//         <h2 className="text-center">Iteams Details Page</h2>

//         <section className="container mt-3">
//           <div className="iteamsdetails">
//             {data.map((ele) => {
//               return (
//                 <>
//                   <div className="items_img">
//                     <img src={ele.imgdata} alt="" />
//                   </div>

//                   <div className="details">
//                     <Table>
//                       <tr>
//                         <td>
//                           <p>
//                             {" "}
//                             <strong>Pizza Name</strong> : {ele.rname}
//                           </p>
//                           <p>
//                             {" "}
//                             <strong>Price</strong> : ${ele.price}
//                           </p>
//                           <p>
//                             {" "}
//                             <strong>Address</strong> : {ele.address}
//                           </p>
//                           <p>
//                             {" "}
//                             <strong>Total</strong> :$ {ele.price * ele.qnty}
//                           </p>
//                           <div
//                             className="mt-5 d-flex justify-content-between align-items-center"
//                             style={{
//                               width: 100,
//                               cursor: "pointer",
//                               background: "#ddd",
//                               color: "#111",
//                             }}
//                           >
//                             <span
//                               style={{ fontSize: 24 }}
//                               onClick={
//                                 ele.qnty <= 1
//                                   ? () => dlt(ele.id)
//                                   : () => remove(ele)
//                               }
//                             >
//                               -
//                             </span>
//                             <span style={{ fontSize: 22 }}>{ele.qnty}</span>
//                             <span
//                               style={{ fontSize: 24 }}
//                               onClick={() => send(ele)}
//                             >
//                               +
//                             </span>
//                           </div>
//                         </td>
//                         <td>
//                           <p>
//                             <strong>Rating :</strong>{" "}
//                             <span
//                               style={{
//                                 background: "green",
//                                 color: "#fff",
//                                 padding: "2px 5px",
//                                 borderRadius: "5px",
//                               }}
//                             >
//                               {ele.rating} ★{" "}
//                             </span>
//                           </p>
//                           <p>
//                             <strong>Order Review :</strong>{" "}
//                             <span>{ele.somedata} </span>
//                           </p>
//                           <p>
//                             <strong>Remove :</strong>{" "}
//                             <span>
//                               <i
//                                 className="fas fa-trash"
//                                 onClick={() => dlt(ele.id)}
//                                 style={{
//                                   color: "red",
//                                   fontSize: 20,
//                                   cursor: "pointer",
//                                 }}
//                               ></i>{" "}
//                             </span>
//                           </p>
//                         </td>
//                       </tr>
//                     </Table>
//                   </div>
//                 </>
//               );
//             })}
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default CardsDetails;
