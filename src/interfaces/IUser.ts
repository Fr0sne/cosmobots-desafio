export interface UserUpdateInput extends UserCreateInput {
  id: string;
}

export interface UserCreateInput {
  email: string;
  firstName: string;
  lastName: string;
  groupId: string;
}

export interface UserDeleteInput {
  id: string;
}
