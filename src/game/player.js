export default class Player {
  constructor () {
    this._health = 100;
    this._lifes = 3;
    this._speed = 5;
    this._score = 0;
  }

  set health (damage) {
    this._health -= damage;

    return this._health;
  }

  get lifes () {
    return this._lifes;
  }

  get speed () {
    return this._speed;
  }

  score (points) {
    this._score += points;

    return this._score;
  }
}
