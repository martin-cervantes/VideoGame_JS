export default class Score {
  constructor () {
    this._appName = { "name": "VideoGame_JS_Martin_Cervantes" };
    this._url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kmVB1WZGiv1mhQXLajwF/scores';
    this._defaultScore = { "user": "Martin Cervantes", "score": 100 };
  }

  get result () {
    return this._result;
  }

  async saveScore (score) {
    const response = await fetch(this._url, {
      method: 'POST',
      body: JSON.stringify(score),
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    return this._result = result.result;
  };

  async getScores () {
    const response = await fetch(this._url, { mode: 'cors' });
    const result = await response.json();
    return this._result = result.result;
  };
};
