var rgbled;


boardReady({board: 'Smart', device: '10QYvA7d', transport: 'mqtt'}, function (board) {
  board.samplingInterval = 50;
  rgbled = getRGBLedCathode(board, 15, 12, 13);
  rgbled.setColor('#000000');
  document.getElementById('demo-area-04-area').style.background = '#000000';
  document.getElementById('demo-area-04-color').oninput = function (_color) {
  _color = this.value;
    document.getElementById('demo-area-04-area').style.background = _color;
    rgbled.setColor(_color);
  };
});