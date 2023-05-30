import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetSeminar = () => {
    const [seminar, setSeminar] = useState([]);

    useEffect(() => {
        fetchSeminarPosts();
    }, []);

    const fetchSeminarPosts = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/seminar');
            setSeminar(response.data);
        } catch (error) {
            console.error('Error fetching seminar posts:', error);
        }
    };

    return (
        <div>
            <h2>Join for Seminar</h2>
            {seminar.map((post) => (
                <div className="seminar" key={post._id}>
                    {post.picture && (
                        <img src={`http://localhost:4000/${post.picture.path}`} alt="Seminar Post" />
                    )}
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};


export default GetSeminar;

