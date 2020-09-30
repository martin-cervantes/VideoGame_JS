export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    scene.add.existing(this);

    this.health = 100;
    this.lifes = 3;
    this.speed = 5;
    this.score = 0;
  }

  directDamage(damage) {
    if (damage > 0) this.health -= damage;

    return this.health;
  }

  getHealth() {
    return this.health;
  }

  renewal() {
    this.lifes -= 1;
    this.health = 100;
  }

  getLifes() {
    return this.lifes;
  }

  getSpeed() {
    return this.speed;
  }

  getScore() {
    return this.score;
  }

  calcScore(points) {
    this.score += points;

    return this.score;
  }
}
