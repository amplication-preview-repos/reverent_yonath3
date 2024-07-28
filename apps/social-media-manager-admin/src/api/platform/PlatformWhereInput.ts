import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";
import { SocialAccountListRelationFilter } from "../socialAccount/SocialAccountListRelationFilter";

export type PlatformWhereInput = {
  id?: StringFilter;
  name?: "Option1";
  posts?: PostListRelationFilter;
  socialAccounts?: SocialAccountListRelationFilter;
};
