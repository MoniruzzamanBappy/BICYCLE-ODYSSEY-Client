import React from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const handleSend=(e)=>{
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const subject = e.target.subject.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const name =firstName.concat(" ", lastName);
    const data = {
      name,
      email,
      subject,
      message
    }
    console.log(data);
    fetch('https://bicycle-odyssey.herokuapp.com/email', {
             method: 'POST',
             headers:{
                 'content-type': 'application/json'
             },
             body: JSON.stringify(data)
         })
         .then(res=>res.json())
         .then(data=>{
            toast.success("Message send successfully!");
            e.target.reset()
         })
  }
    return (
      <div className="card h-screen w-screen bg-base-100 shadow-xl p-8 mx-auto my-4">
        <div className="text-center">
          <h1 className="text-5xl mb-9 font-bold">Contact Us</h1>
        </div>
        <form
          onSubmit={handleSend}
          className="grid grid-cols-1 pt-2.5 justify-items-center gap-3"
          action=""
        >
          <div className="w-full max-w-md">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input input-bordered w-full max-w-md"
            />
          </div>
          <div className="w-full max-w-md">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input w-full max-w-md input-bordered "
            />
          </div>
          <div className="w-full max-w-md">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input

              type="email"
              name="email"
              placeholder="Email"
              className="input w-full max-w-md input-bordered "
            />
          </div>
          <div className="w-full max-w-md">
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <input

              type="text"
              name="subject"
              placeholder="Email Subject"
              className="input w-full max-w-md input-bordered "
            />
          </div>
          <div className="w-full max-w-md">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              className="input w-full max-w-md input-bordered "
            />
          </div>
          <input
            className="btn w-full max-w-md text-white btn-accent"
            type="submit"
            value="Send"
          />
        </form>
      </div>

       
    );
};

export default ContactForm;