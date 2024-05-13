"use client"
import React, {useEffect, useState} from 'react';
import {ClientForm} from "@/app/_lib/clientForm";
import {api} from "@/app/_lib/getApi";
import {calculateFinalValue} from "@/app/_lib/calculateFinalValue";
import {Button} from "primereact/button";
import {formatValue} from "@/app/_lib/formatValue";
interface ConverterPageProps{
    clientForm : ClientForm
    goBack : () => void
}
const ConverterPage =  ({clientForm,goBack} : ConverterPageProps) => {
    const [quotation,setQuotation] = useState()
    const dolarValue = clientForm.dolarValue
    const tax = clientForm.tax
    const type = clientForm.type
    useEffect(() => {
        const fetchQuotation = async () => {
            try {
                const data = await api();
                setQuotation(data.bid);
            } catch (error) {
                console.error('Erro ao buscar cotação:', error);
            }
        };

        fetchQuotation();
    }, []);
    const handleGoBack =  () : void => {
        goBack()
    }

    return (
        <div>
            <Button className='p-4 bg-transparent text-black border shadow-goBackButton rounded-lg mb-5' onClick={handleGoBack}>Voltar</Button>
            <div className="flex flex-col justify-center gap-4">
                <h1 className='text-form font-bold text-xl '>O resultado do calculo é :</h1>
                <h2 className='font-bold text-green-500 text-6xl'>{formatValue(calculateFinalValue(dolarValue, tax, type, Number(quotation)),'BRL')}</h2>
                <div>
                    <p className="text-header text-sm mb-2">Compra no {type} com taxa de {tax}%</p>
                    <p className="text-header text-sm">Cotação do dólar : {formatValue(quotation!,'USD')}</p>
                </div>

            </div>


        </div>
    );
};

export default ConverterPage;