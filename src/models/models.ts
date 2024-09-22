export interface IUser {
  readonly email: string;
  readonly id: string;
  readonly isActivated: boolean;
}

export interface IAuthResponse {
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly user: IUser;
}

export interface ISettings {
  readonly settings: string;
  readonly chain: {
    readonly chainId: string;
  };
  readonly core: {
    readonly signInSignatureTemplate: string;
  };
}
