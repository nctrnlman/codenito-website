import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Review from "../../codenito-website/src/pages/Review";
import "./App.css"; // Import your custom CSS file

function App() {
  return (
    <div className="App">
      <div className="center-container">
        <Review /> {/* Render the Review component */}
      </div>
    </div>
  );
}

export default App;
