import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import Addvertisements from "../Addvertisements/Addvertisements";

function Search(props) {
  return (
    <div className=' w-100'>
      <div className='d-flex flex-column border rounded border-1 p-3 mb-5'>
        <Form>
          <div className='d-flex justify-content-between m-2'>
            <FormGroup className='w-100'>
              <Input type='text' placeholder='enter keyword' />
            </FormGroup>
            <Button>Search</Button>
          </div>
        </Form>
      </div>
      <div className='border rounded border-1 p-3'>
        <Addvertisements addvertises={props.addvertises} />
      </div>
    </div>
  );
}

export default Search;
