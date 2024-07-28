import { StringFilter } from "../../util/StringFilter";
import { PlatformWhereUniqueInput } from "../platform/PlatformWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SocialAccountWhereInput = {
  id?: StringFilter;
  platform?: PlatformWhereUniqueInput;
  user?: UserWhereUniqueInput;
  username?: StringNullableFilter;
};
