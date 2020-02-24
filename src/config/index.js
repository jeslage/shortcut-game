import sketch from "./shortcuts/sketch";
import vscode from "./shortcuts/vscode";
import photoshop from "./shortcuts/photoshop";
import indesign from "./shortcuts/indesign";

export default {
  applications: [
    {
      name: "Sketch",
      id: "sketch",
      shortcuts: sketch
    },
    {
      name: "VS Code",
      id: "vscode",
      shortcuts: vscode
    },
    {
      name: "Photoshop CC",
      id: "photoshop",
      shortcuts: photoshop
    },
    {
      name: "InDesign CC",
      id: "indesign",
      shortcuts: indesign
    }
  ],
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
      id: "1",
      description: "<p>Pressed keys and the hidden shortcut will be shown.</p>"
    },
    {
      name: "intermediate",
      id: "2",
      description: "<p>Pressed keys will be shown.</p>"
    },
    {
      name: "senior",
      id: "3",
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
      checked: false
    }
  ]
};
