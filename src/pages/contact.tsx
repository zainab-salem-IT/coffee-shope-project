
import { useEffect, useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit= (e: React.FormEvent)=>{
    e.preventDefault();
    setForm({name:"", email:"", subject:"",message:""});
    if(typeof window!== "undefined"){
      const stored= localStorage.getItem("message");
      return stored ? JSON.parse(stored): [];
    }
    return [];
  }
useEffect(()=>{
localStorage.setItem("message",JSON.stringify(form))
},[form])
  return (
    <div>
      <h1>that is out mobile phone number 07732878902</h1>
      <h1>that is out email zainab@gamil.com</h1>
      <form onSubmit={handleSubmit}>
        <p>name</p>
        <input type="text" name="name" value={form.name} onChange={handleChange} />
        <p>email</p>
        <input type="text" name="email" value={form.email} onChange={handleChange} />
        <p>subject</p>
        <input type="text" name="subject" value={form.subject} onChange={handleChange} />
        <p>message</p>
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="bg-amber-200 text-black border border-amber-400">submit</button>
      </form>

      <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.7234768073946!2d44.36148817530159!3d33.31524147344896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155783e6f7a84a6d%3A0xd36163f5d16b6d49!2sBaghdad%2C%20Iraq!5e0!3m2!1sen!2siq!4v1710230400000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
    </div>
  );
}
