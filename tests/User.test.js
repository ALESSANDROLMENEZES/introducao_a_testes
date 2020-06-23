const UserController  = require('./../controllers/UserController');

test('Somar dois valores', () => {
  expect(UserController.somar(1, 2)).toBe(3);
  expect(UserController.somar(1, 2)).not.toBeNull();
  expect(UserController.somar(1, 2)).toBeDefined();
  expect(UserController.somar(1, 2)).not.toBeUndefined();
});

test('Somar dois valores sendo 1 dos valores zero', () => {
  expect(UserController.somar(0, 2)).toBe(2);
  expect(UserController.somar(1, 2)).not.toBeNull();
  expect(UserController.somar(1, 2)).toBeDefined();
  expect(UserController.somar(1, 2)).not.toBeUndefined();
});

test('Somar passando apenas um valor', () => {
  expect(UserController.somar(2)).toBe(2);
  expect(UserController.somar(1, 2)).not.toBeNull();
  expect(UserController.somar(1, 2)).toBeDefined();
  expect(UserController.somar(1, 2)).not.toBeUndefined();
});
