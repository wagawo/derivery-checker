import React from 'react';
import {Form} from 'react-bootstrap';

const Selector = (props) =>{
  const createList = (data) => {
    return data.map((row)=>{
      return <option key={row.id} value={row.id}>{row.name}</option>
    });
  };
  return(
    <Form.Group controlId={props.id}>
      <Form.Label className="float-left">{props.label}</Form.Label>
      <Form.Control as="select" name={props.name} onChange={props.onChange}>
        {createList(props.data)}
      </Form.Control>
    </Form.Group>
  );
};
export default Selector;