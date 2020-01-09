import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Visitor = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label for = "name">Your Name: </Label>
                <Input type = "name" name = "name" id = "visitorname" placeholder = "Name" />
            </FormGroup>
            <FormGroup>
                <Label for = "select">Select: </Label>
                <Input type = "select" id = "select">
                    <option>1 Dislike</option>
                    <option>2 Somewhat Dislike</option>
                    <option>3 No Opinion</option>
                    <option>4 Somewhat Like</option>
                    <option>5 Like</option>
                </Input>
            </FormGroup>
            <button>Submit</button>
        </Form>
    )
}

export default Visitor;