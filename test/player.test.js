import Player from '../src/game/player';

const player = new Player(60, 230, 'shipAnimation');

test('Check player health', () => {
  expect(player.health).toBe(100);
});

test('Check player lifes', () => {
  expect(player.lifes).toBe(3);
});

test('Check player speed to move foward', () => {
  expect(player.speed).toBe(5);
});
