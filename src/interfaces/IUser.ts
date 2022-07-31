export interface UserUpdateInput {
  email: string;
  firstName: string;
  lastName: string;
  groupId: string;
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
