import Entry from '../components/profileCards/Entry'; // Assuming Entry component is defined here
import ProfilesData from '../components/profileCards/ProfilesData'; 

export const Profiles2 = () => {
    function createEntry(profile) {
        return (
          <Entry
            key={profile.id}
            id={profile.id}
            imageURL={profile.imageURL}
            name={profile.name}
            description={profile.description}
          />
        );
      }

    return (
        <div className="dictionary" style={{marginTop:"100px",width:"80%"}}>
            {ProfilesData.map(createEntry)}
        </div>
    )
}