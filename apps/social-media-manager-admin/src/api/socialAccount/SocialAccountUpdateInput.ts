import { PlatformWhereUniqueInput } from "../platform/PlatformWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SocialAccountUpdateInput = {
  platform?: PlatformWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  username?: string | null;
};
