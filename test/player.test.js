import Player from '../src/game/player';

const player = new Player(scene, 60, 230, 'shipAnimation');

test('Check player health', () => {
  expect(enemy.health).toBe(100);
});

test('Check player lifes', () => {
  expect(enemy.lifes).toBe(3);
});

test('Check player speed to move foward', () => {
  expect(enemy.speed).toBe(5);
});
