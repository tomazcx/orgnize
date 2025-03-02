import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User, UserCredential, signOut, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../services";

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<UserCredential>;
  register: (email: string, password: string) => Promise<UserCredential>
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const login = async(email:string, password:string):Promise<UserCredential> => {
    return await signInWithEmailAndPassword(auth, email, password)
  }

  const register = async(email:string, password:string):Promise<UserCredential> => {
    return await createUserWithEmailAndPassword(auth, email, password)
  }

  const logOut = async():Promise<void> => {
    await signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  })

  return (
    <AuthContext.Provider value={{currentUser, login, register, logOut}}>
      {!loading && children}
    </AuthContext.Provider>
  )
}