const appDriver = require('./App.driver');

describe('Tic Tac Toe', () => {
  let driver;
  let page;
  let player1;
  let player2;

  beforeEach(async () => {
    page = await global.BROWSER.newPage();
    driver = appDriver(page);
    await driver.navigate();
    player1 = 'Yaniv';
    player2 = 'Computer';
  });

  test('should start a new game', async () => {
    await driver.newGame(player1, player2);
    const p1Name = await driver.getPlayer1Title();
    const p2Name = await driver.getPlayer2Title();
    expect(p1Name).toBe(player1);
    expect(p2Name).toBe(player2);
  });

  test('should show "X" after first player clicks', async () => {
    await driver.newGame(player1, player2);
    expect(await driver.getACellValueAt(0)).toBe('');
    await driver.clickACellAt(0);
    expect(await driver.getACellValueAt(0)).toBe('X');
  });

  test('first player should win the game', async () => {
    await driver.newGame(player1, player2);
    await driver.clickACellAt(0);
    await driver.clickACellAt(3);
    expect(await driver.hasWinner()).toBe(false);
    await driver.clickACellAt(1);
    await driver.clickACellAt(4);
    await driver.clickACellAt(2);
    expect(await driver.getWinnerMessage()).toBe(`${player1} won!`);
  });

  test(`can't press non empty cell`, async () => {
    await driver.newGame(player1, player2);
    await driver.clickACellAt(1);
    await driver.clickACellAt(1);
    await driver.clickACellAt(1);
    expect(await driver.getACellValueAt(1)).toBe('X');
  });

  test(`should play the game with a Tie`, async () => {
    await driver.newGame(player1, player2);
    await driver.clickACellAt(1); // x
    await driver.clickACellAt(2); // y
    await driver.clickACellAt(0); // x
    await driver.clickACellAt(3); // 0
    await driver.clickACellAt(5); // x
    await driver.clickACellAt(4); // 0
    await driver.clickACellAt(6); // x
    await driver.clickACellAt(7); // 0
    await driver.clickACellAt(8); // x
    expect(await driver.getWinnerMessage()).toBe(`It's a tie!`);
  });

  test('should mark active users', async () => {
    await driver.newGame(player1, player2);
    expect(await driver.getActivePlayer()).toBe('Yaniv');
    await driver.clickACellAt(0);
    expect(await driver.getActivePlayer()).toBe('Computer');
  });

  test('should hide Registration form', async () => {
    await driver.newGame(player1, player2);
    expect(await driver.hasRegistration()).toBe(false);
  });

  test('should show Board after start game', async () => {
    await driver.newGame(player1, player2);
    expect(await driver.hasBoard()).toBe(true);
  });

  test('should list of winners is empty', async () => {
    await driver.newGame(player1, player2);
    expect(await driver.getWinners()).toBe(0);
  });

  test('should list of winners is not empty', async () => {
    await driver.newGame(player1, player2);
    expect(await driver.getWinners()).toBe(2);
  });
});
