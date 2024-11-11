import { User } from '../types/user';

let mockUsers: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', profilePhoto: 'url' },
  // More users
];

export const getUsers = () => mockUsers;

export const addUser = (user: User) => {
  mockUsers.push({ ...user, id: (mockUsers.length + 1).toString() });
};
