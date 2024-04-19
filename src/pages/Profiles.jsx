// Profile.jsx

import React, { useState } from 'react';
import Entry from '../components/profileCards/Entry';
import initialProfilesData from '../components/profileCards/ProfilesData';

export const Profiles = () => {
  // Initialize state with the initialProfilesData
  const [profilesData, setProfilesData] = useState(initialProfilesData);
  const [formData, setFormData] = useState({ id: '', name: '', imageURL: '', description: '' });
  const [newProfileData, setNewProfileData] = useState({ id: '', name: '', imageURL: '', description: '' });
  const [deleteId, setDeleteId] = useState(''); // State to store the ID for deletion

  // Function to update profile by ID
  const updateProfile = (id, newData) => {
    setProfilesData(prevData =>
      prevData.map(profile =>
        profile.id === id ? { ...profile, ...newData } : profile
      )
    );
  };

  // Function to add new profile
  const addNewProfile = () => {
    setProfilesData(prevData => [...prevData, newProfileData]);
    setNewProfileData({ id: '', name: '', imageURL: '', description: '' }); // Clear form after adding
  };

  // Function to delete profile by ID
  const deleteProfile = () => {
    if (deleteId.trim() !== '') {
      setProfilesData(prevData => prevData.filter(profile => profile.id !== parseInt(deleteId)));
      setDeleteId(''); // Clear input after deletion
    } else {
      alert('Please enter ID to delete.');
    }
  };

  // Handle form submission for updating
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const { id, name, imageURL, description } = formData;
    if (id.trim() !== '' && (name.trim() !== '' || imageURL.trim() !== '' || description.trim() !== '')) {
      const newData = {};
      if (name.trim() !== '') newData.name = name;
      if (imageURL.trim() !== '') newData.imageURL = imageURL;
      if (description.trim() !== '') newData.description = description;
      updateProfile(parseInt(id), newData);
      setFormData({ id: '', name: '', imageURL: '', description: '' }); // Clear form after submission
    } else {
      alert('Please enter ID and at least one field to update.');
    }
  };

  // Handle form submission for adding new profile
  const handleAddSubmit = (e) => {
    e.preventDefault();
    const { id, name, imageURL, description } = newProfileData;
    if (id.trim() !== '' && name.trim() !== '' && imageURL.trim() !== '' && description.trim() !== '') {
      addNewProfile();
    } else {
      alert('Please enter ID, name, imageURL, and description to add a new profile.');
    }
  };

  // Handle input changes for updating
  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle input changes for adding new profile
  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewProfileData(prevState => ({ ...prevState, [name]: value }));
  };

  function createEntry(profile) {
    return (
      <div key={profile.id} className="entry">
        <Entry
          id={profile.id}
          imageURL={profile.imageURL}
          name={profile.name}
          description={profile.description}
        />
        <button onClick={() => setDeleteId(profile.id)}>Delete</button>
      </div>
    );
  }

  return (
    <div className="dictionary" style={{ marginTop: "100px", width: "80%" }}>
      <form onSubmit={handleUpdateSubmit}>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleUpdateChange}
          placeholder="Enter ID"
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleUpdateChange}
          placeholder="Enter New Name"
        />
        <input
          type="text"
          name="imageURL"
          value={formData.imageURL}
          onChange={handleUpdateChange}
          placeholder="Enter New Image URL"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleUpdateChange}
          placeholder="Enter New Description"
        ></textarea>
        <button type="submit">Update Profile</button>
      </form>

      <form onSubmit={handleAddSubmit}>
        <input
          type="text"
          name="id"
          value={newProfileData.id}
          onChange={handleAddChange}
          placeholder="Enter ID for new profile"
        />
        <input
          type="text"
          name="name"
          value={newProfileData.name}
          onChange={handleAddChange}
          placeholder="Enter Name for new profile"
        />
        <input
          type="text"
          name="imageURL"
          value={newProfileData.imageURL}
          onChange={handleAddChange}
          placeholder="Enter Image URL for new profile"
        />
        <textarea
          name="description"
          value={newProfileData.description}
          onChange={handleAddChange}
          placeholder="Enter Description for new profile"
        ></textarea>
        <button type="submit">Add New Profile</button>
      </form>

      <div>
        <input
          type="text"
          value={deleteId}
          onChange={(e) => setDeleteId(e.target.value)}
          placeholder="Enter ID to delete"
        />
        <button onClick={deleteProfile}>Delete Profile</button>
      </div>

      {profilesData.map(createEntry)}
    </div>
  );
}