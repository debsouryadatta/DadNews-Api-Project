import React from "react";

const NewsItem = (props)=>{
    let { title, description, imageUrl, newsUrl,author,date,source } = props;
    return (
      <div className="my-3">
        <div className="card" >
          <div style={{display:'flex' , justifyContent:'flex-end' , position: 'absolute' , right: '0' }}>
        <span className="badge rounded-pill bg-danger" >{source}</span>
          </div>
          <img
            src={imageUrl?imageUrl : 'https://cdn.thewire.in/wp-content/uploads/2022/07/12214712/2022-07-12T153126Z_1_LYNXMPEI6B0OR_RTROPTP_4_SPACE-EXPLORATION-TELESCOPE.jpg'}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
