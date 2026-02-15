import type { ReactNode } from 'react'
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

type PropsRotaProtegida = {
    children: ReactNode;
    rolePermitido?: 'player' | 'mestre';
}

export function RotaProtegida({ children, rolePermitido }: PropsRotaProtegida) {

    const { usuario } = useAuth();

    if (!usuario) {
        return <Navigate to='/player' replace />;
    }

    if (rolePermitido && usuario.role !== rolePermitido){
        if (usuario.role === 'mestre'){
            return <Navigate to='/mestre' replace />;
        }else{
            return <Navigate to='/player' replace />;
        }

    }

    return <>{children}</>;

}