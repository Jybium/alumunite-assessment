import { User } from '../types/user';

// Initialize mock data in localStorage if not already set
const initializeMockData = () => {
  if (!localStorage.getItem('users')) {
    const mockUsers: User[] = [
      { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', profilePhoto: '' }
    ];
    localStorage.setItem('users', JSON.stringify(mockUsers));
  }
};

// Get users from localStorage
export const getUsers = (): User[] => {
  initializeMockData();
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

// Add a new user and save to localStorage
export const addUser = (user: User) => {
  const users = getUsers();
  const newUser = { ...user, id: (users.length + 1).toString() };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
};

// Helper function to handle image as a base64 string
export const convertImageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };
  