import { PlatformWhereUniqueInput } from "../platform/PlatformWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SocialAccountCreateInput = {
  platform?: PlatformWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  username?: string | null;
};
