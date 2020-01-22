import React from "react";
import HashLoader from "react-spinners/HashLoader";
import Table from "react-bootstrap/Table";

import { Char } from "../components/char";

// Component of the table of chars, when (props.loading === true) it shows
// a spinner

export function CharList(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }

  if (props.loading === true) {
    return <HashLoader size={50} color={"#343a40"} loading={props.loading} />;
  } else {
    return (
      <Table bordered hover size="sm">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Level</th>
            <th>Sharing levels</th>
          </tr>
        </thead>
        <tbody>
          {props.charList.map((objectChar, index) => (
            <Char char={objectChar} onClick={handleClick} index={index} />
          ))}
        </tbody>
      </Table>
    );
  }
}
