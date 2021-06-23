let activeEffect; 

const watchEffect = fn => {
  activeEffect = fn;
  fn();
  activeEffect = null;
};

const reactive = obj => {
  for (let [k, v] of Object.entries(obj)) {
    const dep = new Dependency();
    Object.defineProperty(obj, k, {
      get() {
        dep.depend();
        return v;
      },
      set(newValue) {
        if (v !== newValue) {
          v = newValue;
          dep.notify();
        }
      }
    });
  }
  return obj;
};

class Dependency {
  constructor() {
    this.subsribers = new Set();
  }

  depend() {
    if (activeEffect) this.subsribers.add(activeEffect);
  }

  notify() {
    this.subsribers.forEach(subscriber => subscriber());
  }
}

export { watchEffect, reactive };
