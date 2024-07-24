import React from 'react';
import { useState, useEffect } from 'react';
const Landing = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('/api/v1/articles')
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [])
    return (
      <>
        <div className="landing">
          Articles
          { data.map(({ title, body }) => <div>{ title }{ body }</div>) }
        </div>
      </>
    )
}

export default Landing;