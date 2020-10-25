export interface LoginResponse {
  access_token:  string;
  email:         string;
  id_token:      string;
  lastname:      string;
  name:          string;
  refresh_token: string;
  roles:         any[];
  status:        string;
  token_type:    string;
  user_uuid:     string;
  username:      string;
}
