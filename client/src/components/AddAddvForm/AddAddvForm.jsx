import React, { useState } from "react";
import "./AddAddvForm.css";
import { Col, Form, FormGroup, Row, Input, Button, Label } from "reactstrap";
import { Link } from "react-router-dom";

function AddAddvForm(props) {
  const [addvertise, setAddvertise] = useState({});

  const handleInputChange = (e) => {
    setAddvertise((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  const postAddvertise = () => {
    props.postAddvertise(addvertise);
  };

  return (
    <div className='container row'>
      <div className='col-md-6 col-sm-12'>
        <div className='border rounded border-1 ml-1 p-3 w-100'>
          <Form>
            <p>
              <span className='star'>*</span> Required
            </p>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <span className='star'>*</span>
                  <Input
                    id='name'
                    name='name'
                    placeholder='enter your name'
                    type='text'
                    value={addvertise.name || ""}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <span className='star'>*</span>
                  <Input
                    id='phone'
                    name='phone'
                    placeholder='enter phone'
                    type='number'
                    value={addvertise.phone || ""}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <span className='star'>*</span>
                  <Input
                    id='startPoint'
                    name='startPoint'
                    placeholder='from where?'
                    type='text'
                    value={addvertise.startPoint || ""}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <span className='star'>*</span>
                  <Input
                    id='endPoint'
                    name='endPoint'
                    placeholder='to where?'
                    type='text'
                    value={addvertise.endPoint || ""}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <span className='star'>*</span>
                  <Label>from when?</Label>
                  <Input
                    id='startTime'
                    name='startTime'
                    placeholder='from when?'
                    type='time'
                    value={addvertise.startTime || ""}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>to when? (Optional)</Label>
                  <Input
                    id='endTime'
                    name='endTime'
                    placeholder='to when?'
                    type='time'
                    value={addvertise.endTime || ""}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <span className='star'>*</span>
              <Input
                id='positions'
                name='positions'
                placeholder='nubmer of positions'
                type='number'
                value={addvertise.positions || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <span className='star'>*</span>
                  <Label>Date</Label>
                  <Input
                    id='date'
                    name='date'
                    placeholder='date'
                    type='date'
                    value={addvertise.date || ""}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <div className='form-group mt-2'>
                  <div className='form-check'>
                    <Input
                      className='form-check-input'
                      type='checkbox'
                      name='isEveryday'
                      checked={addvertise.isEveryDay}
                      onChange={handleInputChange}
                      id='defaultCheck1'
                    ></Input>
                    <label className='form-check-label' htmlFor='defaultCheck1'>
                      EveryDay (Optional)
                    </label>
                  </div>
                  <Input
                    id='exampleSelectMulti'
                    name='selectMulti'
                    type='select'
                  >
                    <option>Sunday - Thursday</option>
                    <option>Saturday - Thursday</option>
                  </Input>
                </div>
              </Col>
            </Row>

            <Link to='/'>
              <Button onClick={postAddvertise}>Post</Button>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AddAddvForm;
