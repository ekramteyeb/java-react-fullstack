import React from 'react'

import { Paper,Container, Button, Stack } from '@mui/material'
import { Link } from 'react-router-dom'


export default function Students({ students }) {
    const paperStyle = { padding: '30px 20px', margin: '20px auto' }

    const handleDelete = (id) => {
        fetch(
          `http://localhost:8080/api/v1/student/${id}`,
          {
            method:'DELETE',
            headers:{
              'Content-Type': 'application/json'
            },
            /* body:JSON.stringify(student) */
          }
      ).then(result => console.log("Deleted successfully") + result)
      .catch(error => console.log(error + "Delete  operation failed"))
    }
    return (
        <Container >
            <p id="jumb"></p>
            
            <Paper elevation={3} style={{ padding: '10px', margin: '10px auto' }}>
                <h2>All students</h2>
                {
                    students && students.map(student =>
                    <Stack spacing={3} key={student.id}>
                    <Paper key={student.id} elevation={2} style={{ ...paperStyle, width:'90%' } }>
                    
                        {student.name}<br/>
                        {student.email}<br/>
                        {student.dob}<br/>
                        <br />
                        <Button
                            variant="contained"
                            style={{ border: '100' }}>
                                        
                            <Link  to={{
                                pathname: `/editStudent/${student.id}/${student.name}/${student.email}/${student.dob}`,
                                query: { names: student.id, dobs: student.dob, emails: student.email }
                                
                            }} >
                                Edit
                            </Link>
                
                        </Button>
                            <Button
                                    variant="contained"
                                    style={{ background: 'red' }}
                                    onClick={() => handleDelete(student.id)}
                                >
                                Delete
                            </Button>
                    
                        </Paper> 
                        </Stack>
                    )

                    }
                
            <a id="jumpfrom" href='#jumb'>Go to top</a>
        </Paper>

        </Container>
    )
}
