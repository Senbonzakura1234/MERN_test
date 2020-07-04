import React,  { useState, Component } from 'react';
// import { Button, Container, Card, Col, Row } from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'node-uuid';

class Shop extends Component {
    state = {
        items: [
            { id: uuid.v4(), name: 'New Object' },
            { id: uuid.v4(), name: 'New Object' },
            { id: uuid.v4(), name: 'New Object' },
            { id: uuid.v4(), name: 'New Object' },
            { id: uuid.v4(), name: 'New Object' },
            { id: uuid.v4(), name: 'New Object' },
            { id: uuid.v4(), name: 'New Object' },
            { id: uuid.v4(), name: 'New Object' }
        ]
    }
    render(){
        const { items } = this.state;
        return(
 
        )
    }
}

export default Shop;