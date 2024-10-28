import { create } from 'zustand';
import type { ISettings, IUser } from '../models/models';
import type { IRegistrationResponse } from '../pages/Registration/types';

interface IStoreState {
  registrationData: IRegistrationResponse | null;
  settings: ISettings | null;
  user: IUser | null;
  setSettings: (settings: ISettings) => void;
  setRegistrationData: (registrationData: IRegistrationResponse) => void;
  setUser: (user: IUser | null) => void;
}

export const useStore = create<IStoreState>((set) => ({
  registrationData: null,
  settings: null,
  user: null,
  setRegistrationData: (registrationData) => set({ registrationData }),
  setSettings: (settings) => set({ settings }),
  setUser: (user) => set({ user }),
}));
