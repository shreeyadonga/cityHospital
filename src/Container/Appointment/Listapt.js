import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, CardText, CardSubtitle, Button } from "reactstrap";

function Listapt(props) {

    const localdata = JSON.parse(localStorage.getItem("apt"));
    const [data, setdata] = useState([])

    useEffect(() => {
        getdata()
    },
        [])

    const getdata = () => {
        const localdata = JSON.parse(localStorage.getItem('apt'));
        console.log(localdata);
        setdata(localdata);

    }
    console.log(data);

    return (

        <section className='my-4'>
            <div className='container'>
                <div className="section-title">
                    <h2>Make an Appointment</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                        Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                </div>


                <div className='row d-flex justify-content-center'>
                    {
                        data.map((d, i) => {

                            return (
                                <Card className='my-3 mx-3 col-3 border-3 '>
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            {d.name}
                                        </CardTitle>
                                        <CardSubtitle>
                                            {d.email}
                                        </CardSubtitle>
                                        <CardText>
                                            {d.date}
                                        </CardText>
                                        <Button className='shadow-none mx-2 border-2'>
                                            Edit
                                        </Button>
                                        <Button id="btn" className='shadow-none mx-2 border-2'>
                                            Delete
                                        </Button>
                                    </CardBody>
                                </Card>

                            )
                        })
                    }
                </div>

            </div>
        </section>


    );
}

export default Listapt;