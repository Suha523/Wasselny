import React from "react";
import { Badge, Button } from "reactstrap";
import moment from "moment";

function Addvertise(props) {
  let addvertise = props.addvertise;
  return (
    <div className="mb-4">
      <div className='card'>
        <div className='card-header'>
          <Badge color='success'>
            {addvertise.isEveryday ? "everyday" : null}
          </Badge>
          <div className='d-flex justify-content-between'>
            <h4>
              {addvertise.startPoint} - {addvertise.endPoint}
            </h4>
            <span>
              Posted at: {moment(addvertise.createdAt).format("YYYY-MM-DD")}
            </span>
          </div>
        </div>
        <div className='card-body d-flex flex-column'>
          <h5 className='card-title'>Addvertiser Name: {addvertise.name}</h5>
          <p className='card-title'>Addvertiser Phone: {addvertise.phone}</p>
          <p className='card-text'>
            {moment(addvertise.date).format("YYYY-MM-DD")}
          </p>
          <p className='card-text'>
            From {addvertise.startTime} o'clock{" "}
            {addvertise.endTime !== "Invalid date"
              ? `to ${addvertise.endTime} o'clock`
              : null}
          </p>

          <Button
            className='w-25'
            disabled={addvertise.positions === 0 ? true : false}
            color='primary'
          >
            Reserve
          </Button>
          <Badge
            className='align-self-end'
            color={addvertise.positions === 0 ? "danger" : "success"}
          >
            {addvertise.positions === 0 ? "Not Available" : "Available"}
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Addvertise;
