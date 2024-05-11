"use client"
import React, {useState} from 'react';
import {ClientForm} from "@/app/_lib/clientForm";

interface FormProps{
    clientForm : ClientForm
    onSubmit : (clientForm : ClientForm) => void
}

const Form = ({onSubmit} : FormProps) => {
    const [dolar,setDoalr] = useState(1)
    const [taxa,setTaxa] = useState(0)
    const [tipo,setTipo] = useState('')
    const handleSubmit = (e :React.FormEvent) : void =>{
        e.preventDefault()
        onSubmit({dolar,taxa,tipo})
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="dolar">Dolar</label>
                <input type="number" id="dolar" onChange={(e)=> setDoalr(Number(e.target.value))} value={dolar} name="name"/>
                <label htmlFor="taxa">Taxa do Estado</label>
                <input type="number" onChange={(e)=> setTaxa(Number(e.target.value))} value={taxa} id="taxa" name="name"/>
            </div>
            <div>
                <h2>Tipo de compra</h2>
                <input type="radio" id="dinheiro" name="tipo" onChange={e => setTipo(e.target.value)} value="dinheiro" />
                <label htmlFor="dinheiro">Dinheiro</label>
                <input type="radio" id="cartao" name="tipo" onChange={e => setTipo(e.target.value)} value="cartao"/>
                <label htmlFor="cartao">Cartão</label>
            </div>
            <button type='submit'>Converter</button>
        </form>
    );
};

export default Form;