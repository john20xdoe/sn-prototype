import React from "react";
import { Component } from "react";

import { OwnProps } from "../App";

import { PageView } from "../components/Page";

import { View } from "react-native";

export default class ViewStep extends Component {
  constructor(props: OwnProps) {
    super(props);
  }

  public render() {
    return (
      <PageView>
        <View />
      </PageView>
    );
  }
}
