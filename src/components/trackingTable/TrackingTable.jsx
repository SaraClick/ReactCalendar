import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function TrackingTable({ allowance, allowanceUsed, allowanceAvailable }) {



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
          <td>{allowanceUsed}</td>
          <td>{allowanceAvailable}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TrackingTable;
