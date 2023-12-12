// import Disease from './component/DiseaseSection';
// import Footer from './component/Footer';
// import Hero from './component/Hero';
// import MyNavbar from './component/MyNavbar';
// import UploadImage, { ImageUpload } from './component/UploadImage';
// import logo from './logo.svg';

// function App() {
//   return (
//     <div className="App">
//       <MyNavbar/>
//       <Hero/>
//       <Disease/>
//   <Footer/>
//   <ImageUpload/>
//     </div>
//   );
// }

// export default App;


// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './component/Home'; // Import your Home component
// import UploadImage from './component/UploadImage'; // Import your UploadImage component

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/upload-image" component={UploadImage} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;


// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './component/Home'; // Import your Home component
// import UploadImage from './component/UploadImage'; // Import your UploadImage component

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/upload-image" element={<UploadImage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Home from "./component/Home";
// import UploadImage from "./component/UploadImage";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>,
//   },

//   {
//     path: "upload_image",
//     element: <UploadImage/>,
//   },


// ]);

// function App() {
//   return(
//     <div className="App">
//     <RouterProvider router={router}/>
//     </div>
//   )
// }
// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home'
import UploadImage  from './component/UploadImage';
function App() {
  return (
    <div>
    <Home/>
  {/* <Router>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="upload-image" element={<UploadImage/>} />
      </Routes>
      </Router> */}
      </div> );
}

export default App;