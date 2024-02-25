export default class Reminder {
    constructor(time, funcName) {
        this.time = time;
        this.funcName = funcName;
    }

    getTime() {
        return this.time;
    }

    getFuncName() {
        return this.funcName;
    }
}