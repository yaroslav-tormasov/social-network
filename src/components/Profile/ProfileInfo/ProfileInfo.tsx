import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../Redux/profile-reducer";


type ProfileInfoType = {
    profile: ProfileType
}


const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img
                    src='data:image/jpeg;base64,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'/>
            </div>
            <div className={s.descriptionBlock}>
                {/*<img src={props.profile.photos.large? props.profile.photos.large : ""} />*/}
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;