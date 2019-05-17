import React from 'react';
import moment from 'moment';
import 'moment/locale/id';

const Card = ({
  image,
  title,
  author,
  desc,
  published,
  url }) => {
  return (
    <div className="card mt-5">
      <a href={url}>
        <img
          src={image}
          alt={title}
          className="card-img-top"
          style={{
            height: '300px',
            objectFit: 'cover'
          }}
        />
      </a>
      <div className="card-body">
        <a href={url}>
          <h3 className="card-title">{title}</h3>
        </a>
        <h5 className="card-subtitle text-muted mt-3 mb-4">{author}</h5>
        <p className="card-text">{desc}</p>
        <small className="text-muted">{moment(published).fromNow()}</small>
      </div>
    </div>
  );
}
 
export default Card;