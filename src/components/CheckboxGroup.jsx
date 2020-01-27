import React from 'react';
import { Form } from 'react-bootstrap';

/**
 * 重視項目チェックボックスグループ
 * @param {*} props
 */
const CheckboxGroup = (props) => {
    return (
        <Form.Group className="float-left">
            <Form.Row>
                <Form.Label >重視項目</Form.Label>
            </Form.Row>
            <Form.Row>
                <Form.Check inline className="text-left" name="amount" label="数量" onChange={props.onChange}/>
                <Form.Check inline className="text-left" name="safety" label="安全性" onChange={props.onChange}/>
                <Form.Check inline className="text-left" name="speed" label="速度" onChange={props.onChange}/>
            </Form.Row>
        </Form.Group>
    );

}
export default CheckboxGroup;