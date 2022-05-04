type RequiredByKeys<
  T extends Record<string, any>,
  K extends keyof any = keyof T
> = Copy<Required<Pick<T, Extract<keyof T, K>>> & Omit<T, K>>;
interface User {
  name?: string;
  age?: number;
  address?: string;
}
type RequiredByKeysRes = RequiredByKeys<User, "name" | "unknown">;
