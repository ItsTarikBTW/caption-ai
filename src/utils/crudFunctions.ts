import fs from 'fs';
import path from 'path';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  plan: string;
  address: string;
  status: string;
}

const dataFilePath = path.join(process.cwd(), '/src/data/users.json');

function readData(): User[] {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // Handle file read error
    console.error('Error reading data:', error);
    return [];
  }
}

function writeData(data: User[]) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  } catch (error) {
    // Handle file write error
    console.error('Error writing data:', error);
  }
}

export function createUser(user: User) {
  const data = readData();
  data.push(user);
  writeData(data);
}

export function updateUser(updatedUser: User) {
  const data = readData();
  const index = data.findIndex((user) => user.id === updatedUser.id);
  if (index !== -1) {
    data[index] = updatedUser;
    writeData(data);
  }
}

export function deleteUser(id: number) {
  const data = readData();
  const updatedData = data.filter((user) => user.id !== id);
  writeData(updatedData);
}

export function getAllUsers(): User[] {
  return readData();
}

export function getUserById(id: number): User | undefined {
  const data = readData();
  return data.find((user) => user.id === id);
}
