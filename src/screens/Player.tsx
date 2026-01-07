import { useAuth } from "../assets/contexts/authContext";

export function Player() {
  const { usuario, logout } = useAuth();
  return (
    <div>
      <h1>Área do Player</h1>
      <p>Logado como: {usuario?.email}</p>
      <button onClick={logout}>Sair</button>
    </div>
  );
}
