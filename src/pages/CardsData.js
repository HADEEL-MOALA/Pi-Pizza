import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";
import img7 from "../img/img7.jpg";
import img8 from "../img/img8.jpg";

// const data = {
//   productData: [
const Cardsdata = [
  {
    id: 1,
    imgdata: img1,
    rname: "Delicious  Pizza",
    price: 184.99,
    address: "Al-Arid Street",
    rating: "3.8",
    qnty: 0,
  },
  {
    id: 2,
    imgdata: img2,
    rname: "Meat Pizza",
    price: 211.94,
    address: "Al Thawra Street",
    somedata: " 2525 + order placed from here recently",
    rating: "3.9",
    qnty: 0,
  },

  {
    id: 3,
    imgdata: img3,
    rname: "Italian Pizza",
    price: 256.56,
    address: "Al-Hamrat",
    somedata: " 650 + order placed from here recently",
    rating: "4.2",
    qnty: 0,
  },
  {
    id: 4,
    imgdata: img4,
    rname: "Vegan Pizza",
    price: 207.99,
    address: "Sand District",
    somedata: " 300 + order placed from here recently",
    rating: "3.8",
    qnty: 0,
  },
  {
    id: 5,
    imgdata: img5,
    rname: "Chicken Pizza",
    price: 184.99,
    address: "Food Street",
    somedata: "1050 + order placed from here recently",
    rating: "4.0",
    qnty: 0,
  },
  {
    id: 6,
    imgdata: img6,
    rname: "Very Expensive Pizza",
    price: 1997.99,
    address: "Street Food",
    somedata: " 1100 + order placed from here recently",
    rating: "3.8",
    qnty: 0,
  },
  {
    id: 7,
    imgdata: img7,
    rname: "French Pizza",
    price: 187.99,
    address: "Street Food",
    somedata: "500 + order placed from here recently",
    rating: "3.8",
    qnty: 0,
  },
  {
    id: 8,
    imgdata: img8,
    rname: "Spicy pizza",
    price: 220.22,
    address: "Street Food",
    somedata: "500 + order placed from here recently",
    rating: "3.2",
    qnty: 0,
  },
  {
    id: 9,
    rname: "Cheese Pizza",
    imgdata:
      "https://b.zmtcdn.com/data/pictures/chains/1/19708611/10f90d4a69678d98662514d173b29665_o2_featured_v2.jpg",
    address: "Pizza, Fast Food, Pasta",
    delimg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
    somedata: " 650 + order placed from here recently",
    price: 70,
    rating: "4.2",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },
];
export default Cardsdata;
// export default data;

// const Cardsdata = [
//   {
//     id: 1,
//     rname: "Massala Theoryy",
//     imgdata:
//       "https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp",
//     address: "North Indian, Biryani, Mughlai",
//     delimg:
//       "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
//     somedata: " 1175 + order placed from here recently",
//     price: 350,
//     rating: "3.8",
//     arrimg:
//       "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
//     qnty: 0,
//   },
//   {
//     id: 2,
//     rname: "Jugaadi Adda",
//     imgdata:
//       "https://b.zmtcdn.com/data/pictures/chains/5/19295245/089cbcf1d3307542c72f77272556b28b_o2_featured_v2.jpg?output-format=webp",
//     address: "Street Food",
//     delimg:
//       "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
//     somedata: " 2525 + order placed from here recently",
//     price: 25,
//     rating: "3.9",
//     arrimg:
//       "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
//     qnty: 0,
//   },
//   {
//     id: 3,
//     rname: "La Milano Pizzeria",
//     imgdata:
//       "https://b.zmtcdn.com/data/pictures/chains/1/19708611/10f90d4a69678d98662514d173b29665_o2_featured_v2.jpg",
//     address: "Pizza, Fast Food, Pasta",
//     delimg:
//       "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
//     somedata: " 650 + order placed from here recently",
//     price: 70,
//     rating: "4.2",
//     arrimg:
//       "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
//     qnty: 0,
//   },
//   {
//     id: 4,
//     rname: "Momoman",
//     imgdata:
//       "https://b.zmtcdn.com/data/pictures/chains/1/113401/59f29399060caefcc575d59dc9402ce8_o2_featured_v2.jpg",
//     address: "Momos",
//     delimg:
//       "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
//     somedata: " 300 + order placed from here recently",
//     price: 70,
//     rating: "3.8",
//     arrimg:
//       "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
//     qnty: 0,
//   },
//   {
//     id: 5,
//     rname: "Jassi De Parathe",
//     imgdata:
//       "https://b.zmtcdn.com/data/pictures/chains/5/110225/3978e28854b7496dbef9496546734811_o2_featured_v2.jpg",
//     address: "North Indian",
//     delimg:
//       "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
//     somedata: "1050 + order placed from here recently",
//     price: 210,
//     rating: "4.0",
//     arrimg:
//       "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
//     qnty: 0,
//   },
//   {
//     id: 6,
//     rname: "Anjoy Latenight Meals",
//     imgdata:
//       "https://b.zmtcdn.com/data/pictures/5/113895/3c06f6fbb8f667a2537dfdb6f060dc8b_o2_featured_v2.jpg",
//     address: "Wraps FastFood, Chines",
//     delimg:
//       "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
//     somedata: " 1100 + order placed from here recently",
//     price: 100,
//     rating: "3.8",
//     arrimg:
//       "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
//     qnty: 0,
//   },
//   {
//     id: 7,
//     rname: "Hocco Eatery",
//     imgdata:
//       "https://b.zmtcdn.com/data/pictures/chains/5/110155/811c01a5430d50d3260f77917da99e12_o2_featured_v2.jpg",
//     address: "North Indian, Fast Food",
//     delimg:
//       "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
//     somedata: "500 + order placed from here recently",
//     price: 300,
//     rating: "3.8",
//     arrimg:
//       "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
//     qnty: 0,
//   },
//   {
//     id: 8,
//     rname: "Chai Wai",
//     imgdata:
//       "https://b.zmtcdn.com/data/pictures/3/18514413/0a17b72e9fec52a3ca736f4c2ea3646f_o2_featured_v2.jpg",
//     address: "Tea, Coffee, Shake, Beverages",
//     delimg:
//       "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
//     somedata: "500 + order placed from here recently",
//     price: 100,
//     rating: "3.2",
//     arrimg:
//       "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
//     qnty: 0,
//   },
//   {
//     id: 9,
//     rname: "HL Frankie",
//     imgdata:
//       "https://b.zmtcdn.com/data/pictures/7/19639627/94c0a4cf15c02d3982d154e2c5dd8cbb_o2_featured_v2.jpg",
//     address: "Burger, Sandwich, Fast Food",
//     delimg:
//       "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
//     somedata: "2525 + order placed from here recently",
//     price: 100,
//     rating: "3.8",
//     arrimg:
//       "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
//     qnty: 0,
//   },
// ];

// export default Cardsdata;
