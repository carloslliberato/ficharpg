import { Routes, Route } from 'react-router-dom';
import { Login } from './screens/Login';
import { Cadastro } from './screens/Cadastro';
import { PlayerArea } from './screens/PlayerArea';
import { Mestre } from './screens/MestreArea';
import { RotaProtegida } from './assets/routes/ProtectedRoutes';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/cadastro' element={<Cadastro />}/>
      
      
      <Route
        path="/player/*"
        element={
          <RotaProtegida rolePermitido='player'>
            <PlayerArea />
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
