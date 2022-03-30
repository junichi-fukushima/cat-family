import { signInURL } from "./../../state/urls/index";
import { client } from "./client";

export const signIn = (user: {}) => {
  return client.post(signInURL, user);
};
