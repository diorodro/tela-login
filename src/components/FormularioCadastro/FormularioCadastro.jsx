import React, { useEffect, useState } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosEntrega from './DadosEntrega';
import DadosUsuario from './DadosUsuario';
import { Typography, Stepper, Step, StepLabel} from '@material-ui/core';

function FormularioCadastro({ aoEnviar, validacoes }) {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});
    useEffect(() => {
        if (etapaAtual === (formularios.length - 1)) {
            aoEnviar(dadosColetados);
        }
    })

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} validacoes={validacoes} />,
        <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes} />,
        <DadosEntrega aoEnviar={coletarDados} validacoes={validacoes} />,
        <Typography variant="h5" >Obrigado pelo Cadastro!</Typography>
    ];

    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }

    function coletarDados(dados) {
        setDados({ ...dadosColetados, ...dados });
        proximo();
    }

    return (
        <>
            <Stepper activeStep={etapaAtual}>
                <Step><StepLabel>LOGIN</StepLabel></Step>
                <Step><StepLabel>PESSOAL</StepLabel></Step>
                <Step><StepLabel>ENTREGA</StepLabel></Step>
                <Step><StepLabel>FINALIZAÇÃO</StepLabel></Step>
            </Stepper>
            {formularios[etapaAtual]}
        </>
    );
};

export default FormularioCadastro;