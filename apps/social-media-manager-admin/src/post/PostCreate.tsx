import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CommentTitle } from "../comment/CommentTitle";
import { PlatformTitle } from "../platform/PlatformTitle";
import { UserTitle } from "../user/UserTitle";

export const PostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput
          source="platform.id"
          reference="Platform"
          label="Platform"
        >
          <SelectInput optionText={PlatformTitle} />
        </ReferenceInput>
        <TextInput label="postContent" multiline source="postContent" />
        <DateTimeInput label="postCreatedAt" source="postCreatedAt" />
        <TextInput label="postPlatform" source="postPlatform" />
        <TextInput label="postUser" source="postUser" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
