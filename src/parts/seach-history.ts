import { observable, action } from "mobx";

export class SearchHistoryStore {
    storageKey = window.location.hostname + 'search_history';

    @observable history: string[] = [];

    constructor() {
        this.getFromLocal();
    }

    @action add = (val: string) => {
        if (!val) {
            return;
        }
        const idx = this.history.findIndex(d => d === val);
        if (idx > -1) {
            this.history.splice(idx, 1);
        }
        this.history.unshift(val);
        this.save();
    }

    @action delete = (val: string) => {
        const idx = this.history.findIndex(d => d === val);
        if (idx === -1) {
            return;
        }
        this.history.splice(idx, 1);
        this.save();
    }

    @action clean = () => {
        this.history = [];
        this.save();
    }

    save = () => {
        localStorage.setItem(this.storageKey, JSON.stringify(this.history));
    }

    @action getFromLocal = () => {
        const historyString = localStorage.getItem(this.storageKey) || '[]';
        this.history = JSON.parse(historyString);
    }
}