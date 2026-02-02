import Character from '../character.js';

test('levelUp should increase stats', () => {
  const char = new Character('Hero', 'Bowman');
  char.health = 50;
  char.levelUp();
  expect(char.level).toBe(2);
  expect(char.attack).toBe(12);
  expect(char.defence).toBe(12);
  expect(char.health).toBe(100);
});

test('levelUp should throw error if dead', () => {
  const char = new Character('Hero', 'Bowman');
  char.health = 0;
  expect(() => char.levelUp()).toThrow('нельзя повысить левел умершего');
});

test('damage should decrease health', () => {
  const char = new Character('Hero', 'Bowman');
  char.damage(10);
  expect(char.health).toBe(91); // 100 - 10 * (1 - 0.1)
});

test('damage should not set health below 0', () => {
  const char = new Character('Hero', 'Bowman');
  char.damage(200);
  expect(char.health).toBe(0);
});