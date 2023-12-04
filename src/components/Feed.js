// import React, { useState, useEffect } from 'react';
import axios from 'axios';



import React, { useState, useEffect } from 'react';
import { getPosts } from '../services/userService';
import './Feed.css';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [otherPeoplePosts, setOtherPeoplePosts] = useState([]); // New state for other people's posts
    const [newPostContent, setNewPostContent] = useState('');
    const [editingPost, setEditingPost] = useState(null);
    const [editContent, setEditContent] = useState('');

    // Fetch user's posts
    useEffect(() => {
        let response;
        // try {
        //     response = axios.get('/post/user/{userIds}', {
        //         params: {
        //             "page": 0,
        //             "size": 1,
        //             "sort": [
        //                 "string"
        //             ]
        //         }
        //     });
        //     console.log('API Response:', response);
        // } catch (error) {
        //     console.error('Error fetching other user\'s posts:', error);
        // }

        response = {
            "postDTOs": [
                {
                    "userId": 0,
                    "postId": 0,
                    "postText": "string",
                    "privacy": "Public",
                    "attachmentDTOs": [
                        {
                            "attachmentId": 0,
                            "attachmentType": "Image",
                            "url": "string",
                            "createdAt": "2023-12-03T07:40:47.580Z",
                            "updatedAt": "2023-12-03T07:40:47.580Z",
                            "deletedAt": "2023-12-03T07:40:47.580Z"
                        }
                    ],
                    "totalNoOfComments": 0,
                    "totalNoOfReactions": 0,
                    "createdAt": "2023-12-03T07:40:47.580Z",
                    "updatedAt": "2023-12-03T07:40:47.580Z",
                    "deletedAt": "2023-12-03T07:40:47.580Z"
                },
                {
                    "userId": 1,
                    "postId": 1,
                    "postText": "string",
                    "privacy": "Public",
                    "attachmentDTOs": [
                        {
                            "attachmentId": 0,
                            "attachmentType": "Image",
                            "url": "string",
                            "createdAt": "2023-12-03T07:40:47.580Z",
                            "updatedAt": "2023-12-03T07:40:47.580Z",
                            "deletedAt": "2023-12-03T07:40:47.580Z"
                        }
                    ],
                    "totalNoOfComments": 0,
                    "totalNoOfReactions": 0,
                    "createdAt": "2023-12-03T07:40:47.580Z",
                    "updatedAt": "2023-12-03T07:40:47.580Z",
                    "deletedAt": "2023-12-03T07:40:47.580Z"
                }
            ],
            "currentPage": 0,
            "totalItems": 0,
            "totalPages": 0,
            "pageSize": 0
        };

        const fetchedPosts = response.postDTOs.map(post => {
            return {
                id: post.postId,
                content: post.postText,
                userId: post.userId,
                totalNoOfComments: post.totalNoOfComments,
                totalNoOfReactions: post.totalNoOfReactions
            }
        });

        console.log("fetchedPosts", fetchedPosts);
        setPosts(fetchedPosts);


    }, []);






    // Fetch other people's posts
    useEffect(() => {
        let response;
        // try {
        //     response = axios.get('/post/by-postIds', {
        //         params: {
        //             page: 0,
        //             size: 1,
        //             sort: ['string']
        //         }
        //     });
        //     console.log('API Response:', response);
        // } catch (error) {
        //     console.error('Error fetching other people\'s posts:', error);
        // }


        // comment below after api works

        response = {
            "postDTOs": [
                {
                    "userId": 0,
                    "postId": 3,
                    "postText": "string",
                    "privacy": "Public",
                    "attachmentDTOs": [
                        {
                            "attachmentId": 0,
                            "attachmentType": "Image",
                            "url": "string",
                            "createdAt": "2023-12-03T07:14:26.995Z",
                            "updatedAt": "2023-12-03T07:14:26.995Z",
                            "deletedAt": "2023-12-03T07:14:26.995Z"
                        }
                    ],
                    "totalNoOfComments": 0,
                    "totalNoOfReactions": 0,
                    "createdAt": "2023-12-03T07:14:26.995Z",
                    "updatedAt": "2023-12-03T07:14:26.995Z",
                    "deletedAt": "2023-12-03T07:14:26.995Z"
                },
                {
                    "userId": 1,
                    "postId": 4,
                    "postText": "blah blah blah",
                    "privacy": "Public",
                    "attachmentDTOs": [
                        {
                            "attachmentId": 0,
                            "attachmentType": "Image",
                            "url": "string",
                            "createdAt": "2023-12-03T07:14:26.995Z",
                            "updatedAt": "2023-12-03T07:14:26.995Z",
                            "deletedAt": "2023-12-03T07:14:26.995Z"
                        }
                    ],
                    "totalNoOfComments": 0,
                    "totalNoOfReactions": 0,
                    "createdAt": "2023-12-03T07:14:26.995Z",
                    "updatedAt": "2023-12-03T07:14:26.995Z",
                    "deletedAt": "2023-12-03T07:14:26.995Z"
                }
            ],
            "currentPage": 0,
            "totalItems": 0,
            "totalPages": 0,
            "pageSize": 0
        };

        // comment above after api works



        const posts = response.postDTOs.map(post => {
            return {
                id: post.postId,
                content: post.postText,
                userId: post.userId,
                totalNoOfComments: post.totalNoOfComments,
                totalNoOfReactions: post.totalNoOfReactions
            }
        });

        console.log("posts", posts);


        // { id: 3, content: 'First post from user2', author: 'user2' },
        // { id: 4, content: 'Second post from user3', author: 'user3' },
        // ... other people's posts
        // ];
        setOtherPeoplePosts(posts);
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

    const handleReactions = (postId) => {
        setPosts(prevPosts => prevPosts.map(post =>
            post.id === postId ? { ...post, totalNoOfReactions: post.totalNoOfReactions + 1 } : post
        ));
    };

    const handleReactionsOfOther = (postId) => {
        setOtherPeoplePosts(prevPosts => prevPosts.map(post =>
            post.id === postId ? { ...post, totalNoOfReactions: post.totalNoOfReactions + 1 } : post
        ));
    };

    

    return (
        <div className="feed-container">
            <h1 className="header-title">Express your thoughts!</h1>
            <div className="new-post-container">
                <input
                    className="new-post-input"
                    type="text"
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    placeholder="Write a new post"
                />
                <button className="post-button" onClick={handleCreate}>Post</button>
            </div>

            <h1 className="feed-title">My Feed</h1>
            <ul className="post-list">
                {otherPeoplePosts.map(post => (
                    <li key={post.id} className="post-item">
                        <p className='user.Id'>{post.userId}
                        <button className="follow-button">Follow</button></p>
                        <p className="post-content">{post.content} </p>
                                <button className="comment-button">💭 {post.totalNoOfComments || 0}</button>
                                <button className="like-button" onClick={() => handleReactionsOfOther(post.id)}>👍 {post.totalNoOfReactions || 0}</button>
                        
                    </li>
                ))}
                {posts.map(post => (
                    <li key={post.id} className="post-item">
                        {editingPost === post.id ? (
                            <div className="edit-post-container">
                                <input
                                    className="edit-post-input"
                                    type="text"
                                    value={editContent}
                                    onChange={(e) => setEditContent(e.target.value)}
                                />
                                <button className="update-button" onClick={() => handleUpdate(post.id)}>Update</button>
                            </div>
                        ) : (
                            <div className="post-actions">
                                <p className="post-content">{post.content}</p>
                                <div className="post-actions">
                                <button className="comment-button">💭 {post.totalNoOfComments || 0}</button>
                                <button className="like-button" onClick={() => handleReactions(post.id)}>👍 {post.totalNoOfReactions || 0}</button>
                                <button className="edit-button" onClick={() => { setEditingPost(post.id); setEditContent(post.content); }}>Edit</button>
                                <button className="delete-button" onClick={() => handleDelete(post.id)}>Delete</button>
                            </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>


    );

};

export default Feed;
