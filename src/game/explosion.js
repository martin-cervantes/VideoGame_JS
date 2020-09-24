export default class Explosion {
  constructor () {
    this._active = true;
    this._danger = 50;
  }

  get isActive () {
    return this._active;
  }
}
