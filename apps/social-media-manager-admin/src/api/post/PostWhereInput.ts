import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlatformWhereUniqueInput } from "../platform/PlatformWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostWhereInput = {
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  platform?: PlatformWhereUniqueInput;
  postContent?: StringNullableFilter;
  postCreatedAt?: DateTimeNullableFilter;
  postPlatform?: StringNullableFilter;
  postUser?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
