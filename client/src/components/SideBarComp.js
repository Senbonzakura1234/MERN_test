import React,  { useState } from 'react';
import { Collapse, Button, Nav, Col, NavLink, NavItem } from 'reactstrap';
import { MenuButtonWide } from 'react-bootstrap-icons';
import { useMediaQuery } from 'react-responsive';
import uuid from 'node-uuid';

const SideBarComp = (props) => {
    const [navs, setNavs] = useState([
        { 
            id: uuid(), 
            label: "List Based 1",
            navItems: [
                { itemId: uuid(), itemLabel: "Link 1", link: "#" },
                { itemId: uuid(), itemLabel: "Link 2", link: "#" },
                { itemId: uuid(), itemLabel: "Link 3", link: "#" },
                { itemId: uuid(), itemLabel: "Link 4", link: "#" },
            ]
        },
        { 
            id: uuid(), 
            label: "List Based 2",
            navItems: [
                { itemId: uuid(), itemLabel: "Link 5", link: "#" },
                { itemId: uuid(), itemLabel: "Link 6", link: "#" },
                { itemId: uuid(), itemLabel: "Link 7", link: "#" },
                { itemId: uuid(), itemLabel: "Link 8", link: "#" },
            ]
        },
        { 
            id: uuid(), 
            label: "List Based 3",
            navItems: [
                { itemId: uuid(), itemLabel: "Link 9", link: "#" },
                { itemId: uuid(), itemLabel: "Link 10", link: "#" },
                { itemId: uuid(), itemLabel: "Link 11", link: "#" },
                { itemId: uuid(), itemLabel: "Link 12", link: "#" },
            ]
        }
      ]);
    const isMobile = useMediaQuery({
        query: '(max-device-width: 768px)'
    })
    const [isOpen, setIsOpen] = useState(!isMobile);

    const [isTab1Open, setIsTab1Open] = useState(false);
    const [isTab2Open, setIsTab2Open] = useState(false);
    const [isTab3Open, setIsTab3Open] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <Col xs={12} lg={3} xl={2}>
        <Button color="custom-shark" className="d-lg-none" onClick={toggle} style={{ marginBottom: '1rem' }}>
            <MenuButtonWide/>
        </Button>
        <Collapse isOpen={isOpen} className="d-lg-block">
            <h4 className="font-weight-bolder my-3">Sidebar</h4>

            {navs.map(({ id , label , navItems}) => (
                <div key={id}>
                    <p className="font-weight-bold">{label}</p>
                    {navItems.map(({ itemId , itemLabel , link }) => (
                        <Nav vertical key={itemId}>
                            <NavItem>
                                <NavLink href={link}>{itemLabel}</NavLink>
                            </NavItem>
                        </Nav>
                    ))}
    
                </div>
            ))}

        </Collapse>
      </Col>
    );
  }
  
  export default SideBarComp;