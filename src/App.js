import React from 'react';
import Navbar from './Navbar';
import './Navbar.css';
import Stories from './Stories';
import './Stories.css';
import SuggestedProfiles from './SuggestedProfiles';
import './SuggestedProfiles.css';
import Feed from './Feed';
import './Feed.css';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="myContainer">
      <div className="rightSide">
      <Stories />
      <Feed />
      </div>
      <div className="leftSide">
      <SuggestedProfiles />
      </div>
      </div>
      {/* Add other components and content here */}
    </div>
  );
};

export default App;
