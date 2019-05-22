import sketch from './shortcuts/sketch';
import vscode from './shortcuts/vscode';
import photoshop from './shortcuts/photoshop';

export default {
  applications: [
    {
      name: 'Sketch',
      id: 'sketch',
      description: '<p>Testbeschreibung Testbeschreibung Testbeschreibung</p>'
    },
    {
      name: 'VS Code',
      id: 'vscode'
    },
    {
      name: 'Photoshop CC',
      id: 'photoshop',
      description: '<p>Testbeschreibung Testbeschreibung Testbeschreibung</p>'
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
      name: 'Windows',
      checked: false,
      disabled: true
    }
  ],
  levels: [
    {
      name: 'junior',
      description: '<p>Testbeschreibung Testbeschreibung Testbeschreibung</p>'
    },
    {
      name: 'intermediate'
    },
    {
      name: 'senior',
      disabled: true
    }
  ],
  modes: [
    {
      name: 'speed',
      checked: true,
      disabled: false,
      description:
        '<p>You will play five rounds. Whos the fastest will be the first.</p>'
    },
    {
      name: 'countdown',
      disabled: true,
      checked: false
    }
  ]
};
