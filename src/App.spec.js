import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Registration from './Registration';
import appDriver from './App.driver';

configure({ adapter: new Adapter() });
let driver;
let p1Name;
let p2Name;

beforeEach(() => {
  driver = appDriver()
  p1Name = 'Yaniv';
  p2Name = 'Computer';
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should show "O" after second player clicks', () => {
  driver.render(<App />);
  driver.newGame(p1Name, p2Name);
  driver.clickACellAt(0);
  driver.clickACellAt(1);
  expect(driver.getACellAt(1)).toBe('O');
});

test('"O" should win the game', () => {
  driver.render(<App />);
  driver.newGame(p1Name, p2Name);
  driver.clickACellAt(4);
  driver.clickACellAt(0);
  driver.clickACellAt(5);
  driver.clickACellAt(1);
  driver.clickACellAt(7);
  driver.clickACellAt(2);
  // expect(driver.getWinnerMessage()).toBe(`${p2Name} won!`);
});

test('hide registration Form after start Game', () => {
  const wrapper = driver.render(<App />);
  driver.newGame(p1Name, p2Name);

  expect(wrapper.find(Registration).length).toEqual(0);
});

test('show Board after start game', () => {
  const wrapper = driver.render(<App />);

  expect(wrapper.find('[role="grid"]').length).toEqual(0);
  driver.newGame(p1Name, p2Name);

  expect(wrapper.find('[role="grid"]').length).toEqual(1);
});
