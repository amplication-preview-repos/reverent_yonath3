import { Platform } from "../platform/Platform";
import { User } from "../user/User";

export type SocialAccount = {
  createdAt: Date;
  id: string;
  platform?: Platform | null;
  updatedAt: Date;
  user?: User | null;
  username: string | null;
};
