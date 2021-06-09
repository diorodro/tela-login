import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function DadosUsuario({ aoEnviar,validacoes }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [errors, setErrors] = useState({ senha: { valido: true, texto: "" } });


    function validarCampos(event) {
        const { name, value } = event.target;
        const novoEstado = { ...errors };
        novoEstado[name] = validacoes[name](value);
        setErrors(novoEstado);
    }

    function possoEnviar() {
        for(let campo in errors){
            if (!errors[campo].valido) {
                return false;
            }
        }

        return true;
    }

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
