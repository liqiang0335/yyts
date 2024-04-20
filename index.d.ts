/**
 * @description: 为对象添加 dispatch 方法
 */
type AddDispatch<T> = {
  dispatch: (data: {
    [key in keyof T]?: T[key];
  }) => void;
} & T;
