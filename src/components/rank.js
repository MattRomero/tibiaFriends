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
        "Loko+Kenos",
        "Borgolito",
        "Rolo+Manyin",
        "Sousi+Taro",
        "Ardillon+the+Great"
      ],
      charList: [],
      loading: true,
      activeChar: "",
    };
  }
  
  loadChars = async () => {
    let chars = this.state.chars;
    let charList = [];
    await asyncForEach(chars, async char => {
      let charInfo = await getChar(char);
      charList = charList.concat(charInfo);
    });
    charList.sort((a, b) => b.level - a.level);
    charList = this.rankChars(charList);
    this.setState({ charList: charList, loading: false });
  }

  // Method that adds a char's rank in the already sorted array, comparing each lvl with 
  // the one from previous char.
  rankChars = (charList) => {
    let previousLevel = charList[0]['level'];
    let rank = 1;
    for (let [index,char] of charList.entries()) {
      if (char['level'] < previousLevel) { rank = index+1; previousLevel = char['level']; }
      charList[index]["rank"] = rank;
    }
    return charList;
  }

  clickChar = (clickedChar) => {
    this.setState({ activeChar: clickedChar })
  }

  async componentDidMount() {
    this.loadChars();
  }

  render() {
    return (
      <CharList loading={this.state.loading} clickChar={this.clickChar} charList={this.state.charList} activeChar={this.state.activeChar} />
    );
  }
}


async function getChar(name) {
  let targetUrl = `https://api.tibiadata.com/v2/characters/${name}.json`;
  let blob = await fetch(targetUrl);
  let data = await blob.json();
  return data["characters"]["data"];
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}
