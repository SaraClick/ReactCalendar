import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function TrackingTable({ allowance, allowanceUsed, allowanceAvailable }) {
  return (
    <Table
      bordered
      className="allowance-table table table-secondary table-bordered table-sm"
    >
      <thead>
        <tr>
          <th>Yearly allowance</th>
          <th>Booked</th>
          <th>Available</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
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
