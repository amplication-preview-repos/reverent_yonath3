import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PLATFORM_TITLE_FIELD } from "./PlatformTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PlatformShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Post" target="platformId" label="Posts">
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SocialAccount"
          target="platformId"
          label="SocialAccounts"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Platform"
              source="platform.id"
              reference="Platform"
            >
              <TextField source={PLATFORM_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
