import React from "react";

// Component of a row representing a Char
export function Char(props) {
  return (
    <tr className={props.char["status"] === "online" ? "table-success" : " "}>
      <td>{props.index + 1}</td>
      <td>{props.char["name"]}</td>
      <td>{props.char["level"]}</td>
      <td>
        {Math.round((props.char["level"] / 3) * 2)} -{" "}
        {Math.round((props.char["level"] / 2) * 3)}
      </td>
    </tr>
  );
}
