import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/v1/articles')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [])

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h2 className="blog-title">Blog</h2>
        <div className="all-articles">
          {data.map(({ id, title, body }) => <div key={id}>{ title }{ body }</div>)}
        </div>
      </div>
    </div>
  )
}

export default Blog;