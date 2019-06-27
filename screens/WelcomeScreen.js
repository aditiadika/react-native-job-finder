import React, { Component } from "react";
import { Text, View } from "react-native";

import Slides from "../components/Slides";

const SLIDE_DATA = [
  {
    text: "Welcome To Jobs Street"
  },
  {
    text: "Use this to get a job"
  },
  {
    text: "Set your location, then swipe away"
  }
];

export default class WelcomeScreen extends Component {
  render() {
    return <Slides data={SLIDE_DATA} />;
  }
}
