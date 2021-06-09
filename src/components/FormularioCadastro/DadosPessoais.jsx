import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({ aoEnviar, validacoes }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [errors, setErrors] = useState({ cpf: { valido: true, texto: "" }, nome: { valido: true, texto: "" }});


    function validarCampos(event) {
        const { name, value } = event.target;
        const novoEstado = { ...errors };
        novoEstado[name] = validacoes[name](value);
        setErrors(novoEstado);
    }


    function possoEnviar() {
        for (let campo in errors) {
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
                aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
            }
        }}
        >
            <TextField
                value={nome}
                onChange={event => {
                    setNome(event.target.value);
                }}
                onBlur={validarCampos}
                error={!errors.nome.valido}
                helperText={errors.nome.texto}
                id="nome"
                label="Nome"
                name="nome"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={sobrenome}
                onChange={event => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome"
                required
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={cpf}
                onChange={event => {
                    setCpf(event.target.value);
                }}

                onBlur={validarCampos}
                error={!errors.cpf.valido}
                helperText={errors.cpf.texto}
                id="cpf"
                label="CPF"
                name="cpf"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <FormControlLabel
                label="Promoções"
                control={
                    <Switch
                        checked={promocoes}
                        onChange={event => {
                            setPromocoes(event.target.checked)
                        }}
                        name="promocoes"
                        color="primary"
                    />}
            />

            <FormControlLabel
                label="Novidades"
                control={<Switch
                    checked={novidades}
                    onChange={event => {
                        setNovidades(event.target.checked)
                    }}
                    name="novidades"
                    color="primary"
                />}
            />



            <Button
                type="submit"
                variant="contained"
                color="primary">
                Próximo
            </Button>
        </form>
    );
};


export default DadosPessoais;