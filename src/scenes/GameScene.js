import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload () {
  }

  create () {
    this.gameText = this.add.text(0, 0, 'Game', { fontSize: '32px', fill: '#fff' });
  }
};
