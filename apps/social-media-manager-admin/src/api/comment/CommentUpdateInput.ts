import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  commentContent?: string | null;
  commentCreatedAt?: Date | null;
  commentPost?: string | null;
  commentUser?: string | null;
  content?: string | null;
  post?: PostWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
