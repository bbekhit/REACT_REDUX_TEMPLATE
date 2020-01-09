import React from "react";

const Home = () => {
  return (
    <div style={{ border: "1px solid red", padding: "20px" }}>
      <div className="row justify-content-start">
        <div className="col-md-2" style={{ border: "1px solid green" }}>
          Hello
        </div>
        <div className="col-md-2" style={{ border: "1px solid purple" }}>
          There
        </div>
      </div>
    </div>
  );
};

export default Home;
