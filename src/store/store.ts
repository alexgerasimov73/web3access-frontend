import { logout } from './../services/AuthService';
import { makeAutoObservable } from 'mobx';
import { IUser } from '../models/models';
import { login, registration } from '../services/AuthService';

export default class Store {
  user: IUser | null = null;
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: IUser | null) {
    this.user = user;
  }

  async login(email: string, password: string) {
    try {
      const response = await login(email, password);
      console.log('response', response);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (error) {
      console.error(error);
    }
  }

  async register(email: string, password: string) {
    try {
      const response = await registration(email, password);
      console.log('response', response);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
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
}
