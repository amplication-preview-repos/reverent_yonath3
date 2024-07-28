import { PostUpdateManyWithoutPlatformsInput } from "./PostUpdateManyWithoutPlatformsInput";
import { SocialAccountUpdateManyWithoutPlatformsInput } from "./SocialAccountUpdateManyWithoutPlatformsInput";

export type PlatformUpdateInput = {
  name?: "Option1" | null;
  posts?: PostUpdateManyWithoutPlatformsInput;
  socialAccounts?: SocialAccountUpdateManyWithoutPlatformsInput;
};
