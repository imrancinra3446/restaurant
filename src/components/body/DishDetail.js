import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

const DishDetail = (props) => {
  return (
    <Card style={{textAlign: "left"}}>
        <CardImg src={props.dish.image} alt={props.dish.name} width="100%"/>
        <CardBody>
            <CardTitle><h4>{props.dish.name}</h4></CardTitle>
            <CardText>
                <p>{props.dish.description}</p>
                <p>{props.dish.price}</p>
            </CardText>
        </CardBody>
    </Card>
  )
}

export default DishDetail;
