import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  commentContent?: SortOrder;
  commentCreatedAt?: SortOrder;
  commentPost?: SortOrder;
  commentUser?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
