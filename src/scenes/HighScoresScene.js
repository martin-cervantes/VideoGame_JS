import 'phaser';

export default class HighScoresScene extends Phaser.Scene {
  constructor () {
    super('HighScores');
  }

  preload () {
    this.add.image(400, 240, 'bgGameOver');
  }

  create () {
    this.highScoresText = this.add.text(0, 0, 'HighScores', { fontSize: '32px', fill: '#fff' });

    this.timedEvent = this.time.delayedCall(3000, this.next, [], this);
  }

  next () {
    this.scene.start('Title');
  }
};
