
export default function debounce(func, wait, immediate) {
  const local_storage = { timeout: undefined };
  return function (...args) {
    const context = this;
    const later = function () {
      local_storage.timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !local_storage.timeout;
    clearTimeout(local_storage.timeout);
    local_storage.timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
