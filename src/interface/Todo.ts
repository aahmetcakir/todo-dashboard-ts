export interface Todo {
  id: number;
  title: string;
  description: string;
  status: string;
  completionPercentage: number;
  completionText: string;
  avatars: Array<Avatar>;
}

export interface Avatar {
  id: number;
  fullname: string;
  photoUrl: string;
}
