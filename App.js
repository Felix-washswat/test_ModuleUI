import { StyleSheet, Text, View, Alert, Button, Image } from "react-native";
import { Component } from "react/cjs/react.production.min";
import uiClassFactory from "./ui/uiClassFactory";

import { debug } from "./debug";

const jsonData = {
  elements: [
    {
      id: "uiBlank",
    },
    {
      id: "uiN01",
    },
    {
      id: "uiS01",
      text1: "매일 밤 12시",
      text2: "수거가 시작됩니다.",
    },
    {
      id: "uiS02",
      text1: "수거: 9/19(월) 밤 11시",
      text2: "배송: 9/22(목) 아침 7시",
      buttonText: "변경",
      buttonTarget: "uiN01",
    },
    {
      id: "uiS03",
      imageUrl: "https://picsum.photos/400/200",
    },
    {
      id: "uiS01",
      text1: "이것은",
      text2: "테스트입니다.",
    },
  ],
};

let objectStorage = [];

///////////////////////////////////////////////////////////////////////////////////////////////////
// Main Routine
///////////////////////////////////////////////////////////////////////////////////////////////////
class App extends Component {
  constructor()
  {
    super();
    console.log('App constructor');
    objectStorage = [];
  }
  state = {
    count: 0,
    isRefresh: false
  }

  process(stringData)
  {
    this.state.isRefresh = true;
    this.setState({});
    console.log('App:process='+stringData);
  }
  render(){
    return <View style={styles.container}>{processScreen(this, this.state.isRefresh)}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

///////////////////////////////////////////////////////////////////////////////////////////////////
// Process routine
///////////////////////////////////////////////////////////////////////////////////////////////////
function processScreen(parent, isRefresh) {
  const returnData = [];

  if(!isRefresh)
  {
  // Analysis UI JSON data and populate object instances
  jsonData.elements.forEach(function (element) {
    debug("-->" + element.id, element);
    objectStorage.push({
      id: element.id,
      object: new (uiClassFactory(element.id))(element, objectStorage, parent),
    });
  });
  }

  // Render them
  objectStorage.forEach(function (element) {
    returnData.push(element.object.render());
  });

  return returnData;
}

export default App;