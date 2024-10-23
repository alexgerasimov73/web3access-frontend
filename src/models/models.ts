import { Address } from 'viem';

export interface IUser {
  readonly emailAddress: string;
  readonly ethAddress: Address;
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly linkedIn?: string;
}

export interface IAuthResponse {
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly user: IUser;
}

export interface ISettings {
  readonly confirmEthAddressTemplate: string;
  readonly licenseSigningTemplate: string;
  readonly logInSignatureTemplate: string;
  readonly signatureRealm: string;
  readonly licenceAgreement: {
    readonly id: string;
    readonly name: string;
    readonly downloadUrl: string;
  };
}
