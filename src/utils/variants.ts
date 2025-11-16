export type VariantProps<T extends Record<string, any>> = {
  [K in keyof T]?: keyof T[K];
};
