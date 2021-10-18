export default interface authInitialState {
  user: { email: string } | null;
  isAuthenticated: boolean;
  accessToken: string;
  refreshToken: string;
  register_state: object | null;
  permission_level: number;
}
