import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { store } from "./store";
import { Provider } from "react-redux";
import CardsDetails from "./pages/CardsDetails";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/menu" exact element={<Menu />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />

            <Route exact element={<CardsDetails />} path="/CardsDetails/:id" />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

// import "./App.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Menu from "./pages/Menu";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import { store } from "./store";
// import { Provider } from "react-redux";
// import "bootstrap/dist/css/bootstrap.min.css";

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// // import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   return (
//     <div className="App">
//       <Provider store={store}>
//         <BrowserRouter>
//           <Navbar />
//           <Routes>
//             <Route path="/" exact element={<Home />} />
//             <Route path="/menu" exact element={<Menu />} />
//             <Route path="/about" exact element={<About />} />
//             <Route path="/contact" exact element={<Contact />} />
//           </Routes>
//           <Footer />
//         </BrowserRouter>
//       </Provider>
//     </div>
//   );
// }

// export default App;

// // import "./App.css";
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";
// // import Home from "./pages/Home";
// // import Menu from "./pages/Menu";
// // import About from "./pages/About";
// // import Contact from "./pages/Contact";
// // import { BrowserRouter, Route, Routes } from "react-router-dom";
// // // import "bootstrap/dist/css/bootstrap.min.css";

// // function App() {
// //   return (
// //     <div className="App">
// //       <BrowserRouter>
// //         <Navbar />
// //         <Routes>
// //           <Route path="/" exact element={<Home />} />
// //           <Route path="/menu" exact element={<Menu />} />
// //           <Route path="/about" exact element={<About />} />
// //           <Route path="/contact" exact element={<Contact />} />
// //         </Routes>
// //         <Footer />
// //       </BrowserRouter>
// //     </div>
// //   );
// // }

// // export default App;
