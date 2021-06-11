import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../styles/PostsList.css";

import { PostCard } from ".";

const PostsList = () => {
  const data = useStaticQuery(graphql`
    query NonPageQuery {
      allMdx {
        edges {
          node {
            id
            slug
            timeToRead
            frontmatter {
              creationDate(formatString: "MMMM, Do, YYYY")
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
    <div id="posts-list-container">
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

          const { slug, id } = node;

          return (
            <li key={id + "random"}>
              <PostCard
                mainTag={slug.split("/")[0]}
                keyId={id}
                path={path}
                creationDate={creationDate}
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
};

export default PostsList;
