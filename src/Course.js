import React from 'react';

// write the "ffc" shortly
function Course({title, description, img, content_img}) {    
    /*    
    const title = props.title;
    const description = props.description;
    const img = props.img; 
    */
    // const {title, description, img} = props;
    //console.log(props);
    return ( 
      <div>   { /* Ana Kapsayıcı div */ } 
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={img} alt={content_img} ></img>
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{title}</p>
              </div>
            </div>
            <div className="content">
              {description} 
              <br/>
            </div>
          </div>
        </div>
      </div> 
    );
}

export default Course;


/*
//*write "rafc"  
export const Course = () => {
  return (
    <div>Course</div>
  )
  
}
 
*/

