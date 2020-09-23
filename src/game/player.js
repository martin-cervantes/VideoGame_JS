export default class Player {
  constructor () {
    this._active = true;
    this._health = 100;
    this._lifes = 3;
    this._speed = 5;
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
