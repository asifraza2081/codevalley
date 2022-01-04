import React from 'react'
import { NavLink } from 'react-router-dom'

import "./pages.css"


export default function CommonPage  (props) {
    return (
        <div>
            <section id="header" className="d-flex">
                <div className="container-fluid nav-bg mt-5 align-items-center">
                    <div className="row">
                        <div className="col-10 mx-auto" >
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-cente flex-column">
                                    <h1>{props.header1} <strong className="brand-name">    CodingValley</strong></h1>
                                    <h2 className="my-3">{props.header2}</h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn-get-started">{props.btnname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 col-lg-2 header-img">
                                <img src={props.srcimg} alt="" className="img-fluid animated" />
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>
                
            </section>
        </div>
    )
};
