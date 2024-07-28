import { Post } from "../post/Post";
import { User } from "../user/User";

export type Comment = {
  commentContent: string | null;
  commentCreatedAt: Date | null;
  commentPost: string | null;
  commentUser: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  post?: Post | null;
  updatedAt: Date;
  user?: User | null;
};
