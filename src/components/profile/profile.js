import React, { useContext } from 'react';
import {UserContext} from '../../contexts/userContext'

function Profile() {
    const {Login} = useContext(UserContext);

    return (
        <div>
            {Login? 'dados do usuario' : 'faça seu login para ter acesso as informações'}
        </div>
    )
}

export default Profile;