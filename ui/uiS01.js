import { StyleSheet, Text, View, Alert, Button, Image } from "react-native";
import { Component } from "react/cjs/react.production.min";

export class uiS01 extends Component {
  constructor(jsonData, objectStorage) {
    super(jsonData);
    this.state = {
      text1: jsonData.text1,
      text2: jsonData.text2,
    };
  }
  style = StyleSheet.create({
    main: {
      backgroundColor: "yellow",
      fontFamily: "Cochin",
      fontSize: 40,
      fontWeight: "bold",
      alignItems: "center",
      justifyContent: "center",
      height: 100,
      width: "100%",
    },
  });

  render() {
    return (
      <View Key="UI_S01" style={this.style.main}>
        <Text>{this.state.text1}</Text>
        <Text>{this.state.text2}</Text>
      </View>
    );
  }
}
