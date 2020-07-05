import React,  { useState, Component } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'node-uuid';

class ShopComp extends Component {
    state = {
        items: [
            { id: uuid.v4(), name: 'Egg' },
            { id: uuid.v4(), name: 'Milk' }, 
            { id: uuid.v4(), name: 'Water' }
        ]
    }
    render(){
        const { items } = this.state;
        return(
            <Col xs="12" lg="9" xl="10" className="pt-3 ml-lg-auto">
                <Row>
                    <Col xs="12" className="text-right">
                        <Button variant="custom-shark" onClick={() => {
                                const name = prompt('Enter Item');
                                if(name){
                                    this.setState(state => ({
                                        items: [...state.items, { id: uuid.v4(), name } ] 
                                    }));
                                }
                            }} className="ml-auto mr-2 mr-md-4">
                            Add new
                        </Button>
                    </Col>
                    <Col xs="12">
                        <TransitionGroup className="shopping-list row">
                            {items.map(({ id, name }) => (
                                <CSSTransition key={id} timeout={500} classNames="item">
                                    <Col md="6" xl="4" className="p-4 item">
                                        <Card>
                                            <Card.Img variant="top"
                                                src="http://via.placeholder.com/180x100?text=Shop%20Item" />
                                            <Card.Body>
                                                <Card.Title>{name}</Card.Title>
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                                </Card.Text>
                                                <Button onClick={() => {
                                                        this.setState(state => ({
                                                            items: state.items
                                                            .filter(item => item.id !== id)
                                                        }));
                                                    }}
                                                variant="custom-shark">
                                                    Delete
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </Col>
                </Row> 
            </Col>
        );
    }
}

export default ShopComp;