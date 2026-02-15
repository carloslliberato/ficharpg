import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import type { Character } from "../types/player/PlayerContext";
import './statuscard.css'

// import { MenuBar } from "../components/MenuBar";

type StatusProps = Character & {
    onUpdate: (update: Partial<Character>) => void;
}

export function StatusCard({
    nome,
    classe,
    origem,
    pvMax,
    pvAtual,
    pdMax,
    pdAtual,
    nex,
    deslocamento,
    sanidadeAtual,
    sanidadeMax,
    defesa,
    plusDef,
    equipamento,
    bloqueio,
    esquiva,
    agilidade,
    intelecto,
    vigor,
    presenca,
    forca,
    onUpdate
}: StatusProps) {

    const handleTextChange = (field: 'nome' | 'classe' | 'origem') => (e: ChangeEvent<HTMLInputElement>) => {
        onUpdate({ [field]: e.target.value })
    };

    const handleNumberChange = (field: 'pvAtual' |
        'pvMax' |
        'pdAtual' |
        'pdMax' |
        'nex' |
        'deslocamento' |
        'sanidadeAtual' |
        'sanidadeMax' |
        'defesa' |
        'plusDef' |
        'equipamento' |
        'bloqueio' |
        'esquiva' |
        'agilidade' |
        'intelecto' |
        'vigor' |
        'presenca' |
        'forca') =>
        (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            onUpdate({ [field]: Number(e.target.value) })
        }

    const handleButtonClick = (field: 'pvAtual' | 'pdAtual' | 'sanidadeAtual') => (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        const btn = target.closest('button') as HTMLButtonElement
        const container = btn.closest('.status-bar') as HTMLElement;
        const inputAtual = container?.querySelector('.progress-status-atual') as HTMLInputElement;

        const currentValue = Number(inputAtual.value) || 0;
        const maxValue = Number(container?.dataset.max) || 999;

        if (btn.dataset.action === 'increase') {
            const newValue = Math.min(currentValue + 1, maxValue);

            onUpdate({ [field]: newValue })

        }

        if (btn.dataset.action === 'decrease') {
            const newValue = Math.min(currentValue - 1, maxValue);

            onUpdate({ [field]: newValue })

        }

    }

    const [defesaTotal, setDefesaTotal] = useState(10);
    useEffect(() => {
        setDefesaTotal(10 + (agilidade || 0) + (equipamento || 0) + (plusDef || 0))
    }, [agilidade, equipamento, plusDef])

    return (
        <>
            <div className="status-card">
                <div className="info-container">
                    <section>
                        <img src="https://i.imgur.com/NSlD8wS.jpg" alt="" />
                    </section>

                    <section>
                        <div className="infos">
                            <div className="dados">
                                <div>NOME:</div>
                                <input
                                    value={nome}
                                    onChange={handleTextChange('nome')}
                                />
                            </div>

                            <div className="dados">
                                <div>CLASSE:</div>
                                <input
                                    value={classe}
                                    onChange={handleTextChange('classe')}
                                />
                            </div>

                            <div className="dados">
                                <div>ORIGEM:</div>
                                <input
                                    value={origem}
                                    onChange={handleTextChange('origem')}
                                />
                            </div>
                        </div>
                    </section>
                </div>

                <div className="status-base">
                    <div className="status progress-bar ">
                        <h3>VIDA</h3>
                        <div className="status-bar status-pv">

                            <button className="diminui" data-action='decrease' onClick={handleButtonClick('pvAtual')}>
                                <img src=".././public/seta-direita.png" alt="diminui" className="seta-invertida" />
                            </button>

                            <input
                                type="number"
                                value={pvAtual}
                                onChange={handleNumberChange('pvAtual')}
                                className="progress-status-atual" />

                            <div className="barra">/</div>

                            <input
                                type="number"
                                value={pvMax}
                                onChange={handleNumberChange('pvMax')}
                                className="progress-status-total" />

                            <button className="aumenta" data-action='increase' onClick={handleButtonClick('pvAtual')}>
                                <img src=".././public/seta-direita.png" alt="aumenta" />
                            </button>

                        </div>

                    </div>

                    <div className="status progress-bar ">
                        <h3>SANIDADE</h3>
                        <div className="status-bar status-san">
                            <button className="diminui"
                                data-action='decrease'
                                onClick={handleButtonClick('sanidadeAtual')}>
                                <img src=".././public/seta-direita.png" alt="diminui" className="seta-invertida" />
                            </button>
                            <input
                                type="number"
                                value={sanidadeAtual}
                                onChange={handleNumberChange('sanidadeAtual')}
                                className="progress-status-atual" />
                            <div className="barra">/</div>
                            <input
                                type="number"
                                value={sanidadeMax}
                                onChange={handleNumberChange('sanidadeMax')} />
                            <button className="aumenta"
                                data-action='increase'
                                onClick={handleButtonClick('sanidadeAtual')}>
                                <img src=".././public/seta-direita.png" alt="aumenta" className="progress-status-total" />
                            </button>

                        </div>
                    </div>

                    <div className="status progress-bar ">
                        <h3>DETERMINAÇÃO</h3>
                        <div className="status-bar status-pd">
                            <button className="diminui"
                                data-action='decrease'
                                onClick={handleButtonClick('pdAtual')}>
                                <img src=".././public/seta-direita.png" alt="diminui" className="seta-invertida" />
                            </button>
                            <input
                                type="number"
                                value={pdAtual}
                                onChange={handleNumberChange('pdAtual')}
                                placeholder="PE Atual"
                                className="progress-status-atual" />
                            <div className="barra">/</div>
                            <input
                                type="number"
                                value={pdMax}
                                onChange={handleNumberChange('pdMax')}
                                placeholder="PE Máximo" />
                            <button className="aumenta"
                                data-action='increase'
                                onClick={handleButtonClick('pdAtual')}>
                                <img src=".././public/seta-direita.png" alt="aumenta" className="progress-status-total" />
                            </button>
                        </div>
                    </div>

                    <div className="progress-block">
                        <div className="status">
                            <h3>NEX: </h3>
                            <select value={nex} onChange={handleNumberChange('nex')}>
                                {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 99].map(num => (
                                    <option key={num} value={num}>
                                        {num}%
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="status">
                            <h3>DESL: </h3>
                            <input type="number" value={deslocamento} onChange={handleNumberChange('deslocamento')} placeholder="Deslocamento" />
                        </div>
                    </div>
                </div>


                <div className="attributes-status-container">
                    <div className="img-container">
                        <img src=".././public/attributes.png" alt="" />
                    </div>

                    <div className="attributes-value-container">
                        <input type='number' value={agilidade} onChange={handleNumberChange('agilidade')} className="agi attributes-value" />
                        <input type='number' value={forca} onChange={handleNumberChange('forca')} className="for attributes-value" />
                        <input type='number' value={intelecto} onChange={handleNumberChange('intelecto')} className="int attributes-value" />
                        <input type='number' value={presenca} onChange={handleNumberChange('presenca')} className="pre attributes-value" />
                        <input type='number' value={vigor} onChange={handleNumberChange('vigor')} className="vig attributes-value" />
                    </div>
                </div>

                <div className="status-def">
                    <div className="defense">
                        <div className="def-container">
                            <div className="def-img-container">
                                <img className="def-img" src=".././public/shield-icon-FCvc8PM4.png" alt="logo defesa" />
                            </div>
                            <div className="def-value">
                                <h2 className="totalDef" >{defesa = defesaTotal || 0}</h2>
                            </div>
                        </div>

                        <div className="def-info">
                            <div className="def-text">
                                <h3>DEFESA</h3>
                                <h4>= 10 + AGI +</h4>
                            </div>


                            <div className="def-input">
                                <input
                                    className="equipInput"
                                    type="number"
                                    value={equipamento || ''}
                                    onChange={handleNumberChange('equipamento')} />
                                <h5>Equipa.</h5>
                            </div>
                            <h4 className="def-plus">+</h4>

                            <div className="def-input">
                                <input
                                    className="plusDefInput"
                                    type="number"
                                    value={plusDef || ''}
                                    onChange={handleNumberChange('plusDef')} />
                                <h5>Outros.</h5>
                            </div>
                        </div>
                    </div>

                    <div className="others-def-container">
                        <div className="others-def bloqueio">
                            <div className="others-def-input">
                                <h3>BLOQUEIO</h3>
                                <input type="number"
                                    value={bloqueio || ''}
                                    onChange={handleNumberChange('bloqueio')} />
                            </div>
                        </div>

                        <div className="others-def esquiva">
                            <div className="others-def-input">
                                <h3>ESQUIVA</h3>
                                <input type="number"
                                    value={esquiva || ''}
                                    onChange={handleNumberChange('esquiva')} />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="infos-plus">
                    <div className="dados-plus">
                        <div>PROTEÇÃO:</div>
                        <input
                        />
                    </div>

                    <div className="dados-plus">
                        <div>RESISTÊNCIAS:</div>
                        <input

                        />
                    </div>

                    <div className="dados-plus">
                        <div>PROFICIÊNCIAS:</div>
                        <input
                        />
                    </div>
                </div>
            </div>
        </>

    )
}