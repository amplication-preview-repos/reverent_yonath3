import { Comment } from "../comment/Comment";
import { Platform } from "../platform/Platform";
import { User } from "../user/User";

export type Post = {
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  platform?: Platform | null;
  postContent: string | null;
  postCreatedAt: Date | null;
  postPlatform: string | null;
  postUser: string | null;
  updatedAt: Date;
  user?: User | null;
};
