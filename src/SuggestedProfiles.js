import React from 'react';

const SuggestedProfiles = () => {
  // Dummy data for suggested profiles
  const suggestedProfiles = [
    {
      id: 1,
      username: 'Maha',
      profileImage: 'https://img.freepik.com/premium-vector/avatar-profile-vector-illustrations-website-social-networks-user-profile-icon_495897-229.jpg',
    },
    {
      id: 2,
      username: 'Majed',
      profileImage: 'https://img.freepik.com/premium-vector/avatar-profile-vector-illustrations-website-social-networks-user-profile-icon_495897-225.jpg',
    },
    {
        id: 3,
        username: 'Hanen',
        profileImage: 'https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_girl_female_woman_profile_smiley_happy_people_icon_181663.png',
      },
      {
        id: 4,
        username: 'Sami',
        profileImage: 'https://img.freepik.com/premium-vector/avatar-profile-vector-illustrations-website-social-networks-user-profile-icon_495897-223.jpg?w=360',
      },
      {
        id: 5,
        username: 'Yara',
        profileImage: 'https://static.vecteezy.com/ti/vetor-gratis/p3/4773704-rosto-de-uma-garota-com-um-sorriso-lindo-um-avatar-feminino-para-um-site-e-rede-social-vetor.jpg',
      },
      {
        id: 6,
        username: 'Rami',
        profileImage: 'https://img.freepik.com/premium-vector/cartoon-young-man-icon_24908-23727.jpg',
      },
    ];

  const handleFollow = (id) => {
    // Implement follow functionality here
    console.log(`Followed profile with ID: ${id}`);
  };

  return (
    <div className="suggested-profiles">
      <h3>Suggested Profiles</h3>
      <div className="profile-list">
        {suggestedProfiles.map((profile) => (
          <div key={profile.id} className="profile">
            <div className="profileName"> 
            <img src={profile.profileImage} alt={profile.username} />
            <span>{profile.username}</span>
            </div>
            <button onClick={() => handleFollow(profile.id)}>Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedProfiles;
