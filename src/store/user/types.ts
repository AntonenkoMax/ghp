import { ErrorResult } from "../../services/types";

export interface UserState {
  error: ErrorResult | null;
  pending: boolean;
  user: UserResponse | null;
}

export interface UserResponse {
  id: string;
}
