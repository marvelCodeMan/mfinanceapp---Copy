import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Login(props) {


    const API_PATH = 'http://localhost/mfi/index.php';
    

    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const requestOptions = {
    //         method: 'POST',
    //         mode: 'no-cors',
    //         headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' },
    //         body: JSON.stringify({ 'username': { username }, 'password': { password } })
    //     };
        
    //     // fetch('http://localhost/mfi/index.php', requestOptions)
    //     // .then(response => response.json())
    //     // .then(data => this.setState({ postId: data.id }))
    //     // .catch(err=> {
    //     //     console.log(err.message);
    //     // })

    //     useEffect(()=>{
    //         const fetchData = async()=>{
    //             const result = await fetch('http://localhost/mfi/index')
    //         }
    //     })
       
        

    // };

    const handleSubmit = e => {
        e.preventDefault();
        axios({
          method: 'post',
          url: `${API_PATH}`,
          headers: { 'content-type': 'application/json' },
        //   data: this.state
        })
          .then(result => {
            console.log('done')
          })
          .catch(error => this.setState({ error: error.message }));
      };


    return (
        <form action="http://localhost/mfi/index.php"
            method='post'
            name='login'
            onSubmit={handleSubmit}
        >

            <div className='container mx-10 '>
                <div className="input-group my-4 mb-3">
                    <span className="input-group-text" id="basic-addon1">Loan Amount</span>
                    <input type="text" className="form-control" name='name' value={props.username} onChange={props.handleName} id='name' placeholder="Enter loan" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group my-2 pl-2">
                    <span className="input-group-text" id="basic-addon1">Interest rate</span>
                    <input type="text" className="form-control" name='password' value={props.password} onChange={props.handlePassword} id='passwords' placeholder="Enter interest rate" aria-label="interes_rate" aria-describedby="basic-addon1" />
                </div>
                {/* <button type='submit' className="btn btn primary mx-2" onClick={handleSubmit}> Submit </button> */}
                
            </div>
        </form>
    );
}