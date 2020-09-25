import 'phaser';

export default class CreditsScene extends Phaser.Scene {
  constructor () {
    super('Credits');
  }

  preload () {
    this.add.image(400, 240, 'bgMainMenu');
  }

  create () {
    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
  }
};
