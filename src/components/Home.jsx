import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <div style={{flexDirection:'column'}}>
      <h1>Home Page</h1>
      <br />
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/headTail">Head and Tail</Link>
        </li>
      </ul>
      </div>
      
    </div>
  );
};

export default Home;