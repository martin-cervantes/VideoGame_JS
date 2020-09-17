import 'phaser';

export default class TitleScene extends Phaser.Scene {
  constructor () {
    super('Title');
  }

  preload () {
    this.add.image(400, 240, 'bgMainMenu');
  }

  create () {
  }
};
