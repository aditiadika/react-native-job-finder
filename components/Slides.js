import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";

class Slides extends Component {
  renderSlides() {
    return this.props.data.map(res => {
      <View key={res.text} style={styles.slide}>
        <Text style={styles.slideText}>{res.text}</Text>
      </View>;
    });
  }
  render() {
      console.log(this.props.data)
    return (
      <ScrollView horizontal style={{ flex: 1 }}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}
const styles = {
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  slideText: {
    fontSize: 30
  }
};

export default Slides;
