import React, { useState } from 'react';

export default function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false)

  const handleButtonClick = () => {
    setIsFollowing(!isFollowing)
    // Optionally, make an API call here to update the follow status on the server
  }

  return (
    <button onClick={handleButtonClick} style={buttonStyle}>
      {isFollowing ? 'Following' : 'Follow'}
    </button>
  )
}

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#1DA1F2', // Twitter-like blue color
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
}


