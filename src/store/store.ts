import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import type { IAuthResponse, ISettings, IUser } from '../models/models';
import { login, logout, registration } from '../services/AuthService';
import { getSettings } from '../services/UserService';

class Store {
  user: IUser | null = null;
  isAuth = false;
  isLoading = false;
  settings: ISettings | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: IUser | null) {
    this.user = user;
  }

  setIsLoading(bool: boolean) {
    this.isLoading = bool;
  }

  setSettings(settings: ISettings) {
    this.settings = settings;
  }

  private handleAuthSuccess(accessToken: string, user: IUser) {
    localStorage.setItem('token', accessToken);
    this.setAuth(true);
    this.setUser(user);
  }

  async login(email: string, password: string) {
    try {
      const response = await login(email, password);
      this.handleAuthSuccess(response.data.accessToken, response.data.user);
    } catch (error) {
      console.error(error);
    }
  }

  async register(email: string, password: string) {
    try {
      const response = await registration(email, password);
      this.handleAuthSuccess(response.data.accessToken, response.data.user);
    } catch (error) {
      console.error(error);
    }
  }

  async logout() {
    try {
      await logout();
      localStorage.removeItem('token');
      this.setAuth(false);
      this.setUser(null);
    } catch (error) {
      console.error(error);
    }
  }

  async checkAuth() {
    this.setIsLoading(true);
    try {
      const response = await axios.get<IAuthResponse>(`${import.meta.env.VITE_API_URL}/refresh`, {
        withCredentials: true,
      });
      this.handleAuthSuccess(response.data.accessToken, response.data.user);
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading(false);
    }
  }

  async getSettings() {
    this.setIsLoading(true);
    try {
      // TODO: Implement this request.
      const response = await getSettings();
      this.setSettings(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading(false);
    }
  }
}

export const store = new Store();
