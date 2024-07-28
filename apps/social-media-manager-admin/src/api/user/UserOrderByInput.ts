import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  uniqueUsername?: SortOrder;
  updatedAt?: SortOrder;
  userEmail?: SortOrder;
  userPassword?: SortOrder;
  username?: SortOrder;
};