export interface MenuItem {
  key: number;
  title: string;
  src?: string;
  to: string;
}

export interface ApiErrorType {
  code: string;
  message: string;
}
