"use client"
import React, {useState} from 'react';

const Form = () => {
    const [dolar,setDoalr] = useState(1)
    const [taxa,setTaxa] = useState(0)
    const [tipo,setTipo] = useState('')
    return (
        <form>
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
            <button>Converter</button>
        </form>
    );
};

export default Form;