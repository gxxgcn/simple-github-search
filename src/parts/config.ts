import { observable } from "mobx";

export class GithubConfig {
    storageKey = window.location.hostname + 'github_api_access_token';
    
    @observable token: string | null = '';

    constructor() {
        this.token = this.getGithubAccessToken()
    }

    setGithubAccessToken(value: string) {
        this.token = value;
        localStorage.setItem(this.storageKey, value);
    }

    getGithubAccessToken() {
        return localStorage.getItem(this.storageKey);
    }

    deleteToken() {
        this.token = null;
        localStorage.removeItem(this.storageKey);
    }
}
