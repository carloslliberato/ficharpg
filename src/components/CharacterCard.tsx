import { Link } from "react-router-dom";
import type { Character } from "../types/player/PlayerContext";
import './charactercard.css'

interface DisplayProps {
    character: Character
}

export function CharacterCard({ character }: DisplayProps) {
    return (
        <>
            <div>
                <Link to="/player/status" className="btn-ficha" style={{transition: 'all 0.3s ease-in-out;'}}>
                    <div className="card-container">
                        <section>
                            <img src={character.img_perfil} alt="" />
                        </section>

                        <section>
                            <h2>{character.nome}</h2>
                            <h3>{character.classe}</h3><br/>
                            <div className="pv-content">
                                <h3>PV: {character.pvAtual}/{character.pvMax}</h3>
                                <h3>NEX: 20%</h3>
                            </div>

                        </section>
                    </div>
                </Link>


            </div >
        </>
    )
}
