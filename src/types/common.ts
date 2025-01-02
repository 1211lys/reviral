export interface MenuItem {
  key: number;
  title: string;
  src?: string;
  to: string;
  userId?: string;
}

export interface ApiErrorType {
  code: string;
  message: string;
}
