import { createContext ,useContext, useState } from "react";
import type { ReactNode } from 'react'

type Role = 'player' | 'mestre'

type Usuario = {
    email: String;
    role: Role;
} | null;

type AuthContextTipo = {
    usuario: Usuario;
    loginFake: (email: String, role: Role) => void; 
    logout: () => void;
};

const AuthContext = createContext<AuthContextTipo | undefined>(undefined)

export function AuthProvider({ children }: {children : ReactNode}){
    const [usuario, setUsuario] = useState<Usuario>(null);

    function loginFake(email: String, role:Role){
        setUsuario({ email, role });
    }

    function logout(){
        setUsuario(null)
    }

    return(
        <AuthContext.Provider value={{usuario, loginFake, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) {
        throw new Error('useAuth precisa estar dentro de AuthProvider')
    }
    return ctx;
}