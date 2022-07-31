export interface GroupCreateInput {
  name: string;
  description: string;
}

export interface GroupUpdateInput extends GroupCreateInput {
  id: string;
}
export interface GroupDeleteInput {
  id: string;
}
