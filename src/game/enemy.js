export default class Enemy {
  constructor () {
    this.active = true;
    this.health = 10;
    this.danger = 10;
    this.value = 100;
    this.speed = 1.5;
  }

  directDamage (damage) {
    this.health -= damage;

    return this.health;
  }

  get speed () {
    return this.speed;
  }

  get isActive () {
    return this.active;
  }

  // kill in action
  kia () {
    this.active = false;
  }
}
