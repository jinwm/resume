class EventBus {
  listeners = new Map();

  // 订阅事件
  on(eventName, listener) {
    if (!this.listeners.get(eventName)) {
      this.listeners.set(eventName, []);
    }
    if (!this.listeners.get(eventName)?.find(f => f === listener)) {
      this.listeners.get(eventName)?.push(listener);
    }
  }

  _emit(eventName, async, ...args) {
    const listeners = [...(this.listeners.get(eventName) || [])];
    const exec = (listener) => listener(...args);
    if (async) {
      for (const listener of listeners) {
        queueMicrotask(() => exec(listener));
      }
    } else {
      for (const listener of listeners) {
        exec(listener);  // 同步，错误会中断并直接抛出
      }
    }
  }

  // 发布事件
  emit(eventName, ...args) {
    this._emit(eventName, false, ...args);
  }

  // 发布事件
  asyncEmit(eventName, ...args) {
    this._emit(eventName, true, ...args);
  }


  // 移除单个监听器
  off(eventName, listener) {
    const func = this.listeners.get(eventName);
    if (func && func.length) {
      this.listeners.set(eventName, func.filter(f => f !== listener));
    }
  }

  // 移除所有监听器
  remove(eventName) {
    if (this.listeners.has(eventName)) {
      this.listeners.delete(eventName);
    }
  }
}

const eventBus = new EventBus();

export default eventBus;