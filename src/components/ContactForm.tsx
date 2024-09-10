"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("api/contact", {
                method: 'POST',
                body: JSON.stringify({
                    name, email, message
                }),
                headers: {
                    "content-type": "application/json"
                }
            })
        } catch (err: any) {
            console.error('Err:', err);
        }
    }

    return <form onSubmit={onSubmit}>
        <input type={'text'} placeholder={'Name'} value={name} onChange={(e) => setName(e.target.value)} />
        <input type={'email'} placeholder={'Email'} value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea placeholder={'Message'} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type={'submit'} onClick={onSubmit}>Submit</button>
    </form>
}