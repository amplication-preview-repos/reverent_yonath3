import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SocialAccountUpdateManyWithoutUsersInput } from "./SocialAccountUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  comments?: CommentUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  posts?: PostUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  socialAccounts?: SocialAccountUpdateManyWithoutUsersInput;
  uniqueUsername?: string | null;
  userEmail?: string | null;
  userPassword?: string | null;
  username?: string;
};
