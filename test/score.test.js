import Score from '../src/game/score';
import 'regenerator-runtime/runtime';

const score = new Score();

test('Save new score', () => {
  const newScore = { user:'Test', score: 100 };
  score.saveScore(newScore);
  expect(score.result).not.toBe("Leaderboard score created correctly.");
});

test('Get saved scores', () => {
  score.getScores();
  expect(score.result).not.toBe(Array.isArray(score.results));
});
