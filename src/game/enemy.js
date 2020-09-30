export default class Enemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    scene.add.existing(this);

    this.y = Phaser.Math.Between(35, 435);

    this.health = 10;
    this.danger = 50;
    this.value = 100;
    this.speed = 1.5;
  }

  directDamage(damage) {
    if (damage > 0) this.health -= damage;

    return this.health;
  }

  getDanger() {
    return this.danger;
  }

  getValue() {
    return this.value;
  }

  getSpeed() {
    return this.speed;
  }

  checkCollision(player) {
    if (player.x + 30 >= this.x - 22
        && player.x + 30 <= this.x
        && this.y >= player.y - 35
        && this.y <= player.y + 38) {
      return true;
    }
    return false;
  }
}
