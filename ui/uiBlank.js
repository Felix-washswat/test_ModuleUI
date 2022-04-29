import { StyleSheet, Text, View, Alert, Button, Image } from "react-native";
import { Component } from "react/cjs/react.production.min";

export class uiBlank extends Component {
  constructor(jsonData, objectStorage, parent) {
    super(jsonData);
    this.state = {};
    this.parentObject = parent;
  }

  style = StyleSheet.create({
    main: {
      backgroundColor: "white",
      alignItems: "flex-start",
      justifyContent: "center",
      height: 50,
      width: "100%",
    },
  });

  render() {
    return <View key="UI_Blank" style={this.style.main}></View>;
  }
}
