import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function TrackingTable({ allowance, daysBooked }) {
  return (
    <Table bordered className="table table-striped table-dark allowance-table">
      <thead>
        <tr>
          <th>Yearly allowance</th>
          <th>Booked</th>
          <th>Available</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{allowance}</td>
          <td>{daysBooked}</td>
          <td>{allowance - daysBooked}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TrackingTable;
