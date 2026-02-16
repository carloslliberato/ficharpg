import { useState } from "react";
import type { FormEvent } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../assets/contexts/authContext";
import './css/login_cadastro.css'

export function Login() {
    const { loginFake } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [role, setRole] = useState<'player' | 'mestre'>('player')
    const [erro, setErro] = useState('')

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (!email || !senha) {
            setErro('Insira os campos corretamente.');
            return
        }

        setErro('')

        loginFake(email, role);

        if (role === 'player') {
            navigate('/player')
        } else {
            navigate('/mestre')
        }

    }


    return (
        <div className="body">
            <div className="section">
                <form onSubmit={handleSubmit} className="formAuth">
                    <h1>FAZER LOGIN</h1>
                    <input
                        type="email"
                        placeholder="Digite seu email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input
                        type="senha"
                        placeholder="Digite sua senha..."
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />


                    <select value={role} onChange={e => setRole(e.target.value as 'player' | 'mestre')}>
                        <option value="player">Player</option>
                        <option value="mestre">Mestre</option>
                    </select>

                    {erro && <p>{erro}</p>}


                    <button type="submit">Entrar</button>

                    <Link to='/cadastro' className="link">Não possui uma conta? Cadastra-se</Link>
                </form>
            </div>
            <div className="section">
                {/* <img src="../public/pulpito.png" alt=""/> */}
            </div>

        </div>
    );
}