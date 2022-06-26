import React from "react";
import LineTo from "react-lineto";
import { Button, Row, Col } from "react-bootstrap";

function HomeScreen() {


const handleLeftClick = (Left) => {


}

  return (
    <div className="grid-1">
      <div>
        <div className="A">
          <Button onClick={handleLeftClick(1)} style={{ backgroundColor: "blue" }}></Button>
        </div>

        <div className="B">
          <Button style={{ backgroundColor: "blue" }}></Button>
        </div>
      </div>

      <div>
        <div className="C">
          <Button style={{ backgroundColor: "red" }}></Button>
        </div>

        <div className="D">
          <Button style={{ backgroundColor: "red" }}></Button>
        </div>
      </div>

      <LineTo borderWidth="10px" borderColor="blue" delay="0" from="A" to="B" />
      <LineTo borderWidth="10px" borderColor="red" delay="0" from="C" to="D" />
      <LineTo borderWidth="10px" borderColor="orange" delay="0" from="A" to="D" />
    </div>
  );
}

export default HomeScreen;
