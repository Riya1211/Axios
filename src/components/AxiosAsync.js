import React, {useEffect, useState } from 'react';
import axios from 'axios';

function AxiosAsync() {

    const [posts, setpost] = useState([]);

    useEffect(() => {
        async function getAnswer() {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setpost(res.data);
        };
        getAnswer();
    }, []);
    return (
        <div>
           <ul>
           {posts.map(post => <li key={post.id}> {post.title} </li>)}

           </ul> 

        </div>

    );
}

export default AxiosAsync