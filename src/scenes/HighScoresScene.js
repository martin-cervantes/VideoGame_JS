import 'phaser';

export default class HighScoresScene extends Phaser.Scene {
  constructor () {
    super('HighScores');
  }

  preload () {
  }

  create () {
    this.highScoresText = this.add.text(0, 0, 'HighScores', { fontSize: '32px', fill: '#fff' });
  }
};
