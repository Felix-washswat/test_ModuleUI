import { StyleSheet, Text, View, Alert, Button, Image } from "react-native";
import { Component } from "react/cjs/react.production.min";
import uuid from "react-native-uuid";

export class uiS03 extends Component {
  constructor(jsonData, objectStorage, parent) {
    super(jsonData);
    this.state = {
      imageUrl: { uri: jsonData.imageUrl },
      uiKey: "UI_S03:" + uuid.v4(),
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
      <View key={this.state.uiKey} style={this.style.main}>
        <Image
          style={{ width: "100%", height: 110 }}
          source={this.state.imageUrl}
        />
      </View>
    );
  }
}
