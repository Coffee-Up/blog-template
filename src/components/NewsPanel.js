import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { RichText } from "prismic-reactjs";
import "../styles/NewsPanel.css";

const NewsPanel = ({}) => {
  const data = useStaticQuery(graphql`
    query NewsPanelQuery {
      allPrismicArticle(limit: 5) {
        edges {
          node {
            uid
            last_publication_date(formatString: "DD/MM/YYYY")
            tags
            data {
              body {
                ... on PrismicArticleDataBodyBanner {
                  primary {
                    titre {
                      raw
                    }
                    resume {
                      raw
                    }
                    image {
                      gatsbyImageData(srcSetMaxWidth: 100)
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const articlesData = data.allPrismicArticle.edges;

  return (
    <div id="news-container">
      <h2>News</h2>
      {articlesData.map(({ node: articleData }) => {
        console.log(articleData);
        const titre = articleData.data.body[0].primary.titre;
        const resume = articleData.data.body[0].primary.resume;
        const tags = articleData.tags;
        const lastPublicationDate = articleData.last_publication_date;
        const articleBannerImage = getImage(
          articleData.data.body[0].primary.image.gatsbyImageData
        );

        return (
          <Link to={`post/${articleData.uid}`}>
            <section>
              <article className="news-panel-article-container">
                <div>
                  <header>
                    <RichText render={titre.raw} />
                    <RichText render={resume.raw} />
                  </header>
                  <div className="news-panel-text">
                    {tags.map((tag) => (
                      <span className="news-panel-tag">{tag}</span>
                    ))}
                    <p>{lastPublicationDate}</p>
                  </div>
                </div>
                <GatsbyImage
                  className="news-panel-image"
                  draggable={false}
                  image={articleBannerImage}
                  alt=""
                />
              </article>
            </section>
          </Link>
        );
      })}
    </div>
  );
};

export default NewsPanel;
