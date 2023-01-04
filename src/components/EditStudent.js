import React,{useEffect, useState} from 'react'
import {Box, Paper, TextField, Button} from '@mui/material'
import { Container } from '@mui/system'
import { Link, useParams } from 'react-router-dom';


export default function EditStudent({ student }) {

  let { id, names, emails, dobs } = useParams();
  
  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [dob, setDOB] = useState('');
  const [message, setMessage] = useState('')

  useEffect(() => {

  }, [])

  const handleClick = (e) => {
    
    const student = { name, email, dob }; 
    
    if ((!name && !names) || (!email && !emails)) {
      setMessage("* All fields are required")
      setTimeout(() => setMessage(''), 2000)
      return 
    }
    fetch(
        // http://localhost:8080/api/v1/student/1?name=Merima&email=merima@gmail.com
          `http://localhost:8080/api/v1/student/${id}?name=${name}&email=${email}`,
          {
            method:'PUT',
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(student)
          }
    ).then(function (result) {
        console.log(result)
    })
    .catch(error => console.log(error))
  
    }
    return (
      <Container >
        
        <Paper elevation={3} style={{ padding:10 }} >
          <Link to="/" style={{ color:'gray', fontWeight:'bolder', border:'solid 2px', padding:'8px', borderRadius:'50%', alignItems:'center'}}>X</Link>
          <h1>Edit student</h1>
          {message && message}
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
            
              <TextField id="name" onChange={(e) => setName(e.target.value)} label="Name"  value={name !== '' ?  name : names } variant="outlined"   /><br/>
              <TextField id="email" onChange={(e) => setEmail(e.target.value)} label="Email" value={email !== '' ? email : emails} variant="outlined"   /><br/>
              <TextField id="birthdate" onChange={(e) => setDOB(e.target.value)} label="Date of Birth" value={dob !== '' ? dob : dobs} variant="outlined" disabled /><br/>
            
              <Button variant="contained" onClick={handleClick}><Link to="/">Edit</Link> </Button>
             
            </Box>
        </Paper>
      </Container>
    )
}
