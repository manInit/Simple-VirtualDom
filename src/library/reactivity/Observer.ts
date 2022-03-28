class Observer {
  private subscribers: Set<() => void>

  constructor() {
    this.subscribers = new Set()
  }

  addEffect(effect: () => void): void {
    this.subscribers.add(effect)
  }

  notify(): void {
    for (const subscriber of this.subscribers)
      subscriber()
  }
}

export { Observer }