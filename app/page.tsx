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
            <div className="pl-16 pt-16 font-roboto font-medium">
                <div className='mb-8'>
                    <Header/>

                </div>
                {clientForm ? (
                    <>
                        <ConverterPage clientForm={clientForm} goBack={goBack}/>
                    </>
                ) : (
                    <>
                        <Form clientForm={clientForm!} onSubmit={onSubmit}/>
                    </>
                )}
            </div>
            <img className='absolute h-full top-0 right-0' src='./Mask.svg' alt='test'  />

        </>

    );
}
