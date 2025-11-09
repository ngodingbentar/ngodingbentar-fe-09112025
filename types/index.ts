export interface ApiResponse<T> {
  data: T;
  status: number;
  error: string;
}

export interface IProfile {
  name: string;
  position: string;
  join_date: string;
  location: string;
  activity: IActivity;
}

export interface IActivity {
  check_in: string;
  check_out: string;
}

export interface INews {
  id: string;
  user: IUser;
  date: string;
  content: string[];
}

export interface IUser {
  name: string;
  avatar: string;
}
