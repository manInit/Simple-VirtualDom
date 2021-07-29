class Observer {
    constructor() {
        this.subsribers = new Set();
    }

    addEffect(effect) {
        this.subsribers.add(effect);
    }

    notify() {
        this.subsribers.forEach(subscriber => subscriber());
    }
}

export { Observer };