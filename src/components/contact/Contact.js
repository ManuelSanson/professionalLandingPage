import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { AiOutlineMail } from 'react-icons/ai';
import { BsPhone } from 'react-icons/bs';
import './Contact.css';
import Swal from 'sweetalert2';

const Contact = () => {
    const { t } = useTranslation();
    const form = useRef();

    const [name, setName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [confirmationEmailAddress, setConfirmationEmailAddress] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hic6ers', 'template_lslk772', form.current, 'tm5KeQNe2FQE4X29c')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${t('MessageSent')}`,
            showConfirmButton: false,
            timer: 1500
        })

        setName('');
        setEmailAddress('');
        setConfirmationEmailAddress('');
        setSubject('');
        setMessage('');
    };

    const isDisabled = name === '' || emailAddress === '' || confirmationEmailAddress === '' || subject === '' || message === '' || emailAddress !== confirmationEmailAddress

    return (
        <main className="contactFormContainer">
            <h2 className="text-center mt-4 mb-4"> {t('Help')} </h2>
            <h3 className="m-4"> {t('SendMessage')} </h3>
            <Container className="formContainer mb-4">
                <Form className="mt-4 contactForm" ref={form} onSubmit={sendEmail}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"  >
                        <Form.Label> {t('Name')} </Form.Label>
                        <Form.Control type="text" name="from_name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label> {t('EmailAddress')} </Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label> {t('ConfirmationEmailAddress')} </Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" name="reply_to" value={confirmationEmailAddress} onChange={(e) => setConfirmationEmailAddress(e.target.value)}/>
                    </Form.Group>
                    {emailAddress !== confirmationEmailAddress && emailAddress !== '' && confirmationEmailAddress !== '' && 
                        <Alert key='danger' variant='danger'>
                            {t('EmailMatch')}
                        </Alert>}
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label> {t('Subject')} </Form.Label>
                        <Form.Control type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label> {t('Message')} </Form.Label>
                        <Form.Control as="textarea" placeholder={t('Help')} rows={3} value={message} name="message" onChange={(e) => setMessage(e.target.value)}/>
                    </Form.Group>
                    <div className="mb-5 text-center">
                        <Button disabled={isDisabled} type="submit" size='md' variant="success" className='button'>
                            {t('Submit')}
                        </Button>
                    </div>
                </Form>
            </Container>
            <div className="orContact">
                <div className="line"></div>
                <h6> {t('OR')} </h6>
                <div className="line"></div>
            </div>
            <div className="orContact communicationMeans">
                <div className="communicationMean">
                    <BsPhone />
                    <h6>(+598)99377561</h6>
                </div>
                <div className="communicationMean">
                    <AiOutlineMail/>
                    <h6>manuel@ms-traducciones.com</h6>
                </div>
            </div>
        </main>
    );
};

export default Contact;