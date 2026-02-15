import { Link } from "react-router-dom";
import "./menubar.css";

export function MenuBar() {
  return (
    <nav className="menu-bar">
      <div className="menu-links">
        <Link to="/player/status">Status</Link>
        <Link to="/player/inventario">Inventário</Link>
        <Link to="/player/habilidades">Habilidades</Link>
        <Link to="/player/pericias">Perícias</Link>
        <Link to="/player/rituais">Rituais</Link>
        <Link to="/player/ataques">Ataques</Link>
        <Link to="/player/combate">Combate</Link>
      </div>
    </nav>
  );
}
