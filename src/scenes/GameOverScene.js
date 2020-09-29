import 'phaser';
import Score from '../game/score';

export default class GameOverScene extends Phaser.Scene {
  constructor () {
    super('Over');

    this.scores = new Score();
    this.scores.getScores();
  }

  preload () {
    this.add.image(400, 240, 'bgGameOver');
  }

  create () {
    this.timedEvent = this.time.delayedCall(3000, this.next, [], this);
  }

  next () {
    localStorage.setItem('scores', JSON.stringify(this.scores.result));
    this.scene.start('HighScores');
  }
};
