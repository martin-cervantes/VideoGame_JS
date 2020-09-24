export default class Player {
  constructor () {
    this.active = true;
    this.health = 100;
    this.lifes = 3;
    this.speed = 5;
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
