import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { PlatformWhereUniqueInput } from "../platform/PlatformWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  platform?: PlatformWhereUniqueInput | null;
  postContent?: string | null;
  postCreatedAt?: Date | null;
  postPlatform?: string | null;
  postUser?: string | null;
  user?: UserWhereUniqueInput | null;
};
