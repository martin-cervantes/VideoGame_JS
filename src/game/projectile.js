export default class Projectile extends Phaser.GameObjects.Image  {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    scene.add.existing(this);

    this.damage = 5;
    this.speed = 8;
  }

  getDamage() {
    return this.damage;
  }

  getSpeed() {
    return this.speed;
  }

  checkCollision(enemy) {
    if (this.x + 22 >= enemy.x - 22
        && this.x + 22 <= enemy.x
        && this.y >= enemy.y - 35
        && this.y <= enemy.y + 38) {
      return true;
    }
    return false;
  }
}
