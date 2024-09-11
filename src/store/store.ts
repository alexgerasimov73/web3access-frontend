import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import type { IAuthResponse, IUser } from '../models/models';
import { login, logout, registration } from '../services/AuthService';

class Store {
  user: IUser | null = null;
  isAuth = false;
  isLoading = false;

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
}

export const store = new Store();
