import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {

    const [Posts, setPosts] = useState([
        {
            _id: 1,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4WCCNTi1ykLIIEAE9eEZr-QpY7N6yXunPP-B-qYkrXQdGNVlBeM_8bmI&s',
            caption: 'This is a sample caption for the first post.'
        }

    ])


    useEffect(()=>{
        axios.get('http://localhost:3000/posts')
            .then((res)=>{
                setPosts(res.data.posts)
            })
    
    
    
        
        
    },[])








  return (
   <section className="feed-section">


        {Posts.length > 0 ? (
            Posts.map((post) => (
                <div key={post._id} className="post-card">
                    <img src={post.image} alt={post.caption} />
                    <p>{post.caption}</p>
                </div>
            ))
        ) : (
            <p>No posts available.</p>
        )}


    </section>
  )
}

export default Feed