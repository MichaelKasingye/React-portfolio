import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import './BlogComponent.css'
function BlogComponent({data}) {
const [info, setInfo] = useState();
const [errorMessage, seteErrorMessage] = useState();



  // useEffect(() => {
  //   // fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@michaelkasingye')
  //   // .then(resp => resp.json())
  //   // .then(blogs => setInfo({blogs}))
  //   // .then(blogs => 
  //   //   // setInfo(blogs)
  //   //   setInfo(blogs.items))
    
  //   axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@michaelkasingye')
  //   .then(response => setInfo(response.data))
  //   .catch(error => {
  //     seteErrorMessage( error.message );
  //     console.error('There was an error!', error);
  //   });
  //   console.log(typeof info !="undefined"? info : "no data");
  
  // }, []);



  console.log(data);
  return (
    <div className= "Resume">
{/* 
{data.map(info => (
  <Link to={{ pathname: info.link}} target="_blank"  key={info.img}>
   <div className="project_card" key={info.img}>
      <div className="project_image">
      <img src={info.img} alt={info.title} />
      </div>
      <div className="project_description">
      <div className="inside">
        <p> <span>{info.title}</span> <br/>
        <span>{info.description}</span> </p>
      </div>
      </div>
    </div>
    </Link>
))} */}
   <h3>Click to view Resume from Google drive</h3>

      </div>
  )
}

export default BlogComponent






    
        // {itemData.map((item) => (
        //   <ImageListItem key={item.img}>
        //     <img src={item.img} alt={item.title} />
        //     <ImageListItemBar
        //       title={item.title}
        //       subtitle={<span>by: {item.author}</span>}
        //       }
           