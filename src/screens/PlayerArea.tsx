import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import type { Character } from "../types/player/PlayerContext";
import { StatusCard } from "./StatusCard";
import { MenuBar } from "../components/MenuBar"; 
import { Inventario } from "./Inventario";

export function PlayerArea() {
  const [player, setPlayer] = useState<Character>({
    id: "1",
    nome: "Kyoku Shimizu",
    classe: "Ocultista",
    origem: "Acadêmico",
    pvMax: 20,
    pdMax: 15,
    pvAtual: 14,
    pdAtual: 12,
    nex: 20,
    deslocamento: 6,
    sanidadeAtual: 10,
    sanidadeMax: 21,
    defesa: 0,
    equipamento: 2,
    plusDef: 1,
    bloqueio: 8,
    esquiva: 10,
    agilidade: 3,
    intelecto: 4,
    vigor: 2,
    presenca: 3,
    forca: 2,
  });

  const handleUpdate = (updates: Partial<Character>) => {
    setPlayer((previous) => ({ ...previous, ...updates }));
  };

  return (
    <div>
      <MenuBar/>

      <Routes>
        {/* rota padrão */}
        <Route
          index
          element={<StatusCard {...player} onUpdate={handleUpdate} />}
        />

        <Route
          path="status"
          element={<StatusCard {...player} onUpdate={handleUpdate} />}
        />

        <Route path="inventario" element={<Inventario />} />
      </Routes>
    </div>
  );
}
