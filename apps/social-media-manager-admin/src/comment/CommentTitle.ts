import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "commentPost";

export const CommentTitle = (record: TComment): string => {
  return record.commentPost?.toString() || String(record.id);
};
