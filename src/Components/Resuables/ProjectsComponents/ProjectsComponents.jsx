import React from 'react'
import { Link } from 'react-router-dom';

import './ProjectsComponents.css'
function Projects({data}) {
  console.log(data);
  return (
    <div className= "project_group">

{data.map((info, index) => (
  <Link to={{ pathname: info.link}} target="_blank"  key={index}>
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
))}
   

      </div>
  )
}

export default Projects






    
        // {itemData.map((item) => (
        //   <ImageListItem key={item.img}>
        //     <img src={item.img} alt={item.title} />
        //     <ImageListItemBar
        //       title={item.title}
        //       subtitle={<span>by: {item.author}</span>}
        //       }
           