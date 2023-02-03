const addToStorage = (key, value) => {
  try {
    if (typeof value === 'string') {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  } catch {
    console.error(error);
  }
};

const getFromStorage = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    console.error(error);
  }
};

const removeFromStorage = key => {
  try {
    localStorage.removeItem(key);
  } catch {
    console.error(error);
  }
};

export default { addToStorage, getFromStorage, removeFromStorage };
