import React,  { useState, Component } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'node-uuid';

class SideBarComp extends Component{
    state = {
        sideItems: [
            { id: uuid.v4(), name: 'Link item' },
            { id: uuid.v4(), name: 'Link item' },
            { id: uuid.v4(), name: 'Link item' },
            { id: uuid.v4(), name: 'Link item' },
            { id: uuid.v4(), name: 'Link item' }
        ]
    }
    render(){
        const { sideItems } = this.state;
        return(
            <Col xs="12" lg="3" xl="2">
            </Col>
        )
    }
}
export default SideBarComp;