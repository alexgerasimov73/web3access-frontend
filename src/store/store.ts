import { logout } from './../services/AuthService';
import { makeAutoObservable } from 'mobx';
import { IAuthResponse, IUser } from '../models/models';
import { login, registration } from '../services/AuthService';
import axios from 'axios';

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
      const response = await axios.get<IAuthResponse>(
        `${import.meta.env.API_URL || 'http://localhost:5001/api'}/refresh`,
        { withCredentials: true },
      );
      this.handleAuthSuccess(response.data.accessToken, response.data.user);
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading(false);
    }
  }
}

export const store = new Store();
