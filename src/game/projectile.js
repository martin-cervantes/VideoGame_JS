export default class Projectile {
  constructor () {
    this._active = true;
    this._damage = 5;
    this._speed = 8;
  }

  get speed () {
    return this._speed;
  }

  get isActive () {
    return this._active;
  }
}
