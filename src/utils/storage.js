export function getStorageItem(key) {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(key);
}

export function setStorageItem(key, value) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, value);
}

export function getStoredJson(key, fallback) {
  const savedValue = getStorageItem(key);
  if (!savedValue) return fallback;

  try {
    return JSON.parse(savedValue);
  } catch {
    return fallback;
  }
}

export function setStoredJson(key, value) {
  setStorageItem(key, JSON.stringify(value));
}
