import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
function Entry(props) {
  return (
    <div className="term">
      <div className="">
        <img src={props.imageURL} alt="" />
      </div>
      <h3 style={{color:"black"}}>{props.name}</h3>
      <p style={{color:"black"}}>{props.description}</p>
      <Button variant="dark" size="lg" >
        <Link to={`/user/${props.id}`} style={{ color: 'white', textDecoration: 'none' }}>
          Summary
        </Link>
      </Button>
    </div>
  );
}

export default Entry;