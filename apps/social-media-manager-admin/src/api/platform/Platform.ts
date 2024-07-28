import { Post } from "../post/Post";
import { SocialAccount } from "../socialAccount/SocialAccount";

export type Platform = {
  createdAt: Date;
  id: string;
  name?: "Option1" | null;
  posts?: Array<Post>;
  socialAccounts?: Array<SocialAccount>;
  updatedAt: Date;
};
