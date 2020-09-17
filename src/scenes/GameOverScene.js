import 'phaser';

export default class GameOverScene extends Phaser.Scene {
  constructor () {
    super('Over');
  }

  preload () {
    this.add.image(400, 240, 'bgGameOver');
  }

  create () {
  }
};
