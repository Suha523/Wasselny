import React from "react";
import { Col, Form, FormGroup, Row, Input, Button, Label } from "reactstrap";

function AddAddvForm() {
  return (
    <div className='border rounded border-1 ml-1 p-3 w-100'>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Input
                id='name'
                name='name'
                placeholder='enter your name'
                type='text'
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input
                id='phone'
                name='phone'
                placeholder='enter phone'
                type='number'
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Input
                id='startPoint'
                name='startPoint'
                placeholder='from where?'
                type='text'
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input
                id='endPoint'
                name='endPoint'
                placeholder='to where?'
                type='text'
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <FormGroup>
              <Label>from when?</Label>
              <Input
                id='startTime'
                name='startTime'
                placeholder='from when?'
                type='time'
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>to when?</Label>
              <Input
                id='endTime'
                name='endTime'
                placeholder='to when?'
                type='time'
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Input
            id='positions'
            name='positions'
            placeholder='nubmer of positions'
            type='number'
          />
        </FormGroup>
        <Button>Post</Button>
      </Form>
    </div>
  );
}

export default AddAddvForm;
