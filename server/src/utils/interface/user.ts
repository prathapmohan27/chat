export interface User {
  name: string;
  id: number;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  profileImageUrl: string | null;
  isDeleted: boolean;
  deletedAt: Date | null;
}
