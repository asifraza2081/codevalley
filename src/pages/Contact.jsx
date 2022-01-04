import React, { useState } from 'react'

export default function Contact() {
    const [data,setdata] = useState({
        fullname:'',
        mobile:'',
        email:'',
        message:'',
    });
    const InputEvent = (event) =>{
        const {name,value} = event.target;
      setdata((preVal) =>{
        return{
            ...preVal,
            [name]:value,
        };
      });
    };

    const formSubmit = (e)=>{
        e.preventDefault();
        alert(` name is:- ${data.fullname} mobile no ${data.mobile} email address ${data.email} message ${data.message}`)
    };
    return (
        <>
        <div className="py-5">
            <h1 className="text-center">Contact us</h1>
        </div>
        <div className="container contact-div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label  className="form-label">Full Name</label>
                                <input 
                                value={data.fullname}
                                onChange={InputEvent}
                                name="fullname"
                                type="text" 
                                className="form-control" 
                                id="fullname" 
                                placeholder="full name"/>
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Mobile No</label>
                                <input 
                                value={data.mobile}
                                onChange={InputEvent}
                                name="mobile"
                                type="number" 
                                className="form-control" 
                                id="mobile" 
                                placeholder="mobile"/>
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Email address</label>
                                <input 
                               value={data.email}
                               onChange={InputEvent}
                               name="email"
                                type="email" 
                                className="form-control" 
                                id="email" 
                                placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Remarks</label>
                                <textarea 
                                value={data.message}
                                onChange={InputEvent}
                                name="message"
                                className="form-control" 
                                id="message" 
                                rows="3"></textarea>
                            </div>
                            <button className="btn btn-outline-primary" type="submit">Submit form</button>
                    </form>    
                </div>
            </div>
        </div>
            
        </>
    )
}
