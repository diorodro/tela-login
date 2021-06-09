import React, { useState, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErrors from '../../hooks/useErrors';

function DadosUsuario({ aoEnviar }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro);
    const [errors, validarCampos, possoEnviar] = useErrors(validacoes);

    return (
        <form onSubmit={event => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({ email, senha });
            }
        }}>

            <TextField
                value={email}
                onChange={event => {
                    setEmail(event.target.value);
                }}
                id="email"
                name="email"
                label="email"
                type="email"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={senha}
                onChange={event => {
                    setSenha(event.target.value)
                }}
                onBlur={validarCampos}
                error={!errors.senha.valido}
                helperText={errors.senha.texto}
                id="senha"
                name="senha"
                label="senha"
                type="password"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
            >
                Próximo
            </Button>
        </form>
    );
}

export default DadosUsuario;
