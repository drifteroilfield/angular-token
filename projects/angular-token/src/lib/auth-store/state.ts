import { AuthData } from '../angular-token.model';

export interface State {
  baseUrl: string;
  cable: any;
  authData: AuthData | null;
  isConnecting: boolean;
  error: string;
}

export const initialState: State = {
  baseUrl: "http://localhost:3000",
  cable: null,
  authData: null,
  isConnecting: false,
  error: null
}
