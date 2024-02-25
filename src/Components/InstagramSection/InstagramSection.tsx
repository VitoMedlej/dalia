"use client"
import React, { useEffect, useState } from 'react';

const InstagramPosts = () => {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    fetch('https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,caption,timestamp&access_token=YOUR_ACCESS_TOKEN')
      .then(response => response.json())
      .then(data => setPosts(data.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      {posts && posts?.map((post:any) => (
        <div key={post?.id}>
          <img src={post?.media_url} alt={post?.caption} />
          <p>{post?.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default InstagramPosts;
