import * as React from "react";
import "../styles/PostsFilterWidget.css";
import { graphql, useStaticQuery } from "gatsby";

import { PostCard } from "../components";

export default function PostsFilterWidget() {
  const data = useStaticQuery(graphql`
    query NonPageQuery {
      allMdx {
        edges {
          node {
            id
            slug
            timeToRead
            frontmatter {
              path
              title
              date
              summary
              heading_picture_squared {
                childImageSharp {
                  gatsbyImageData(
                    width: 100
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  const { edges: posts } = data.allMdx;

  return (
    <div id="posts-filter-widget-container">
      <header>
        <h3 id="posts-filter-widget-title">Posts Filter</h3>
      </header>
      <ul id="post-filter-ul">
        {posts.map(({ node }) => {
          const { title, summary, path, heading_picture_squared, id } =
            node.frontmatter;

          return (
            <li className="g-hover-animation-item" id="post-li" key={node.id}>
              <PostCard
                path={path}
                id={id}
                title={title}
                summary={summary}
                img={heading_picture_squared}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
