import React from 'react'
// import { Link } from 'react-router-dom';
// import emailjs from 'emailjs-com';

// import apiKey from '../../Resuables/Data/emailkey'
import './ContactComponent.css';
function ResumeComponent({data}) {
  // const [subject, setsubject] = useState("");
  // const [name, setname] = useState("");

  // const [email, setemail] = useState("");

  // const [message, setmessage] = useState("");


  // const handleSubmit = (e) => {
  //   e.preventDefault(); // Prevents default refresh by the browser
  //   emailjs.sendForm(`i8f10qe`, `template_fumqzsd`, e.target, `user_yzFRAf6J2an0vcIL7SDFm`)
  //   .then((result) => {
  //   alert("Message Sent, We will get back to you shortly", result.text);
  //   },
  //   (error) => {
  //   alert("An error occurred, Please try again", error.text);
  //   });
  //   // setsubject("")
  //   // setname("")
  //   // setemail("")
  //   // setmessage("")
  //   };



  // const handleSubmit = (e) => {
  //   e.preventDefault(); // Prevents default refresh by the browser
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "contact", ...this.state })
  //   })
  //     .then(() => alert("Success!"))
  //     .catch(error => alert(error));
    // setsubject("")
    // setname("")
    // setemail("")
    // setmessage("")
    // };


  console.log(data);
  return (
    <div className= "Resume">
 <section id="contact" className="contact_container">
      

            {/* <form 
            enctype="text/plain"
            // onSubmit={handleSubmit}
              className="form_container"
            >
              <input
                  name="subject"
                  type="text"
                  className="form_control"
                  placeholder="subject"
                  // onChange={event => setsubject(event.target.value)}
                  // value={subject}
                />
                <input
                  name="name"
                  type="text"
                  className="form_control"
                  placeholder="Name"
                  // onChange={event => setname(event.target.value)}
                  // value={name}
                />
                <input
                  name="email"
                  type="email"
                  className="form_control"
                  placeholder="Email"
                />
                <textarea
                  name="message"
                  type="text"
                  placeholder="message"
                  max="100"
                  onChange={event => setmessage(event.target.value)}
                  value={message}
                ></textarea>
                <input type="submit" className="submit" value="Send" />
            </form> */}
         <iframe id="inlineFrameExample"
    title="Inline Frame Example"
    width="300"
    height="200"
    src="https://contactformmike.netlify.app/">
</iframe>
      </section>
      </div>
  )
}

export default ResumeComponent






    
        // {itemData.map((item) => (
        //   <ImageListItem key={item.img}>
        //     <img src={item.img} alt={item.title} />
        //     <ImageListItemBar
        //       title={item.title}
        //       subtitle={<span>by: {item.author}</span>}
        //       }
           