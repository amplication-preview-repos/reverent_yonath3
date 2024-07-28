import { Comment } from "../comment/Comment";
import { Post } from "../post/Post";
import { JsonValue } from "type-fest";
import { SocialAccount } from "../socialAccount/SocialAccount";

export type User = {
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  posts?: Array<Post>;
  roles: JsonValue;
  socialAccounts?: Array<SocialAccount>;
  uniqueUsername: string | null;
  updatedAt: Date;
  userEmail: string | null;
  userPassword: string | null;
  username: string;
};
