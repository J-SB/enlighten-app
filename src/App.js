// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Header from "./components/navbar"
import Body from "./components/body"
import Footer from './components/footer';
import Hotel from "./components/hotel"
import Offers from './components/offers';
import Careers from './components/careers'
import { Route, Routes } from 'react-router-dom';

class App extends React.Component {

  render(){
  return (
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={ <div>
            <Body />
          </div> } />
          <Route path="offers" element={
            <div> 
            <Offers/></div> } />
          <Route path="contact" element={ <div></div> } />
          <Route path="careers" element={ <div>
            <Careers/>
          </div> } />
        </Routes>

        <Footer />
      </div>
    )}
}

export default App;
