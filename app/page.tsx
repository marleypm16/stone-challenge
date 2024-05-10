"use client"
import Header from "@/app/_components/header";
import Form from "@/app/_components/form";
import {ClientForm} from "@/app/_lib/clientForm";
import {useState} from "react";

export default function Home() {
    const [clientForm, setClientForm] = useState<ClientForm>({
        dolar: 1,
        taxa: 0,
        tipo: ''

    })
    const onSubmit = (clientForm : ClientForm) : void =>{
        setClientForm(clientForm)
    }
  return (
      <>
        <Header/>
        <Form clientForm={clientForm} onSubmit={onSubmit} />

      </>
  );
}
