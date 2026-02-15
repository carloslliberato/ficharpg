import type { FormEvent } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../assets/contexts/authContext";
import './login_cadastro.css'

export function Cadastro() {
    const { loginFake } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [role, setRole] = useState<'player' | 'mestre'>('player');
    const [erro, setErro] = useState('');

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (!email || !senha || !confirmarSenha) {
            setErro('Insira os campos corretamente.');
            return
        }

        setErro('')

        if (senha !== confirmarSenha) {
            setErro('As senhas não se coincidem');
            return
        }

        setErro('')

        // aqui depois vai ser firebase

        loginFake(email, role);
        navigate(role === 'player' ? '/player' : '/mestre')
    }

    return (
        <div className="body">
            <div className="section">
                <form onSubmit={handleSubmit} className="formAuth">
                    <h1>CRIAR CONTA</h1>
                    <input
                        type="email"
                        placeholder="Digite seu email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Digite sua senha..."
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Repita a senha..."
                        value={confirmarSenha}
                        onChange={e => setConfirmarSenha(e.target.value)}
                    />

                    <select value={role} onChange={e => setRole(e.target.value as 'player' | 'mestre')}>
                        <option value="player">Player</option>
                        <option value="mestre">Mestre</option>
                    </select>

                    {erro && <p>{erro}</p>}
                    <button type="submit">CADASTRAR</button>

                    <Link to='/' className="link">Já possui uma conta? Entre</Link>

                </form>
            </div>

            <div className="section">
                {/* <img src="../public/pulpito.png" alt="" /> */}
            </div>
        </div>
    )
}

