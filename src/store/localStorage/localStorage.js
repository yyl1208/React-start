import { defaultSetting } from "@/store/common.js";

const Keys = {
  setting: "setting",
};

class ClientStorage {
  _storage = null;
  _prefix = "React.";
  constructor(store) {
    this._storage = store === "sessionStorage" ? sessionStorage : localStorage;
    if (!this.get(Keys.setting)) {
      this.set(Keys.setting, defaultSetting);
    }
  }

  getJson(key) {
    const value = this.get(key);
    return value ? JSON.parse(value) : null;
  }

  get(key) {
    return this._storage.getItem(this._prefix + key);
  }

  set(key, value) {
    if (typeof value === "object") {
      value = JSON.stringify(value);
    } else if (typeof value === "number") {
      value = value.toString();
    }
    key = this._prefix + key;
    this._storage.setItem(key, value);
  }

  remove(key) {
    this._storage.removeItem(this._prefix + key);
  }

  plainSet(key, value) {
    this._storage.setItem(key, value);
  }
  plainGet(key) {
    this._storage.getItem(key);
  }
  plainRemove(key) {
    this._storage.removeItem(key);
  }

  clear() {
    this._storage.clear();
  }
}

const localStore = new ClientStorage("localStorage");
export default localStore;

export function getSetting() {
  return localStore.getJson(Keys.setting);
}

export const StorageKeys = Keys;
