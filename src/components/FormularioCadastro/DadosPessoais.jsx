import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErrors from '../../hooks/useErrors';

function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const validacoes = useContext(ValidacoesCadastro);
    const [errors, validarCampos, possoEnviar] = useErrors(validacoes);

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
                label="Promo????es"
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
                Pr??ximo
            </Button>
        </form>
    );
};


export default DadosPessoais;