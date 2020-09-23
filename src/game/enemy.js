export default class Enemy {
  constructor () {
    this._active = true;
    this._health = 10;
    this._danger = 10;
    this._value = 100;
    this._speed = 1.5;
    this._animation = '';
  }

  get speed () {
    return this._speed;
  }

  get isActive () {
    return this._active;
  }

  // kill in action
  kia () {
    this._active = false;
  }
}
