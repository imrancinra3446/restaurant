import React from 'react'
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const MenuItem = (props) => {
  return (
    <Card style={{ margin: "10px auto" }}>
      <CardBody>
        <CardImg width="100%" src={props.dish.image} alt={props.dish.name} style={{ opacity: "0.5" }} />
        <CardImgOverlay>
          <CardTitle onClick={props.onDishSelected} style={{cursor: "pointer"}}><h4>{props.dish.name}</h4></CardTitle>
        </CardImgOverlay>
      </CardBody>
    </Card>
  )
}

export default MenuItem;
