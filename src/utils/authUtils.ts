import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const loginUser = (auth: Auth, email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logoutUser = (auth: Auth) =>
  signOut(auth).catch((err) => console.log(err));

export const registerUser = async (
  auth: Auth,
  email: string,
  password: string,
  displayName: string,
) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  if (!user) {
    throw new Error("No user exception!");
  }

  await updateProfile(user, {
    ...user,
    displayName,
  });
};
