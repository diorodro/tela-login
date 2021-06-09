import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({aoEnviar, validarCPF}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [errors, setErrors] = useState({cpf:{valido:true, texto:""}});
    


    return (
        <form onSubmit={event => {
            event.preventDefault();
            aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
        }}
        >
            <TextField
                value={nome}
                onChange={event => {
                    setNome(event.target.value);
                }}
                id="nome"
                required
                label="Nome"
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

                onBlur={event=>{
                    const ehValido = validarCPF(cpf);
                    setErrors({cpf:ehValido})
                }}
                error={!errors.cpf.valido}
                helperText={errors.cpf.texto}
                id="cpf"
                label="CPF"
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



            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    );
};


export default DadosPessoais;