export default class Enemy {
  constructor () {
    this._health = 10;
    this._danger = 10;
    this._value = 100;
    this._speed = 1.5;
  }

  directDamage (damage) {
    this._health -= damage;

    return this._health;
  }

  get value () {
    return this._value;
  }

  get speed () {
    return this._speed;
  }
}
