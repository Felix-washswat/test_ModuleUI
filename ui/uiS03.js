import { StyleSheet, Text, View, Alert, Button, Image } from "react-native";
import { Component } from "react/cjs/react.production.min";

export class uiS03 extends Component {
  constructor(jsonData, objectStorage, parent) {
    super(jsonData);
    this.state = {
      imageUrl: { uri: jsonData.imageUrl },
    };
    this.parentObject = parent;
  }

  style = StyleSheet.create({
    main: {
      backgroundColor: "violet",
      fontSize: 40,
      fontWeight: "bold",
      alignItems: "center",
      justifyContent: "center",
      height: 120,
      width: "100%",
    },
  });

  process(stringData) {
    console.log("S03, process");
    Alert.alert("S03 processed received: " + stringData);
  }

  render() {
    return (
      <View Key="UI_S03" style={this.style.main}>
        <Image
          style={{ width: "100%", height: 110 }}
          source={this.state.imageUrl}
        />
      </View>
    );
  }
}
