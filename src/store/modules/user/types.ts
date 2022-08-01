export interface UserProps {
  data: {
    username: string;
  };
  isLoggedIn: boolean;
}

export interface LoginCredentials {
  username: string;
  password: string;
}
