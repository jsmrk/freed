import { IUser } from "@/database/user.model";

export interface createUserParams {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  picture: string;
}

export interface updateUserParams {
  clerkId: string;
  updateData: Partial<IUser>;
  path: string;
}
