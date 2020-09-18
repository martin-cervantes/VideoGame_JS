import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload () {
    this.bgLayer3 = this.add.tileSprite(400, 240, 0, 0, 'bgLayer3');
    this.bgLayer1 = this.add.tileSprite(400, 240, 0, 0, 'bgLayer1');
    this.bgLayer2 = this.add.tileSprite(400, 240, 0, 0, 'bgLayer2');
  }

  create () {
  }
};
