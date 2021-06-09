import React, { useState } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosEntrega from './DadosEntrega';
import DadosUsuario from './DadosUsuario';
import { Typography } from '@material-ui/core';

function FormularioCadastro({ aoEnviar, validarCPF }) {

    const [etapaAtual, setEtapaAtual] = useState(1);

    function formularioAtual(etapaAtual) {
        switch (etapaAtual) {
            case 0:
                return <DadosUsuario />;
            case 1:
                return <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>;
            case 2:
                return <DadosEntrega/>;
            default:
               return <Typography>ERRO!</Typography>
        }
    }

    return (
        <>
            {formularioAtual(etapaAtual)}
        </>
    );
};

export default FormularioCadastro;