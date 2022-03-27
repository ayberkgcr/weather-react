
import './App.css';
import React  from 'react';
 const api={
   key:"6a7c6fc2b94c98c6bb2b95cfe7693c93",
   base: "https://api.openweathermap.org/data/2.5/"
 }

function App() {
  return (
    <div className="app">
      <main>
         <div classname="search-box">
           <input
            type="text"
            className="search-bar"
            placeholder="Search..."
           />
         </div>
      </main>
      
    </div>
  );
}

export default App;
