import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

// Component of a row representing a Char
export function Char(props) {
  let rank = props.char["rank"];
  let trophyColor;
  let podium;
  if (rank <= 3) {
    if (rank == 1) { trophyColor = "goldenrod" }
    else if (rank == 2) { trophyColor = "silver"}
    else { trophyColor = "#b87333"} 
    podium = <FontAwesomeIcon icon={faTrophy} color={trophyColor} />;
  }
  let char = { index: props.index, name: props.char["name"], level: props.char["level"] }
  return (
    <tr onClick={ () => { props.clickChar(char) } } 
      className={props.char["status"] === "online" ? "table-success" : " "}>

      <td>{props.char["rank"]}</td>
      <td>{props.char["name"]} {podium}</td>
      <td>{props.char["level"]}</td>
      <td>
        {Math.round((props.char["level"] / 3) * 2)} -{" "}
        {Math.round((props.char["level"] / 2) * 3)}
        {props.activeChar ? "Active" : " "}
      </td>
    </tr>
  );
}
