import React, {useState} from 'react'
import {Box, Paper, TextField, Button} from '@mui/material'
import { Container } from '@mui/system'
import { Link } from 'react-router-dom';

export default function Student() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [dob, setDOB] = useState('');

  const handleClick = (e) => {
      const student = {name, email, dob}; 
      console.log(student, "student");
      fetch(
          'http://localhost:8080/api/v1/student',
          {
            method:'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(student)
          }
      ).then(result => console.log("Saved successfully") + result)
      .catch(error => console.log(error + "Create operation failed"))

  }
  return (
    <Container >
      
      <Paper elevation={3} style={{ padding:10 }} >
        <Link to="/">x</Link>
      <h1>Add student</h1>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
          
            <TextField id="name" onChange={(e) => setName(e.target.value)} label="Name" variant="outlined"   /><br/>
            <TextField id="email" onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined"   /><br/>
            <TextField id="birthdate" onChange={(e) => setDOB(e.target.value)} label="Date of Birth" variant="outlined"  /><br/>
          
            <Button variant="contained" onClick={handleClick}><Link to="/">Add </Link></Button>
           
          </Box>
      </Paper>
    </Container>
  )
}
