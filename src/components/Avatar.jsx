import React from 'react';

export const Avatar = props => {
  return <img src={props.src} className="img-thumbnail" alt={props.alt} />;
};
