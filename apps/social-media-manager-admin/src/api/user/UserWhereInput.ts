import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";
import { SocialAccountListRelationFilter } from "../socialAccount/SocialAccountListRelationFilter";

export type UserWhereInput = {
  comments?: CommentListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  posts?: PostListRelationFilter;
  socialAccounts?: SocialAccountListRelationFilter;
  uniqueUsername?: StringNullableFilter;
  userEmail?: StringNullableFilter;
  userPassword?: StringNullableFilter;
  username?: StringFilter;
};
