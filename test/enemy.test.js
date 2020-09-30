import Enemy from '../src/game/enemy';

const enemy = new Enemy(800, 200, 'mineAnimation');

test('Check enemy danger', () => {
  expect(enemy.danger).toBe(50);
});

test('Check enemy value of points', () => {
  expect(enemy.value).toBe(100);
});

test('Check enemy speed to move foward', () => {
  expect(enemy.speed).toBe(1.5);
});
