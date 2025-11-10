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

export interface IOnlineResponse {
  users: IOnline[];
  more_count: number;
}

export interface IOnline {
  user_id: string;
  name: string;
  avatar: string;
  location: string;
}

export interface INotification {
  id: string;
  type: string;
  status: string;
  content: MessageContent[];
  created_at: string;
  is_read: boolean;
}

export interface MessageContent {
  type: string;
  content: string;
}

export interface IRoles {
  Building: IBuilding[];
  Dashboard: IDashboard[];
  Energy: IEnergy[];
}

export interface IBuilding {
  id: number;
  name: string;
  html_id: string;
}

export interface IDashboard {
  id: number;
  name: string;
  html_id: string;
}

export interface IEnergy {
  id: number;
  name: string;
  html_id: string;
}
