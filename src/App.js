import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/';
import { Container, Typography } from '@material-ui/core';
import { validarCPF, validarSenha, validarNome } from './models/cadastro';
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
        <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{ cpf: validarCPF, senha: validarSenha, nome: validarNome }} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}



export default App;

