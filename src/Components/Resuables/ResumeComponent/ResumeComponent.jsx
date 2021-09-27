import React from 'react'
// import { Link } from 'react-router-dom';

import './ResumeComponent.css'
function ResumeComponent({data}) {


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
   <button > here</button>
      </div>
  )
}

export default ResumeComponent






    
        // {itemData.map((item) => (
        //   <ImageListItem key={item.img}>
        //     <img src={item.img} alt={item.title} />
        //     <ImageListItemBar
        //       title={item.title}
        //       subtitle={<span>by: {item.author}</span>}
        //       }
           