export default class Score {
  constructor() {
    this.appName = { name: 'VideoGame_JS_Martin_Cervantes' };
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kmVB1WZGiv1mhQXLajwF/scores';
    this.defaultScore = { user: 'Martin Cervantes', score: 100 };
  }

  getResult() {
    return this.result;
  }

  async saveScore(score) {
    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(score),
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    this.result = result.result;
  }

  async getScores() {
    const response = await fetch(this.url, { mode: 'cors' });
    const result = await response.json();
    this.result = result.result;
  }
}
