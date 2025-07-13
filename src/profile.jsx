// import { useState } from "react";
import { useState } from 'react';
import './profile.css';
import Logo from './assets/react.svg';

const Profile = () => {
    const [expansion, setExpansion] = useState(false);
    // useEffect(() => {
    //     alert("Clicked on the profile to expand it");
    // }, [expansion]); // run whenever "expansion" changes

    return (
        <>
            <div className={`profilebag ${expansion ? "expanded" : ""}`} onClick={() => setExpansion(!expansion)}>
                <img src={Logo} alt="Logo" className="profile-logo" />
                <div className="text-info-profile">
                    <p>@johndoe</p>
                    <p>johndoe@example.com</p>
                </div>
            </div>
        </>
    );
};

export default Profile;
