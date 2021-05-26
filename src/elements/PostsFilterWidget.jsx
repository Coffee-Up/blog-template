import * as React from "react";
import "../styles/PostsFilterWidget.css";
import { graphql, useStaticQuery } from "gatsby";

import { PostCard } from "../elements";

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
              resume
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
    <div>
      <header>
        <h3>Posts Filter</h3>
      </header>
      <ul>
        {posts.map(({ node }) => {
          const { title, resume, path, heading_picture_squared, id } =
            node.frontmatter;

          return (
            <li key={node.id}>
              <PostCard
                path={path}
                id={id}
                title={title}
                resume={resume}
                picture={heading_picture_squared}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
