import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'jest-canvas-mock';
import Phaser from 'phaser';
import config from '../src/config/config';
import Player from '../src/game/player';

let player = '';
class Game extends Phaser.Game {
  constructor() {
    super(config);
  }

  create() {
    player = new Player(this, 60, 230, 'shipAnimation');
  }
}

window.game = new Game();

test('Check player health', () => {
  expect(player.health).not.toBe(80);
});

test('Check player lifes', () => {
  expect(player.lifes).not.toBe(5);
});

test('Check player speed to move foward', () => {
  expect(player.speed).not.toBe(2);
});
