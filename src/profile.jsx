import { useState, useEffect } from 'react';
import './profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const Profile = (props) => {
    const [expansion, setExpansion] = useState(true);

    useEffect(() => {
        if (expansion) {
            const timer = setTimeout(() => {
                setExpansion(false); // auto-collapse after 5s
            }, 5000); // 5000ms = 5 seconds

            return () => clearTimeout(timer); // cleanup on unmount or re-trigger
        }
    }, [expansion]);

    return (
        <>
            <div className={`profilebag ${expansion ? "expanded" : ""}`} onClick={() => setExpansion(!expansion)}>
                <FontAwesomeIcon icon={faCircleUser} size='2xl' className='profileIcon' />

                <div className={`text-info-profile ${expansion ? "expanded text-show" : "text-shrink"}`}>
                    <p>@{props.username}</p>
                    <p>{props.email}</p>
                </div>
            </div>
        </>
    );
};

export default Profile;
