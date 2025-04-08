import { User } from "./models/user.model";

export const getUsers = (): Promise<User[]> => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .catch((_) => {
      throw new Error("api to get users failed...");
    });
};
