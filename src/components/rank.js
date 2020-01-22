import React from "react";
import { CharList } from "../components/charList";

export class Rank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chars2: ["Radagatsio"],
      chars: [
        "Radagatsio",
        "Ardillon",
        "Dimitrij+del+Toro",
        "King+Nakio",
        "Loko+Zwisky",
        "Sweetbullet",
        "Roluhnx",
        "Cropolito",
        "Stwuee",
        "Zapatilla+the+Cat",
        "Archer del Yoda",
        "Loko+Kenos"
      ],
      charList: [],
      loading: true
    };
  }
  async componentDidMount() {
    let chars = this.state.chars;
    const loadChars = async () => {
      await asyncForEach(chars, async char => {
        let charInfo = await getChar(char);
        this.setState({ charList: this.state.charList.concat(charInfo) });
      });
      this.state.charList.sort((a, b) => b.level - a.level);
      this.setState({ loading: false });
    };
    loadChars();
  }

  render() {
    return (
      <CharList loading={this.state.loading} charList={this.state.charList} />
    );
  }
}

async function getChar(name) {
  // Use of proxy because of CORS error when consuming TibiaData
  var proxyUrl = "https://cors-anywhere.herokuapp.com/",
    targetUrl = `https://api.tibiadata.com/v2/characters/${name}.json`;
  let blob = await fetch(targetUrl);
  let data = await blob.json();
  return data["characters"]["data"];
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}
