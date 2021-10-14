import React from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import firebase from "src/firebase/config";
import User from "~models/User";

interface AuthContextProps {
  user?: User;
  loading?: boolean;
  register?: (email: string, password: string) => Promise<void>;
  login?: (email: string, password: string) => Promise<void>;
  googleLogin?: () => Promise<void>;
  logout?: () => Promise<void>;
}

export const COOKIE_NAME = "admin-template-cod3r-auth";

const AuthContext = React.createContext<AuthContextProps>({});

async function normalizeUser(firebaseUser: firebase.User): Promise<User> {
  const token = await firebaseUser.getIdToken();
  return {
    uid: firebaseUser.uid,
    email: firebaseUser.email,
    name: firebaseUser.displayName,
    token,
    avatarUrl: firebaseUser.photoURL ?? getRandomAvatar(firebaseUser.email),
    provider: firebaseUser.providerData[0]?.providerId,
  };
}

const manageCookie = (loggedIn: boolean) => {
  if (loggedIn) {
    Cookies.set(COOKIE_NAME, loggedIn.toString(), {
      expires: 7,
    });
  } else {
    Cookies.remove(COOKIE_NAME);
  }
};

const getSprite = (): string => {
  const sprites = [
    "male",
    "female",
    "human",
    "identicon",
    "initials",
    "bottts",
    "avataaars",
    "jdenticon",
    "gridy",
    "micah",
  ];
  const max = sprites.length + 1;
  const index = Math.floor(Math.random() * max);
  return sprites[index];
};

const getRandomAvatar = (seed: string | null): string => {
  const sprite = getSprite();
  seed = seed ?? String(Math.random() * 1000);

  return `https://avatars.dicebear.com/api/${sprite}/${seed}.svg`;
};

export function AuthProvider(props: React.PropsWithChildren<{}>) {
  const router = useRouter();

  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState<User>();

  const configSession = async (firebaseUser: any) => {
    if (firebaseUser?.email) {
      const user = await normalizeUser(firebaseUser);
      setUser(user);
      manageCookie(true);
      setLoading(false);
      return user.email!;
    } else {
      setUser(undefined);
      manageCookie(false);
      setLoading(false);
      return false;
    }
  };

  const googleLogin = async () => {
    try {
      setLoading(true);

      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      await configSession(response.user!);
      router.push("/");
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);

      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      await configSession(response.user!);
      router.push("/");
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string) => {
    try {
      setLoading(true);

      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await configSession(response.user!);
      router.push("/");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await firebase.auth().signOut();
      await configSession(null);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (Cookies.get(COOKIE_NAME)) {
      const cancel = firebase.auth().onIdTokenChanged(configSession);
      return () => cancel();
    }

    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        register,
        login,
        googleLogin,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
