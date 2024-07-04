import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import "./Contact.scss";

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
};

const Contact = () => {
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm('service_vruz4nc', 'template_3xtcdrg', formRef.current, 'v6_1EsYtlteSGYYbv')
          .then((result) => { 
            setSuccess(true);
          },
          (error) => {
            setError(true);
          });
    };

    return (
        <motion.div className='contact' variants={variants} initial="initial" animate="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Nous Contacter</motion.h1>
            </motion.div>
            <div className="formContainer">
                <motion.form 
                    ref={formRef}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 3 }}>
                    <input type="text" placeholder="Nom" name="nom" />
                    <input type="email" placeholder="Email" name="email" />
                    <textarea rows={8} placeholder="Message" name="message" />
                    <button>Envoyer</button>
                    {error && <span style={{ color: 'red' }}>Error</span>}
                    {success && <span style={{ color: 'green' }}>Success 🎉</span>}
                </motion.form>
            </div>
        </motion.div>
    );
}

export default Contact;
