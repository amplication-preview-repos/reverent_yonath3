import { PostCreateNestedManyWithoutPlatformsInput } from "./PostCreateNestedManyWithoutPlatformsInput";
import { SocialAccountCreateNestedManyWithoutPlatformsInput } from "./SocialAccountCreateNestedManyWithoutPlatformsInput";

export type PlatformCreateInput = {
  name?: "Option1" | null;
  posts?: PostCreateNestedManyWithoutPlatformsInput;
  socialAccounts?: SocialAccountCreateNestedManyWithoutPlatformsInput;
};
