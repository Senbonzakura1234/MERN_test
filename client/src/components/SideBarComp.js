import React,  { useState } from 'react';
import { Collapse, Button , Col, Accordion, Nav, Card } from 'react-bootstrap';
import { MenuButtonWide } from 'react-bootstrap-icons';
import { useMediaQuery } from 'react-responsive';
import uuid from 'node-uuid';

const SideBarComp = (props) => {
    const [navs, setNavs] = useState([
        { 
            id: uuid(), 
            label: "List Based 1",
            navItems: [
                { itemId: uuid(), itemLabel: "Link 1", link: "#/" },
                { itemId: uuid(), itemLabel: "Link 2", link: "#/" },
                { itemId: uuid(), itemLabel: "Link 3", link: "#/" },
                { itemId: uuid(), itemLabel: "Link 4", link: "#/" },
            ]
        },
        { 
            id: uuid(), 
            label: "List Based 2",
            navItems: [
                { itemId: uuid(), itemLabel: "Link 5", link: "#/" },
                { itemId: uuid(), itemLabel: "Link 6", link: "#/" },
                { itemId: uuid(), itemLabel: "Link 7", link: "#/" },
                { itemId: uuid(), itemLabel: "Link 8", link: "#/" },
            ]
        },
        { 
            id: uuid(), 
            label: "List Based 3",
            navItems: [
                { itemId: uuid(), itemLabel: "Link 9", link: "#/" },
                { itemId: uuid(), itemLabel: "Link 10", link: "#/" },
                { itemId: uuid(), itemLabel: "Link 11", link: "#/" },
                { itemId: uuid(), itemLabel: "Link 12", link: "#/" },
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


  
    return (
      <Col xs={12} lg={3} xl={2} className="bg-light sidebar py-lg-4">
        <div className="d-flex py-2">
 
            <h4 className="font-weight-bolder my-auto d-none d-lg-block pl-lg-3">Sidebar</h4>
            <Button variant="custom-shark" 
                onClick={() => setIsOpen(!isOpen)}
                aria-controls="sidebar-wrapper"
                aria-expanded={isOpen}
                className="d-lg-none ml-2
                 btn-sm my-auto" style={{ marginBottom: '1rem' }}>
                <MenuButtonWide/>
            </Button>
        </div>
        <Collapse in={isOpen} className="d-lg-block">
            <Accordion defaultActiveKey={navs[0].id}>
                {navs.map(({ id , label , navItems}) => (
                    <Card className="accordionCard" key={id}>
                        <Accordion.Toggle as={Nav.Link} className="bg-light text-dark" eventKey={id}>
                            <p className="font-weight-bold mb-0">{label}</p>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={id}>
                            <Card.Body className="pt-0 bg-light">
                                <Nav className="flex-column ">
                                    {navItems.map(({ itemId , itemLabel , link }) => (
                                        <Nav.Link key={itemId} className="text-muted px-0" href={link}>
                                            {itemLabel}
                                        </Nav.Link>
                                    ))}
                                    {/* <Nav.Link className="text-muted px-0" href="#/">Active</Nav.Link>
                                    <Nav.Link className="text-muted px-0" eventKey="link-1">Link</Nav.Link>
                                    <Nav.Link className="text-muted px-0" eventKey="link-2">Link</Nav.Link>
                                    <Nav.Link className="text-muted px-0" eventKey="link-3">Link</Nav.Link> */}
                                </Nav>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    // <div >

                    // </div>
                ))}

            </Accordion>
            {/* <div >
                <h4 className="font-weight-bolder my-3">Sidebar</h4>
                
            </div> */}

        </Collapse>
      </Col>
    );
  }
  
  export default SideBarComp;