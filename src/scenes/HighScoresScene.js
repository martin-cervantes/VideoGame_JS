import Phaser from 'phaser';
import Score from '../game/score';

export default class HighScoresScene extends Phaser.Scene {
  constructor() {
    super('HighScores');
  }

  init() {
    this.highScores = JSON.parse(localStorage.getItem('scores'));
    this.user = localStorage.getItem('user');
    this.score = parseInt(localStorage.getItem('score'), 10);

    this.newScore = { user: this.user, score: this.score };
    this.highScores.push(this.newScore);

    this.highScores.sort((a, b) => {
      if (a.score < b.score) return 1;
      if (b.score < a.score) return -1;

      return 0;
    });

    this.scores = new Score();
    this.scores.saveScore(this.newScore);
  }

  preload() {
    this.add.image(400, 240, 'bgGameOver');
  }

  create() {
    this.highScoresText = this.add.text(25, 25, 'HighScores', { fontSize: '32px', fill: '#fff' });

    this.HighScores(this.highScores);

    this.timedEvent = this.time.delayedCall(8000, this.next, [], this);
  }

  HighScores(scores) {
    const x1 = 100;
    const x2 = 550;
    const y = 50;

    this.add.text(x1, 100, 'User', { fontSize: '40px', fill: '#f5f800' });
    this.add.text(x2, 100, 'Score', { fontSize: '40px', fill: '#f5f800' });

    for (let i = 0; i < 5; i += 1) {
      this.add.text(x1, y * i + 150, scores[i].user, { fontSize: '32px', fill: '#fff' });
      this.add.text(x2, y * i + 150, scores[i].score, { fontSize: '32px', fill: '#fff' });
    }
  }

  next() {
    this.scene.start('Title');
  }
}
