export const setWinners = (...args) => {
  const winners = JSON.parse(localStorage.getItem('winners')) || [];
  if(args.length === 2) {
    winners.push({ name: [...args], date: new Date().toLocaleDateString()});
    localStorage.setItem('winners', JSON.stringify(winners));
  } else {
    winners.push({ name: args[0], date: new Date().toLocaleDateString()});
    localStorage.setItem('winners', JSON.stringify(winners))
  }
}

export const getWinners = () => JSON.parse(localStorage.getItem('winners')) || [];

export class LocalStorage {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  setItem(name, value) {
    this.store[name] = value;
  }

  getItem(name) {
    return this.store[name] || null;
  }

  removeItem(name) {
    delete this.store[name];
  }
}
