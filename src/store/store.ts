import { makeAutoObservable } from 'mobx';
import type { IAuthResponse, ISettings, IUser } from '../models/models';
import { logout } from '../services/AuthService';
import { getSettings } from '../services/UserService';
import type { IRegistrationResponse } from '../pages/Registration/types';
import { api } from '../interceptors/interceptors';

class Store {
  user: IUser | null = null;
  isAuth = false;
  isLoading = false;
  registrationData: IRegistrationResponse | null = null;
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

  setRegistrationData(registrationData: IRegistrationResponse) {
    this.registrationData = registrationData;
  }

  private handleAuthSuccess(accessToken: string, user: IUser) {
    localStorage.setItem('token', accessToken);
    this.setAuth(true);
    this.setUser(user);
  }

  // async login(email: string, password: string) {
  //   try {
  //     const response = await login(email, password);
  //     this.handleAuthSuccess(response.data.accessToken, response.data.user);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

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
      const response = await api.get<IAuthResponse>(`${import.meta.env.VITE_API_URL}/refresh`);
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
      const response = await getSettings();
      this.setSettings(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading(false);
    }
  }

  // TODO: Rewrite to leverage the tanstack query.
  // async startRegistration(email: string) {
  //   try {
  //     const response = await startRegistrationService(email);
  //     this.setRegistrationData(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // TODO: Rewrite to leverage the tanstack query.
  // async verifyEmail(id: string, token: string) {
  //   try {
  //     const response = await verifyEmailService(id, token);
  //     this.setRegistrationData(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // TODO: Rewrite to leverage the tanstack query.
  // async submitDetails(id: string, firstName: string, lastName: string, linkedIn?: string) {
  //   try {
  //     const response = await submitDetails(id, firstName, lastName, linkedIn);
  //     this.setRegistrationData(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // TODO: Rewrite to leverage the tanstack query.
  // async confirmWallet(firstName: string, lastName: string, linkedIn?: string) {
  //   try {
  //     const response = await submitDetails(firstName, lastName, linkedIn);
  //     this.setRegistrationData(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
}

export const store = new Store();
