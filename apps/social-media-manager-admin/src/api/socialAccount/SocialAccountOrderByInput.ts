import { SortOrder } from "../../util/SortOrder";

export type SocialAccountOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  platformId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  username?: SortOrder;
};
