'use client'
import { User } from "@/lib/data";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
        setUser(user);
        setLoading(false)
    });

    return ()=> unsubscribe()
  },[user?.email])


  return (
    <AuthContext.Provider value={{user, loading}}>
        {children}
    </AuthContext.Provider>
  )

};

export const useAuth = () => useContext(AuthContext);
