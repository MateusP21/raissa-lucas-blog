import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import _ from "lodash";
import Layout from "../components/Layout";
import './post.css'
export default class Post extends Component {
  render() {
    const { data } = this.props;
    const { title, tags, date,imagePost } = data.markdownRemark.frontmatter;
    const { html } = data.markdownRemark;
    return (
      <Layout>
        <div className="post">
          <img src={imagePost} alt=""/>
          <h2 className="title">{title}</h2>
          <div className="post-info">
            <p>{tags.map(tag => <Link style={{ color: '#000', marginRight: '10px' }} key={tag} to={`/tag/${_.kebabCase(tag)}`}>{tag}</Link>)}</p>
            <p>{date}</p>
          </div>
         
          <div className="content">
            <p dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </Layout>
    )
  }
};

export const pageQuery = graphql`
  query PostPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } } ) {
      html
      timeToRead
      excerpt
      frontmatter {
        imagePost
        title
        tags
        date(formatString: "MMMM DD, YYYY"
          locale: "pt-BR"
        )
        description
        author
      }
      fields {
        slug
      }
    }
  }
`;