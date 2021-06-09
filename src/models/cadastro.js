function validarCPF(cpf) {
    if (cpf.length !== 11) {
      return {valido:false,texto:"CPF deve ter 11 dígitos."}
    }else{
      return {valido:true,texto:""}
    }
  }

  function validarSenha(senha) {
    if (senha.length < 4 || senha.length > 72) {
      return {valido:false,texto:"Senha deve ter 4 e 72 dígitos."}
    }else{
      return {valido:true,texto:""}
    }
  }


  function validarNome(nome) {
    if (nome.length < 3 || nome.length > 40) {
      return {valido:false,texto:"Nome deve ter no mínimo 3 letras, e 39 no máximo"}
    }else{
      return {valido:true,texto:""}
    }
  }

  export {validarCPF, validarSenha, validarNome};