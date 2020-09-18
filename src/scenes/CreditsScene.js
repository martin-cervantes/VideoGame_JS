import 'phaser';

export default class CreditsScene extends Phaser.Scene {
  constructor () {
    super('Credits');
  }

  preload () {
  }

  create () {
    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
  }
};
