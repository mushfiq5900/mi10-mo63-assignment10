import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, category, price, description, img } = props.service
    return (
        <div className="col-lg-4 my-3">
            <CardGroup>
                <Card>
                    <Card.Img variant="top" className='' src={img} height="400" />
                    <Card.Body>
                        <Card.Title className="fw-bold">{name}</Card.Title>
                        <Card.Title><small className="text-muted">{category}</small></Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Title className="fw-bold">{price}</Card.Title>
                    </Card.Body>
                    <Link className='btn btn-info' to="/checkout">Check Out</Link>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Service;