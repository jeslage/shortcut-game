import sketch from './shortcuts/sketch';
import vscode from './shortcuts/vscode';
import photoshop from './shortcuts/photoshop';

export default {
  applications: [
    {
      name: 'Sketch',
      id: 'sketch'
    },
    {
      name: 'VS Code',
      id: 'vscode'
    },
    {
      name: 'Photoshop CC',
      id: 'photoshop'
    }
  ],
  shortcuts: {
    sketch,
    vscode,
    photoshop
  },
  systems: [
    {
      name: 'osx',
      checked: true,
      disabled: false
    },
    {
      name: 'win',
      checked: false,
      disabled: true
    }
  ],
  levels: [
    {
      name: 'junior'
    },
    {
      name: 'intermediate'
    },
    {
      name: 'senior',
      disabled: true
    }
  ]
};
