import { Post as TPost } from "../api/post/Post";

export const POST_TITLE_FIELD = "postPlatform";

export const PostTitle = (record: TPost): string => {
  return record.postPlatform?.toString() || String(record.id);
};
