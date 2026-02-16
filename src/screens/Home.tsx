import { CharacterCard } from "../components/CharacterCard";
import type { Character } from "../types/player/PlayerContext";
import { BtnCriar } from "../components/BtnCriar";

import './css/home.css'

export function Home() {
    const agent: Partial<Character> = {
        nome: "Kyoku Shimizu",
        classe: "Combatente",
        origem: "Acadêmico",
        img_perfil: "https://i.imgur.com/NSlD8wS.jpg",
        pvAtual: 14,
        pvMax: 20
    };


    return (
        <div className="container">
            <CharacterCard character={agent as Character} />
            <CharacterCard character={agent as Character} />
            <BtnCriar />

        </div>

    )
}
