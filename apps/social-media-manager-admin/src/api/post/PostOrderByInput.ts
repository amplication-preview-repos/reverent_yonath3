import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  platformId?: SortOrder;
  postContent?: SortOrder;
  postCreatedAt?: SortOrder;
  postPlatform?: SortOrder;
  postUser?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
