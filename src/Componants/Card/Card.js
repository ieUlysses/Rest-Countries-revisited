import React from "react";
import { Card, ListGroup } from "react-bootstrap";



export default function (country) {

    return (
        <>

            <Card style={{ width: '18rem' }} className="rounded">
                <Card.Img variant="top" src={country.flag} />
                <Card.Body>
                    <Card.Title>{country.name}</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Native-Name:{country.nativeName}</ListGroup.Item>
                        <ListGroup.Item>Region:{country.region}</ListGroup.Item>
                        <ListGroup.Item>CallingCode:{country.callingCodes}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>

        </>

    )
}