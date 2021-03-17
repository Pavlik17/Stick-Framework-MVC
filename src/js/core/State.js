class State {
  getState(key) {
    return this[key];
  }

  setState(key, value) {
    this[key] = value;
    return this[key];
  }

  removeState(key) {
    return delete this[key];
  }
}

export default State;
