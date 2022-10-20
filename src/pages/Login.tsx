import React, { useState } from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Login() {
    const navigate = useNavigate();
    const [data, Setdata] = useState(
        {
            name: "",
            username: "",
            email: ""
        }
    );
    function Submit(e: any) {
        axios.post('https://jsonplaceholder.typicode.com/users', {
            name: data.name,
            username: data.username,
            email: data.email
        })
        .then(res=>{
            console.log(res.data)
            navigate("/tabledata")
        })
    }
    function handle(e: any) {
        const newdata: any = { ...data };
        newdata[e.target.id] = e.target.value
        Setdata(newdata)
        console.log(newdata)
    }
    return (
        <>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <form>
                        <Typography variant="h3">
                            Welcome to the Company
                        </Typography>
                        <Typography variant="h6">
                            Login Form
                        </Typography>
                        <TextField
                            required
                            id="name"
                            label="Enter Name"
                            value={data.name}
                            onChange={(e) => handle(e)}
                        />
                        <TextField
                            required
                            id="username"
                            label="Enter User Name"
                            value={data.username}
                            onChange={(e) => handle(e)}
                        />
                        <TextField
                            required
                            id="email"
                            label="Enter Email"
                            value={data.email}
                            onChange={(e) => handle(e)}
                        />
                        <Button onClick={(e) => Submit(e)} >
                            Login
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </>
    )
}
export default Login