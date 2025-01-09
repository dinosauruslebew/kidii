import React, {useState} from 'react';
import {addDoc, collection} from 'firebase/firestore';
import { db } from '../firebase';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'messages'),{
                name,
                email,
                message,
                timestap: new Date()
            });
            setStatus('Message sent!');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            setStatus('Failed to send message');
            console.error('Errir adding document: ', error);
        }
    };

    return (
        <section id="contact" className='p-8 bg-gray-100'>
            <div className='container mx-auto'>
                <h2 className='text-3xl font-semibold mb-4'>Contact Me</h2>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} className='w-full p-2 border rounded' required/>
                    <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full p-2 border rounded' required/>
                    <input placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} className='w-full p-2 border rounded' required/>
                    <button type="submit" className='px-4 py-2 bg-blue-500 text-white rounded'>Send Message</button>
                </form>
                {status && <p className='mt-4 text-green-600'>{status}</p>}
            </div>
        </section>
    );
};

export default Contact;