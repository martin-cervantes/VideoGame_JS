export default class Enemy extends Phaser.GameObjects.Sprite {
  constructor (scene, x, y, texture) {
    super(scene, x, y, texture);
    scene.add.existing(this);

    this.y = Phaser.Math.Between(35, 435);

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
