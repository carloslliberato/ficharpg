import { useAuth } from "../assets/contexts/authContext";

export function Mestre() {
  const { usuario, logout } = useAuth();
  return (
    <div>
      <h1>Área do Mestre</h1>
      <p>Logado como: {usuario?.email}</p>
      <button onClick={logout}>Sair</button>
    </div>
  );
}
