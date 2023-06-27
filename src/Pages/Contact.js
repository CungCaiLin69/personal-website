import './styles/Contact.css'
import Footer from '../Components/Footer'
import React from 'react'

export default function Contact(){
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e0c48e2b-50e7-4cc4-80aa-0891876fb5c0");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };

    return(
        <div>
            <section id="contact-header">
                <h1>Contact</h1>
            </section>
            <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d3d3d3" fill-opacity="1" d="M0,288L24,250.7C48,213,96,139,144,128C192,117,240,171,288,186.7C336,203,384,181,432,170.7C480,160,528,160,576,160C624,160,672,160,720,186.7C768,213,816,267,864,288C912,309,960,299,1008,282.7C1056,267,1104,245,1152,234.7C1200,224,1248,224,1296,202.7C1344,181,1392,139,1416,117.3L1440,96L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>

            <section id='contact-form'>
                <div className="input-box">
                <form onSubmit={onSubmit}>
                <input type="hidden" name="access_key" value="e0c48e2b-50e7-4cc4-80aa-0891876fb5c0" />

                    <div className='first-section'>
                        <div className='text-and-box'>
                            <label className="name-label" id='name' htmlFor="name-box">Name</label>
                            <input className="name-box" type="text"/>
                        </div>

                        <div className='text-and-box'>
                            <label className="email-label" id='email' htmlFor="email-box">Email</label>
                            <input className="email-box" type="email"/>
                        </div>
                    </div>

                    <div className='text-and-box subject-box'>
                        <label className="subject-label" id='subject' htmlFor="subject">Subject</label>
                        <input className="subject" type="text"/>
                    </div>

                    <div className='text-and-box'>
                        <label className="message-label" id='message' htmlFor="pass">Message</label>
                        <textarea name="message" id="message"></textarea>
                    </div>

                    <button onClick={() => alert("Message Sent")} type='submit' class="send-contact">Send</button>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    )
}