export default class Projectile {
  constructor () {
    this.active = true;
    this.damage = 5;
    this.speed = 8;
  }

  get damage () {
    return this.damage;
  }

  get speed () {
    return this.speed;
  }

  get isActive () {
    return this.active;
  }
}
