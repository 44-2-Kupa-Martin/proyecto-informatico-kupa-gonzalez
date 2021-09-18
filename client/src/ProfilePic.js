import React from 'react';

function ProfilePic(props) {
    if (props.loggedIn) {
        return (
            <img src={props.pfpSrc} />
        )
    }
    return (
        <img src="guestimg" />
    )
}

export default ProfilePic;