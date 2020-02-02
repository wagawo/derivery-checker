import React from 'react';
import { Button, Col, Container, Form, Jumbotron, Row} from 'react-bootstrap';
import Selector from './Selector';
import CheckboxGroup from './CheckboxGroup';

const Filter = (props) =>{
    return (
        <Jumbotron>
            <Form>
                <Container fluid="true">
                    <Row>
                        <Col xs={6}>
                            <Selector label="from" name="from" data={props.facilities} id="from-facileties" onChange={props.onChange}/>
                            </Col>
                        <Col xs={6}>
                            <Selector label="to" name="to" data={props.facilities} id="to-facileties" onChange={props.onChange}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CheckboxGroup onChange={props.onChange}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="float-left">
                                <Form.Row>
                                    <Form.Check inline className="text-left" name="hiddenCleared" label="達成済み依頼を非表示" onChange={props.onChange}/>
                                </Form.Row>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="float-left">
                        <Col xs="auto">
                            <Button className="reset-btn " variant="secondary" onClick={props.resetFilter}>リセット</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </Jumbotron>
    );
};
export default Filter;