"use client"
import React, {useState} from 'react';
import {ClientForm} from "@/app/_lib/clientForm";
import { InputNumber } from 'primereact/inputnumber';
import {Button} from "primereact/button";
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
        <form className='max-w-sm ' onSubmit={handleSubmit}>
            <div className="flex items-center gap-5 mb-6">
                <div className="w-1/2">
                    <label className='block mb-2' htmlFor="dolar">Dolar</label>
                    <InputNumber   mode="currency" currency="USD" locale="en-US"  minFractionDigits={2} className="p-4 outline-0 border shadow-input" id="dolar" onChange={(e) => setDolar(Number(e.value))} placeholder='0' required name="name"/>
                </div>
                <div className="w-1/2">
                    <label className='block mb-2' htmlFor="taxa">Taxa do Estado</label>
                    <InputNumber suffix="%"  className=" border p-4 outline-0 shadow-input" minFractionDigits={2}  id="taxa" onChange={(e) => setTaxa(Number(e.value))} placeholder='0' required name="name"/>
                </div>
            </div>
            <div className="mb-6">
                <h2 className="mb-2">Tipo de compra</h2>
                <div className='flex items-center gap-4'>
                    <input type="radio" id="dinheiro" name="tipo" onChange={e => setTipo(e.target.value)}
                           value="dinheiro" required/>
                    <label htmlFor="dinheiro">Dinheiro</label>
                    <input required className='' type="radio" id="cartao" name="tipo" onChange={e => setTipo(e.target.value)} value="cartao"/>
                    <label htmlFor="cartao">Cartão</label>

                </div>
            </div>
            <Button className='px-5 py-4 bg-green-500 text-white rounded-lg' type='submit'> Converter</Button>
        </form>
    );
};

export default Form;