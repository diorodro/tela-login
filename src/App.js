import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/';
import { Container, Typography } from '@material-ui/core';
import { validarCPF, validarSenha, validarNome } from './models/cadastro';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';
import 'fontsource-roboto';
class App extends Component {

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography
          variant="h3"
          align="center"
          component="h1"

        >
          Formulário de Cadastro
        </Typography>
        <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome: validarNome }}>
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}



export default App;

