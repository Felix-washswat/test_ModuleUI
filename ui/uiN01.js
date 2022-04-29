import { StyleSheet, Text, View, Alert, Button, Image } from "react-native";
import { Component } from "react/cjs/react.production.min";
import uuid from "react-native-uuid";

///////////////////////////////////////////////////////////////////////////////
export class uiN01 extends Component {
  constructor(jsonData, objectStorage, parent) {
    super(jsonData);
    this.state = {
      buttonText: "Back Button",
      uiKey: "UI_N01:" + uuid.v4(),
      color: jsonData.color,
    };
    this.parentObject = parent;
    this.style = StyleSheet.create({
      main: {
        backgroundColor: jsonData.color ? jsonData.color : "brown", //Default is
        alignItems: "flex-start",
        justifyContent: "center",
        height: 50,
        width: "100%",
      },
    });
  }

  process(stringData) {
    console.log("N01, process. stringData=" + stringData);
    this.state.buttonText = stringData;
    this.parentObject.process("Reload");
  }

  render() {
    console.log("N01,render");
    return (
      <View key={this.state.uiKey} style={this.style.main}>
        <Text>{this.state.buttonText}</Text>
      </View>
    );
  }
}
