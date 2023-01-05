import React, { useState } from 'react'
/* import dayjs from 'dayjs'; */
import { Box, Paper, TextField, Button} from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Container } from '@mui/system'
import { Link } from 'react-router-dom';

export default function Student() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  /* const [dob, setDOB] = useState(''); */
  const [dob, setDOB] = useState('2010-08-18');
  const [message, setMessage] = useState('')
  
  const handleChange = (newValue) => {
    let dobs = `${newValue.$y}-${newValue.$M}-${newValue.$D}`;
    setDOB(new Date(dobs).toISOString().slice(0, 10));
  };
  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, email, dob }; 
    if (!name || !email || !dob) {
      setMessage("* All field are required");
      setTimeout(() => setMessage(''), 2000)
      return 
    }
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
        { message ? message : ''}
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
            {/* <TextField id="birthdate" onChange={(e) => setDOB(e.target.value)} label="Date of Birth" variant="outlined" /><br /> */}
            
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* <Stack spacing={3}> */}
            <DesktopDatePicker
            label="Date of Birth"
            inputFormat="YYYY-MM-DD"
            variant="outlined"
            value={dob}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          {/* </Stack> */}
          </LocalizationProvider>
            <br/>
            <Button variant="contained" onClick={handleClick} style={{ width:"14%" }}><Link to={(!name || !email ) ? "/createStudent" : "/"}>Add </Link></Button>
           
          </Box>
      </Paper>
      
    </Container>
  )
}
