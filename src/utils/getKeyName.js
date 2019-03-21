export default function getKeyName(key) {
  switch (key) {
    case 'Meta':
      return 'Cmd';
    case 'Control':
      return 'Ctrl';
    case 'Dead':
      return '^';
    default:
      return key;
  }
}
