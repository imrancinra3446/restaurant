import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetail = (props) => {

    return (
        <Card style={{ textAlign: "left" }}>
            <CardImg src={props.dish.image} alt={props.dish.name} width="100%" />
            <CardBody>
                <CardTitle><h4>{props.dish.name}</h4></CardTitle>
                <CardText>
                    {props.dish.description}
                </CardText>
                <CardText>
                    {props.dish.price}/-
                </CardText>
                <hr />
                <LoadComments comments={props.dish.comments} />
            </CardBody>
        </Card>
    )
}

export default DishDetail;


