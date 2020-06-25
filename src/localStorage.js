const STORAGE_PREFIX = 'mfino_react_test_storage:';

class LocalStorage {
  get = (key) => {
    let value = window.localStorage.getItem(`${STORAGE_PREFIX}${key}`);
    return value && JSON.parse(value);
  }

  set = (key, value) => {
    return window.localStorage.setItem(`${STORAGE_PREFIX}${key}`, value && JSON.stringify(value));
  }
}

const localStorage = new LocalStorage();

export { localStorage };