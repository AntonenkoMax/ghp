import { ErrorResult } from "../../services/types";

export interface UserState {
  error: ErrorResult | null;
  pending: boolean;
  user: UserResponse | null;
}

export interface UserResponse {
  id: string;
}

export type UserIdPayload = string;

export interface UserResponse {
  login: string;
  name: string | null;
}
