import React, { Component } from "react";
import { Text, View, ScrollView, Dimensions } from "react-native";
import { Button } from "react-native-elements";

const screenWidth = Dimensions.get("window").width;

class Slides extends Component {
  renderLastSlides(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title="Onwards!"
          raised
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onComplete}
        />
      );
    }
  }

  renderSlides() {
    return this.props.data.map((res, index) => {
      return (
        <View
          key={res.text}
          style={[styles.slide, { backgroundColor: res.color }]}
        >
          <Text style={styles.slideText}>{res.text}</Text>
          {this.renderLastSlides(index)}
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView horizontal style={{ flex: 1 }} pagingEnabled>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}
const styles = {
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: screenWidth
  },
  slideText: {
    fontSize: 30,
    color: "white"
  },
  buttonStyle: {
    backgroundColor: "#0288d1"
  }
};

export default Slides;
