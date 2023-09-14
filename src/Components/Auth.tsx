import { createContext, useContext, useState, ReactNode } from "react";

// Define a type for your user object
type User = {
  // Define your user properties here
  id: string;
  username: string;
};

// Define a type for your authentication context
interface AuthContextType  {
  user: User | null;
  login: (user: User) => void;
  logout:()=>void

};

// Create your context
const AuthContext = createContext<AuthContextType | null>(null);

// Define the props for AuthProvider
type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
