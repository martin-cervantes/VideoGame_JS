export default class Projectile extends Phaser.GameObjects.Image  {
  constructor (scene, x, y, texture) {
    super(scene, x, y, texture);
    scene.add.existing(this);

    this._damage = 5;
    this._speed = 8;
  }

  get damage () {
    return this._damage;
  }

  get speed () {
    return this._speed;
  }

  checkCollision (enemy) {
    if (this.x + 22 >= enemy.x - 22 &&
        this.x + 22 <= enemy.x &&
        this.y >= enemy.y - 35 &&
        this.y <= enemy.y + 38) {
      return true;
    }
    return false;
  }
}
