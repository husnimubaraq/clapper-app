import React from "react";
import { AppWrapper } from "layouts/default";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs()

function IgniteApp() {

  return <AppWrapper />;
}

export default IgniteApp;
