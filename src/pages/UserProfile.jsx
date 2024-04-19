/*
import MapContainer from './mapcontainer';
import React from 'react';
import { useParams } from 'react-router-dom';

export const UserProfile = () => {
    const { userId } = useParams();
    return (
        <div>
            <p>User ID: {userId}</p>
        </div>
    )
};*/
import React from 'react';
import MapContainer from './mapcontainer';
import { useParams } from 'react-router-dom';
import ProfilesData from '../components/profileCards/ProfilesData';
export const UserProfile = () => {
    const { userId } = useParams();


    // Find the profile with the matching user ID
    const userProfile = ProfilesData.find(profile => profile.id === parseInt(userId));

    return (
        <div>
            <p>User ID: {userId}</p>
            {userProfile && (
                <div>
                    <h2>{userProfile.name}</h2>
                    <p>{userProfile.address}</p>
                    <MapContainer profiles={[userProfile]} />
                </div>
            )}
        </div>
    );
};
