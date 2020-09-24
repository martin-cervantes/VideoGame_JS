export default class Projectile {
  constructor () {
    this._damage = 5;
    this._speed = 8;
    this._img = '';
  }

  get damage () {
    return this._damage;
  }

  get speed () {
    return this._speed;
  }

  get img () {
    return this._img;
  }

  set img (img) {
    this._img = img;
  }

  checkCollision (enemy) {
    if (this._img.x + 22 >= enemy.animation.x - 22 &&
        this._img.x + 22 <= enemy.animation.x &&
        this._img.y >= enemy.animation.y - 35 &&
        this._img.y <= enemy.animation.y + 38) {
      return true;
    }
    return false;
  }
}
