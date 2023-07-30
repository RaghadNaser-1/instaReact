import React from 'react';

const Stories = () => {
  // Dummy data for stories
  const stories = [
    {
      id: 1,
      username: 'Taqwa',
      profileImage: 'https://img.freepik.com/premium-vector/avatar-profile-vector-illustrations-website-social-networks-user-profile-icon_495897-224.jpg',
    },
    {
      id: 2,
      username: 'Ahmad',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/4202/4202841.png',
    },
    {
        id: 3,
        username: 'Hanan',
        profileImage: 'https://img.freepik.com/premium-vector/avatar-profile-vector-illustrations-website-social-networks-user-profile-icon_495897-226.jpg',
      },
    {
        id: 4,
        username: 'Khaled',
        profileImage: 'https://cdn-icons-png.flaticon.com/512/4202/4202845.png',
      },
      {
        id: 5,
        username: 'Sara',
        profileImage: 'https://cdn-icons-png.flaticon.com/512/4202/4202842.png',
      },
      {
        id: 6,
        username: 'Faris',
        profileImage: 'https://www.shareicon.net/data/512x512/2016/05/24/769983_man_512x512.png',
      },
      ];

  return (
    <div className="stories">
      {stories.map(story => (
        <div key={story.id} className="story">
          <img src={story.profileImage} alt={story.username} />
          <span>{story.username}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
