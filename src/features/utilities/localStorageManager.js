const saveToLocalStorage = (nameKey, stateObject) => {
  localStorage.setItem(nameKey, JSON.stringify(stateObject));
};

const loadFromLocalStorage = (nameKey) => JSON.parse(localStorage.getItem(nameKey));

const getInitialStateFromLocalStorage = (nameKey, initialStateDefault) => {
  if (loadFromLocalStorage(nameKey)) {
    return loadFromLocalStorage(nameKey);
  }
  return initialStateDefault;
};

export { saveToLocalStorage, loadFromLocalStorage, getInitialStateFromLocalStorage };
