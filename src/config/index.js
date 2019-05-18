import sketch from "./shortcuts/sketch";
import vscode from "./shortcuts/vscode";

export default {
  applications: ["sketch", "vscode"],
  shortcuts: {
    sketch,
    vscode
  },
  systems: [
    {
      name: "osx",
      checked: true,
      disabled: false
    },
    {
      name: "win",
      checked: false,
      disabled: true
    }
  ],
  levels: [
    {
      name: "junior"
    },
    {
      name: "intermediate",
      disabled: true
    },
    {
      name: "senior",
      disabled: true
    }
  ]
};
