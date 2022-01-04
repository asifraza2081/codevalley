import React from 'react'
import Cards from './Cards'
import Sdata from './Sdata'

export default function Services() {
    return (
        <div>
            <div className="my-5">
                <h1 className="tab-center text-center">Our Services</h1>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">

                            {
                                Sdata.map((val, ind) => {
                                    return <Cards key={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                        paragraph="Some quick example text to build on the card title and make up the bulk of the card's content."
                                        btn="Go Where"
                                    />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
