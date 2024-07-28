import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { PlatformWhereUniqueInput } from "../platform/PlatformWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  comments?: CommentCreateNestedManyWithoutPostsInput;
  content?: string | null;
  platform?: PlatformWhereUniqueInput | null;
  postContent?: string | null;
  postCreatedAt?: Date | null;
  postPlatform?: string | null;
  postUser?: string | null;
  user?: UserWhereUniqueInput | null;
};
