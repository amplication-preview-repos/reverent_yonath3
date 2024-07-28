import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SocialAccountCreateNestedManyWithoutUsersInput } from "./SocialAccountCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  comments?: CommentCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  posts?: PostCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  socialAccounts?: SocialAccountCreateNestedManyWithoutUsersInput;
  uniqueUsername?: string | null;
  userEmail?: string | null;
  userPassword?: string | null;
  username: string;
};
