import { useState, useEffect } from 'react'
import axios from 'axios'

const Profile = (props) => {
    const ProfileID = props.ProfileID
    const h1 = (props.h1 ? props.h1 : 'Profile info');
    const profilePictureFolder = "http://workspace.properpay.net/profile_pictures/";
    const demoImg = 'http://workspace.properpay.net/profile_pictures/profile0.png';
    const age = 0

    const [Profile, setProfile] = useState(false)

    const getProfile = async (ProfileID) => {
        var RequestUrl = "http://workspace.properpay.net/index.php"
        RequestUrl += "?Category=Profiles&Action=ReadProfile";
        
        const theData = {
            profileID: ProfileID
        }

        axios.post(RequestUrl, theData)
            .then(res => {
                setProfile(res.data)
            })
    }

    useEffect(() => {
        if (ProfileID) {
            getProfile(ProfileID)
        }
    }, [])

    return (
        <div className="card-wrapper profile-card">
            <h1>{ h1 }</h1>
            { Profile && 
                <div className="card-content">
                    <span v-if="ProfileData">
                        <img src={(Profile.Profile_ImgSrc ? profilePictureFolder + Profile.Profile_ImgSrc : demoImg)} className="profilePicture" alt="Profile picture" />
                    </span>
                    <p>
                        Name: { Profile.Profile_Name }<br/>
                        Age: { age }<br/>
                        Residence: DK<br/>
                        E-mail: { Profile.Profile_Email }<br/>
                        <small>Profile ID: { Profile.Profile_ID }</small>
                    </p>
                </div>
            }
        </div>
    )
}

export default Profile;