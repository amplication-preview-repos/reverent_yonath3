import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { POST_TITLE_FIELD } from "./PostTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PLATFORM_TITLE_FIELD } from "../platform/PlatformTitle";

export const PostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Platform"
          source="platform.id"
          reference="Platform"
        >
          <TextField source={PLATFORM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="postContent" source="postContent" />
        <TextField label="postCreatedAt" source="postCreatedAt" />
        <TextField label="postPlatform" source="postPlatform" />
        <TextField label="postUser" source="postUser" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Comment"
          target="postId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <TextField label="commentContent" source="commentContent" />
            <TextField label="commentCreatedAt" source="commentCreatedAt" />
            <TextField label="commentPost" source="commentPost" />
            <TextField label="commentUser" source="commentUser" />
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Post" source="post.id" reference="Post">
              <TextField source={POST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};