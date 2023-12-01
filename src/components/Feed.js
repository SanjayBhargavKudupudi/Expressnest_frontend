import React, { useState, useEffect } from 'react';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [otherPeoplePosts, setOtherPeoplePosts] = useState([]); // New state for other people's posts
    const [newPostContent, setNewPostContent] = useState('');
    const [editingPost, setEditingPost] = useState(null);
    const [editContent, setEditContent] = useState('');

    // Fetch user's posts
    useEffect(() => {
        const fetchedPosts = [
            { id: 1, content: 'First post', author: 'me' },
            { id: 2, content: 'Second post', author: 'me' },
            // ... other user's posts
        ];
        setPosts(fetchedPosts);
    }, []);

    // Fetch other people's posts
    useEffect(() => {
        const fetchedOtherPeoplePosts = [
            { id: 3, content: 'First post from user2', author: 'user2' },
            { id: 4, content: 'Second post from user3', author: 'user3' },
            // ... other people's posts
        ];
        setOtherPeoplePosts(fetchedOtherPeoplePosts);
    }, []);

    // Remaining CRUD operations for the user's posts...

    const handleCreate = () => {
        const newPost = { id: Date.now(), content: newPostContent };
        setPosts(prevPosts => [...prevPosts, newPost]);
        setNewPostContent('');
    };

    // Update a post
    const handleUpdate = (postId) => {
        setPosts(prevPosts => prevPosts.map(post => 
            post.id === postId ? { ...post, content: editContent } : post
        ));
        setEditingPost(null);
        setEditContent('');
    };

    // Delete a post
    const handleDelete = (postId) => {
        setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
    };

    return (
        <div>
            <h1>Express your thoughts!</h1>
            <div>
                <input 
                    type="text" 
                    value={newPostContent} 
                    onChange={(e) => setNewPostContent(e.target.value)} 
                    placeholder="Write a new post" 
                />
                <button onClick={handleCreate}>Post</button>
            </div>
         


            <h1>My Feed</h1>
            <ul>
                {otherPeoplePosts.map(post => (
                    <li key={post.id}>
                        <p>{post.content} - Posted by {post.author}</p>
                    </li>
                ))}
                {posts.map(post => (
                    <li key={post.id}>
                        {editingPost === post.id ? (
                            <>
                                <input 
                                    type="text" 
                                    value={editContent} 
                                    onChange={(e) => setEditContent(e.target.value)} 
                                />
                                <button onClick={() => handleUpdate(post.id)}>Update</button>
                            </>
                        ) : (
                            <>
                                {post.content}
                                <button onClick={() => { setEditingPost(post.id); setEditContent(post.content); }}>Edit</button>
                                <button onClick={() => handleDelete(post.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        
        </div>
    );
};

export default Feed;
