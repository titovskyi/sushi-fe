export class AdminUser {
  token: string;
  role: string;
  expire: string;
}

export interface AdminUserLoginInterface {
  login: string;
  password: string;
}
