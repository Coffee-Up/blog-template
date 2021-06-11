import * as React from "react";
import "../styles/PostsFilterWidget.css";
import { graphql, useStaticQuery } from "gatsby";

import { PostCard } from ".";
import { GetRootFolderName } from "../utils/helpersFunctions";

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

          const { slug, id } = node;

          return (
            <div key={id + "random"}>
              <PostCard
                mainTag={GetRootFolderName(slug)}
                keyId={id}
                path={path}
                creationDate={creationDate}
                title={title}
                summary={summary}
                img={heading_picture_squared}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
