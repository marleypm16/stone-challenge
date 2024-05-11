"use client"
import React, {useState} from 'react';
import {ClientForm} from "@/app/_lib/clientForm";
import { InputNumber } from 'primereact/inputnumber';
interface FormProps{
    clientForm : ClientForm
    onSubmit : (clientForm : ClientForm) => void
}

const Form = ({onSubmit} : FormProps) => {
    const [dolar,setDolar] = useState(0)
    const [taxa,setTaxa] = useState(0)
    const [tipo,setTipo] = useState('')
    const handleSubmit = (e :React.FormEvent) : void =>{
        e.preventDefault()
        onSubmit({dolar,taxa,tipo})
    }
    return (
        <form className='w-1/2' onSubmit={handleSubmit}>
            <div className="flex items-center gap-5 mb-6">
                <div className="w-1/2">
                    <label className='block mb-2' htmlFor="dolar">Dolar</label>
                    <InputNumber  minFractionDigits={2} className="" id="dolar" onChange={(e) => setDolar(Number(e.value))} placeholder='0' required name="name"/>
                </div>
                <div className="w-1/2">
                    <label className='block mb-2' htmlFor="taxa">Taxa do Estado</label>
                    <InputNumber  className="w-full" minFractionDigits={2}  id="taxa" onChange={(e) => setTaxa(Number(e.value))} placeholder='0' required name="name"/>
                </div>
            </div>
            <div className="mb-6">
                <h2 className="mb-2">Tipo de compra</h2>
                <div className='flex items-center gap-4'>
                    <input type="radio" id="dinheiro" name="tipo" onChange={e => setTipo(e.target.value)}
                           value="dinheiro" required/>
                    <label htmlFor="dinheiro">Dinheiro</label>
                    <input required className='checked:text-green-500' type="radio" id="cartao" name="tipo" onChange={e => setTipo(e.target.value)} value="cartao"/>
                    <label htmlFor="cartao">Cartão</label>

                </div>
            </div>
            <button className='px-5 py-4 bg-green-500 text-white rounded-2xl' type='submit'>Converter</button>
        </form>
    );
};

export default Form;