import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";

import firebase from "src/firebase/config";
import User from "~models/User";

interface AuthContextProps {
  user?: User;
  googleLogin?: () => Promise<void>;
}

const AuthContext = React.createContext<AuthContextProps>({});

async function normalizeUser(firebaseUser: firebase.User): Promise<User> {
  const token = await firebaseUser.getIdToken();
  return {
    uid: firebaseUser.uid,
    email: firebaseUser.email,
    name: firebaseUser.displayName,
    token,
    avatarUrl: firebaseUser.photoURL,
    provider: firebaseUser.providerData[0]?.providerId,
  };
}

export function AuthProvider(props: PropsWithChildren<{}>) {
  const router = useRouter();

  const [user, setUser] = React.useState<User>();

  const googleLogin = async () => {
    try {
      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      if (response.user?.email) {
        const user = await normalizeUser(response.user!);
        setUser(user);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        googleLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
