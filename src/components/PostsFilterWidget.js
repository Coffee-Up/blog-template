import * as React from "react";
import "../styles/PostsFilterWidget.css";
import { graphql, useStaticQuery } from "gatsby";

import { PostCard } from ".";
import { simplifyDateObject } from "../utils/helpersDate";

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
              creationDate
              path
              title
              summary
              heading_picture_squared {
                childImageSharp {
                  gatsbyImageData(
                    width: 100
                    placeholder: NONE
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
      <h3>Here are some posts I have writed</h3>
      <ul>
        {posts.map(({ node }) => {
          const {
            title,
            summary,
            path,
            heading_picture_squared,
            creationDate,
          } = node.frontmatter;

          return (
            <>
              <PostCard
                key={node.id}
                path={path}
                creationDate={simplifyDateObject(creationDate)}
                title={title}
                summary={summary}
                img={heading_picture_squared}
              />
            </>
          );
        })}
      </ul>
    </div>
  );
}
