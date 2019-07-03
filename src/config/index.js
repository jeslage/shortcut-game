import sketch from "./shortcuts/sketch";
import vscode from "./shortcuts/vscode";
import photoshop from "./shortcuts/photoshop";
import indesign from "./shortcuts/indesign";

export default {
  applications: [
    {
      name: "Sketch",
      id: "sketch"
    },
    {
      name: "VS Code",
      id: "vscode"
    },
    {
      name: "Photoshop CC",
      id: "photoshop"
    },
    {
      name: "InDesign CC",
      id: "indesign"
    }
  ],
  shortcuts: {
    sketch,
    vscode,
    photoshop,
    indesign
  },
  systems: [
    {
      name: "osx",
      checked: true,
      disabled: false
    },
    {
      name: "Windows",
      checked: false,
      disabled: true
    }
  ],
  levels: [
    {
      name: "junior",
      description: "<p>Pressed keys and the hidden shortcut will be shown.</p>"
    },
    {
      name: "intermediate",
      description: "<p>Pressed keys will be shown.</p>"
    },
    {
      name: "senior",
      description:
        "<p>Neither the shortcut nor the pressed keys will be shown.</p>"
    }
  ],
  modes: [
    {
      name: "speed",
      checked: true,
      disabled: false,
      description:
        "<p>You will play five rounds. Whos the fastest will be the first.</p>"
    },
    {
      name: "countdown",
      disabled: true,
      checked: false,
      description:
        "<p>Play with a countdown of 30 seconds. Who solves the most shortcuts in the given time will be the first.</p>"
    }
  ]
};
