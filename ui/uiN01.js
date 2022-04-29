import { StyleSheet, Text, View, Alert, Button, Image } from "react-native";
import { Component } from "react/cjs/react.production.min";

export class uiN01 extends Component {
  constructor(jsonData, objectStorage, parent) {
    super(jsonData);
    this.state = {
      buttonText: "Back Button",
    };
    this.parentObject = parent;
  }

  style = StyleSheet.create({
    main: {
      backgroundColor: "brown",
      alignItems: "flex-start",
      justifyContent: "center",
      height: 50,
      width: "100%",
    },
  });

  process(stringData) {
    console.log("N01, process. stringData=" + stringData);
    this.state.buttonText = stringData;
    this.parentObject.process("Reload");
    Alert.alert("N01 processed received: " + stringData);
  }

  render() {
    console.log("N01,render");
    return (
      <View key="UI_N01" style={this.style.main}>
        <Text>{this.state.buttonText}</Text>
      </View>
    );
  }
}
