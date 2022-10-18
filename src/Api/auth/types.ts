export interface IRegisterRequest {
  username: string;
  password: string;
  fingerprint: string;
}

export interface IRegisterResponse {
  accessToken: string;
  refreshToken: string;
}

export interface IRefreshRequest {
  fingerprint: string;
  refreshToken: string;
}
