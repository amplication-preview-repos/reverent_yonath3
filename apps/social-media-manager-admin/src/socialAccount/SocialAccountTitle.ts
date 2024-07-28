import { SocialAccount as TSocialAccount } from "../api/socialAccount/SocialAccount";

export const SOCIALACCOUNT_TITLE_FIELD = "username";

export const SocialAccountTitle = (record: TSocialAccount): string => {
  return record.username?.toString() || String(record.id);
};
