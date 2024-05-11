"use client"
import Header from "@/app/_components/header";
import Form from "@/app/_components/form";
import {ClientForm} from "@/app/_lib/clientForm";
import {useState} from "react";
import ConverterPage from "@/app/_components/converterPage";

export default function Home() {
    const [clientForm, setClientForm] = useState<ClientForm>()
    const onSubmit = (clientForm : ClientForm) : void =>{
        setClientForm(clientForm)
    }
    const goBack = () => {
        setClientForm(undefined)
    }
    return (
        <>
            <Header />
            {clientForm ? (
                <>
                    <ConverterPage clientForm={clientForm} goBack={goBack} />
                </>
            ) : (
                <>
                    <Form clientForm={clientForm!} onSubmit={onSubmit} />
                </>
            )}
        </>
    );
}
