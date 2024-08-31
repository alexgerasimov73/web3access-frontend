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
