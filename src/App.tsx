import { Routes, Route } from 'react-router-dom';
import { Login } from './screens/Login';
import { Cadastro } from './screens/Cadastro';
import { Player } from './screens/Player';
import { Mestre } from './screens/Mestre';
import { RotaProtegida } from './assets/routes/ProtectedRoutes';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/cadastro' element={<Cadastro />}/>
      <Route
        path="/player"
        element={
          <RotaProtegida rolePermitido='player'>
            <Player />
          </RotaProtegida>}
      />
      <Route
        path="/mestre"
        element={
          <RotaProtegida rolePermitido="mestre">
            <Mestre />
          </RotaProtegida>
        }
      />
    </Routes>
  );
}
