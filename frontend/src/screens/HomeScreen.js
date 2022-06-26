import React from "react";
import LineTo from "react-lineto";
import { Button,Row,Col } from "react-bootstrap";

function HomeScreen() {
  return (
    <div>

      <div className="A">
        <Button style={{backgroundColor:"blue"}}></Button>
      </div>

        
      <div className="B">
        <Button style={{backgroundColor:"blue"}}></Button>
      </div>

      <div className="C">
        <Button style={{backgroundColor:"red"}}></Button>
      </div>

      <div className="D">
        <Button style={{backgroundColor:"red"}}></Button>
      </div>

      <LineTo borderWidth="10px" borderColor="blue" delay="0" from="A" to="B" />
    </div>
  );
}

export default HomeScreen;
