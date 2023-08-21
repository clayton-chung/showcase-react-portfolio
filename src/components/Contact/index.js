import Loader from 'react-loaders'
import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import WaveEmoji from '../../assets/images/hand_wave.png'

const Contact = () => {
    const refForm = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'REMOVED',
                'REMOVED',
                refForm.current,
                'REMOVED'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        Contact me
                    </h1>
                    <p>
                        I am interested in internship opportunities. If you have any other questions,
                        or there are issues with this site,
                        please do not hesitate to contact me using the form below:
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                    />
                                </li>
                                <li className='half'>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message" 
                                        name="message" 
                                        required
                                        >
                                    </textarea>
                                </li>
                                <li>
                                    <input 
                                    type="submit" 
                                    className='flat-button' 
                                    value="SEND" 
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="wave-emoji">
                    <img src={WaveEmoji} alt="wave" />
                </div>
            </div>
            <Loader type="ball-clip-rotate" />
        </>
    )
}

export default Contact