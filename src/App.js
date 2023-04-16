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

class App extends React.Component {

  render(){
  return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
        {/* <header className="App-header">
          <h1>Amazing Hotels</h1>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Hotels</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <section id="hero">
            <h2>Welcome to Amazing Hotels</h2>
            <p>Experience the best of luxury and comfort at our world-class hotels.</p>
            <button>Explore Our Hotels</button>
          </section>
          <section id="featured-hotels">
            <h2>Featured Hotels</h2>
            <div className="hotel-card">
              <img src="https://via.placeholder.com/300x200" alt="Hotel Name" />
              <div className="hotel-details">
                <h3>Hotel Name</h3>
                <p>Location: City, Country</p>
                <p>Starting Price: $XXX/night</p>
                <button>Book Now</button>
              </div>
            </div>
            <div className="hotel-card">
              <img src="https://via.placeholder.com/300x200" alt="Hotel Name" />
              <div className="hotel-details">
                <h3>Hotel Name</h3>
                <p>Location: City, Country</p>
                <p>Starting Price: $XXX/night</p>
                <button>Book Now</button>
              </div>
            </div>
            <div className="hotel-card">
              <img src="https://via.placeholder.com/300x200" alt="Hotel Name" />
              <div className="hotel-details">
                <h3>Hotel Name</h3>
                <p>Location: City, Country</p>
                <p>Starting Price: $XXX/night</p>
                <button>Book Now</button>
              </div>
            </div>
          </section>
          <section id="about-us">
            <h2>About Us</h2>
            <p>At Amazing Hotels, we believe that every traveler deserves the best experience possible. That's why we strive to provide the highest quality accommodations and amenities at all of our hotels. Whether you're traveling for business or pleasure, we have the perfect hotel for you.</p>
          </section>
          <section id="contact-us">
            <h2>Contact Us</h2>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message"></textarea>
              <button>Send Message</button>
            </form>
          </section>
        </main>
        <footer>
          <p>&copy; 2023 Amazing Hotels</p>
        </footer> */}
      </div>
    )}
}

export default App;
