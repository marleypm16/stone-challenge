"use client"
import React, {useEffect, useState} from 'react';
import {ClientForm} from "@/app/_lib/clientForm";
import {api} from "@/app/_lib/getApi";
import {calculateFinalValue} from "@/app/_lib/calculateFinalValue";
interface ConverterPageProps{
    clientForm : ClientForm
    goBack : () => void
}
const ConverterPage =  ({clientForm,goBack} : ConverterPageProps) => {
    const [cotacao,setCotacao] = useState()
    const dolar = clientForm.dolar
    const taxa = clientForm.taxa
    const tipo = clientForm.tipo
    useEffect(() => {
        const fetchCotacao = async () => {
            try {
                const data = await api();
                setCotacao(data.bid);
            } catch (error) {
                console.error('Erro ao buscar cotação:', error);
            }
        };

        fetchCotacao();
    }, []);
    const handleGoBack =  () : void => {
        goBack()
    }

    return (
        <div>
            <button onClick={handleGoBack}> Voltar</button>
            <h1>O resultado do calculo é :</h1>
            <h2>{calculateFinalValue(dolar,taxa,tipo,Number(cotacao))}</h2>

        </div>
    );
};

export default ConverterPage;