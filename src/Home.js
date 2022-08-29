import React from "react";
import Itemcard from "./Itemcard";
import data from "./data";

const Home = () => {
  return (
    <>
      <h1 className="text-center mt-3">Our Menu</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.productData.map((item, index) => {
            return (
              <Itemcard
                img={item.img}
                title={item.title}
                price={item.price}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
