export default interface authInitialState {
  user: {
    email: string;
    id: number;
    permission_level: number;
    full_name: string;
    university: string;
    team_id: number;
  } | null;
  id: string | null;
  isAuthenticated: boolean;
  accessToken: string;
  refreshToken: string;
  register_state: object | null;
  permission_level: number;
}
