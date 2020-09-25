export default class Player extends Phaser.GameObjects.Sprite {
  constructor (scene, x, y, texture) {
    super(scene, x, y, texture);
    scene.add.existing(this);

    this._health = 100;
    this._lifes = 3;
    this._speed = 5;
    this._score = 0;
  }

  directDamage (damage) {
    if (damage > 0) this._health -= damage;

    return this._health;
  }

  get health () {
    return this._health;
  }

  renewal () {
    this._lifes -= 1;
    this._health = 100;
  }

  get lifes () {
    return this._lifes;
  }

  get speed () {
    return this._speed;
  }

  get score () {
    return this._score;
  }

  calcScore (points) {
    this._score += points;

    return this._score;
  }
}
