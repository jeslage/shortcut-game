import sketch from "./shortcuts/sketch";
import vscode from "./shortcuts/vscode";

export default {
  applications: [
    {
      name: "Sketch",
      id: "sketch"
    },
    {
      name: "VS Code",
      id: "vscode"
    }
  ],
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
      name: "intermediate"
    },
    {
      name: "senior",
      disabled: true
    }
  ]
};
