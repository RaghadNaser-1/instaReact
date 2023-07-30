import React from 'react';

const Feed = () => {
  // Dummy data for feed posts
  const feedPosts = [
    {
      id: 1,
      username: 'Taqwa',
      profileImage: 'https://img.freepik.com/premium-vector/avatar-profile-vector-illustrations-website-social-networks-user-profile-icon_495897-224.jpg',
      postImage: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg',
      caption: 'This is an awesome post!',
      comments: [
        {
          id: 1,
          username: 'Raghad',
          text: 'Great picture!',
        },
        {
          id: 2,
          username: 'Islam',
          text: 'Love it!',
        },
      ],
    },
    {
      id: 2,
      username: 'Ahmad',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/4202/4202841.png',
      postImage: 'https://ideas.ted.com/wp-content/uploads/sites/3/2022/07/FINAL_Coffee.jpg?w=750',
      caption: 'Having a great time!',
      comments: [
        {
          id: 3,
          username: 'Ali',
          text: 'Looks amazing!',
        },
      ],
    },
    {
      id: 3,
      username: 'Hanan',
        profileImage: 'https://img.freepik.com/premium-vector/avatar-profile-vector-illustrations-website-social-networks-user-profile-icon_495897-226.jpg',
      postImage: 'https://rosemaryandporkbelly.co.uk/wp-content/uploads/2022/12/Sunset-at-Blue-Waters-Resort-Antigua.jpg',
      caption: 'Having a great time!',
      comments: [
        {
          id: 4,
          username: 'Mai',
          text: 'Looks amazing!',
        },
        {
          id: 4,
          username: 'Mari',
          text: 'Enjoy your holiday!',
        },
      ],
    },  ];

  return (
    <div className="feed">
      {feedPosts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-header">
            <img src={post.profileImage} alt={post.username} />
            <span>{post.username}</span>
          </div>
          <img src={post.postImage} alt={post.caption} className="post-image" />
          <div><i class="bi bi-heart"></i> <i class="bi bi-send"></i></div>
          <div className="post-comments">
  <span className="caption">{post.caption}</span>
  {post.comments.map((comment) => (
    <div key={comment.id} className="comment">
      <div>
      <span className="comment-username">{comment.username}</span>
      <span className="comment-text">{comment.text}</span>
      </div>
      <div><i class="bi bi-heart"></i></div>
    </div>
  ))}
  <div className="add-comment">
    <input
      type="text"
      placeholder="Add a comment..."
      // Add appropriate event handlers to handle comment input
    />
    <button>Add</button>
  </div>
</div>

        </div>
      ))}
    </div>
  );
};

export default Feed;
