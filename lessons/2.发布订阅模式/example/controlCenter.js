const ControlCenter = {
    subscribers: {},

    subscribe(type, fn) {
        if (!this.subscribers[type]) {
            this.subscribers[type] = [];
        }
        if (this.subscribers[type].indexOf(fn) == -1) {
            this.subscribers[type].push(fn);
        }
    },

    unsubscribe(type, fn) {
        let listeners = this.subscribers[type];

        if (!listeners) {
            return;
        }

        let index = listeners.indexOf(fn);

        if (index > -1) {
            listeners.splice(index, 1);
        }
    },

    publish(type, valObj) {
        if (!this.subscribers[type]) {
            return;
        }

        if (!valObj.type) {
            valObj.type = type;
        }

        let listeners = this.subscribers[type];

        for (let i = 0, ll = listeners.length; i < ll; i++) {
            listeners[i](valObj);
        }
    }
}