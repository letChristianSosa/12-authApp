export interface AuthResponse {
  ok: boolean;
  email?: string;
  uid?: string;
  name?: string;
  token?: string;
  msg?: string;
}

export interface Usuario {
  uid: string;
  name: string;
  email: string;
}
