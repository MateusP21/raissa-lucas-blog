import React from 'react';
import './Sidebar.css';

export default ({ title, description,profilePhoto }) => (
  <div className="sidebar">
    <h3 className="sidebar-title">{title}</h3>
    <img src={profilePhoto} alt=""/>
    <p className="sidebar-description">{description}</p>
  </div>
);