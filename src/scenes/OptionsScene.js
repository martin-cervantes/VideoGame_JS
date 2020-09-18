import 'phaser';

export default class OptionsScene extends Phaser.Scene {
  constructor () {
    super('Options');
  }

  preload () {
    this.add.image(400, 240, 'bgMainMenu');
  }

  create () {
    this.optionsText = this.add.text(0, 0, 'Options', { fontSize: '32px', fill: '#fff' });
  }
};
