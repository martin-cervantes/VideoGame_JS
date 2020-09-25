export default class Enemy extends Phaser.GameObjects.Sprite {
  constructor (scene, x, y, texture) {
    super(scene, x, y, texture);
    scene.add.existing(this);

    this.y = Phaser.Math.Between(35, 435);

    this._health = 10;
    this._danger = 50;
    this._value = 100;
    this._speed = 1.5;
  }

  directDamage (damage) {
    if (damage > 0) this._health -= damage;

    return this._health;
  }

  get danger () {
    return this._danger;
  }

  get value () {
    return this._value;
  }

  get speed () {
    return this._speed;
  }

  checkCollision (player) {
    if (player.x + 30 >= this.x - 22 &&
        player.x + 30 <= this.x &&
        this.y >= player.y - 35 &&
        this.y <= player.y + 38) {
      return true;
    }
    return false;
  }
}
