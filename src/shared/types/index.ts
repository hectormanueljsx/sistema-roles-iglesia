export type ResponseError = {
  error: string;
};

export type ResponseSuccess<T> = {
  data: T;
};

export type ResponseResult<T> = ResponseSuccess<T> | ResponseError;

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}
