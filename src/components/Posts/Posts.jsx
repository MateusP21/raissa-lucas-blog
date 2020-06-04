import React from 'react';
import { Link } from 'gatsby';
import './Posts.css';

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const posts = (
    edges.map(({ node }) => (
      <div key={node.fields.slug} className="post">
        <div className="post-header">
          {
            node.frontmatter.tags.map(t => <span> {t} </span>)
          }
        <Link to={node.fields.slug} className="post-title"><h2>{node.frontmatter.title}</h2></Link>

        </div>
          <img src={node.frontmatter.imagePost} alt=""/>
          <div className="post-information">
            <p className="post-date">{node.frontmatter.date}</p>
            <p className="author"> by {node.frontmatter.author}</p>
          </div>
          

          <p className="description">{node.frontmatter.description}</p>
       
      </div>
    ))
  );
  return (
    <div className="posts">
      {posts}
    </div>
  )
}