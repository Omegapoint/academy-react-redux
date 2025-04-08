import { User } from "./models/user.model";

export const getUsers = (): Promise<Array<User>> => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .catch((_) => {
      throw new Error("api to get users failed...");
    });
};

export const getUser = (userId: number): Promise<User> => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => res.json())
    .catch((_) => {
      throw new Error("api to get user failed...");
    });
};
