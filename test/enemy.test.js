import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'jest-canvas-mock';
import Phaser from 'phaser';
import config from '../src/config/config';
import Enemy from '../src/game/enemy';

let enemy = '';
class Game extends Phaser.Game {
  constructor() {
    super(config);
  }

  create() {
    enemy = new Enemy(this, 800, 200, 'mineAnimation');
  }
}

window.game = new Game();

test('Check enemy danger', () => {
  expect(enemy.danger).not.toBe(30);
});

test('Check enemy value of points', () => {
  expect(enemy.value).not.toBe(50);
});

test('Check enemy speed to move foward', () => {
  expect(enemy.speed).not.toBe(3);
});
