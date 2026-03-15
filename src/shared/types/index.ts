export type ResponseError = {
  error: string;
};

export type ResponseSuccess<T> = {
  data: T;
};

export type ResponseResult<T> = ResponseSuccess<T> | ResponseError;

export type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export type IconProps = {
  size?: number;
  color?: string;
  strokeWidth?: number;
};
