"use client"; // Add this line for client-side rendering
import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';

const page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/viewBlog");
      const result = await res.json();
      setData(result.data);
    };
    fetchData();
  }, []); // Add an empty dependency array
  console.log("my Data is::::",data);
  

  return (
    <div className='p-24'>
      <center>
        <h1 className='py-3 text-3xl  '>Our Blogs</h1>
      </center>
      <div className='grid grid-cols-3 gap-y-[10vh]'>
        {data.map(({_id,image,travelType,authorName,summary,title}) => (
          <BlogCard key={_id} props={{image,travelType,authorName,summary,title}} /> // Pass blog data as a prop
        ))}
      </div>
    </div>
  );
};

export default page;