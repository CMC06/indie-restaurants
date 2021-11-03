import { Button, TextField, Box, Typography, Card, CardContent } from '@mui/material';
import { useState } from 'react';
import contactStyles from '../styles/ContactForm.module.css'

const ContactForm = () => {

  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [message, setMessage] = useState();
  const [success, setSucess] = useState(false);


  const handleSubmit = () => {
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    //eventually we'll build logic that will pass this information to a database, or send an e-mail
    setSucess(true);
  }

  const handleChange = (e) => {
    if (e.target.id === 'email') {
      setEmail(e.target.value);
      return;
    }
    if (e.target.id === 'name') {
      setName(e.target.value);
      return;
    }
    if(e.target.id === 'message'){
      setMessage(e.target.value);
    }
  }

  return (
    <div>
    { success ?
      <Card sx={{minWidth: 275, maxWidth: 750}}>
        <CardContent>
          <Typography variant="h5">
            Message Submitted!
          </Typography><br />
          <Typography variant="body2">
            Thank you for contacting us, we always value user input. If your message requires a response, we will reply to the email address you provided. Thanks for supporting local businesses, especially our independent restaurants!
          </Typography>
        </CardContent>
      </Card>
      :
      <Box component="form" sx={{ '& .MuiTextField-root': {m:1, width:'75ch'}}} noValidate autoComplete="off">
      <div>
        <TextField
          variant="outlined"
          id="name"
          label="Name"
          onChange={handleChange}
        /> <br />
        <TextField
          variant="outlined"
          id="email"
          label="Your Email Address"
          onChange={handleChange}
        /> <br />
        <TextField
          variant="outlined"
          id="message"
          label="Your Message"
          multiline
          rows={5}
          onChange={handleChange}
        /> <br />
        <Button variant="outlined" onClick={handleSubmit} style={{padding:'5px', margin: '5px', color:'black', borderColor:'black'}}>Submit</Button>
      </div>
      </Box>
    }
    </div>)
  
}

export default ContactForm
