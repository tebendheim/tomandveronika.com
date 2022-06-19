import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';



const AboutText = () => {

    const file_name = 'aboutText.md';
    const [post, setPost] = useState('');

    useEffect(() => {
        import(`./markdown/${file_name}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });

    return (
        <div className="container">
            <ReactMarkdown>{post}</ReactMarkdown>
        </div>
    );
}

export default AboutText
