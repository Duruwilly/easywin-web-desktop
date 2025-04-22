export interface UserObj {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

export interface User {
  user_data: UserObj;
  data: UserObj;
  access_token: string;
  refresh_token: string;
}
