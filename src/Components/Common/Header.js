import React, { useState } from "react";
import MakeAnAppointment from "./MakeAnAppointment";
import { isLoggedIn } from "../../service/auth.service";
import { useNavigate } from "react-router-dom";

function Header() {
    const [openMakeAnAppointmentPopup, setOpenMakeAnAppointmentPopup] = useState(false)
    const navigation = useNavigate()

    const handleOpenMakeAnAppointmentPopup = () => {
        setOpenMakeAnAppointmentPopup(true);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="/"><span>Therapist</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
                            <li className="nav-item active"><a href="/doctors" className="nav-link">Doctors</a></li>
                            {!isLoggedIn('user') ? (
                                <li className="nav-item cta"><button className="nav-link make-an-appointment" onClick={() => navigation('/user-login')}><span>User Login</span></button></li>
                            ) : (
                                <>
                                    <li className="nav-item cta"><button className="nav-link make-an-appointment" onClick={handleOpenMakeAnAppointmentPopup}><span>Make an Appointment</span></button></li>
                                    <li className="nav-item cta"><button className="nav-link make-an-appointment" onClick={() => navigation('/user/dashboard')}><span>Dashboard</span></button></li>
                                </>
                            )}
                            
                        </ul>
                    </div>
                </div>
            </nav>
            <MakeAnAppointment 
                open={openMakeAnAppointmentPopup}
                setOpen={setOpenMakeAnAppointmentPopup}
            />
           
        </>

    )
}
export default Header;