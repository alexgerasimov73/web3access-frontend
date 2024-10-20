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
  readonly confirmEthAddressTemplate: string;
  readonly logInSignatureTemplate: string;
  readonly signatureRealm: string;
}
