import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { RichText } from "prismic-reactjs";
import { v4 as uuidv4 } from "uuid";
import "../styles/NewsPanel.css";

const NewsPanel = () => {
  const data = useStaticQuery(graphql`
    query NewsPanelQuery {
      allPrismicArticle(limit: 4) {
        edges {
          node {
            id
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
                      alt
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
        const titre = articleData.data.body[0].primary.titre;
        const resume = articleData.data.body[0].primary.resume;
        const tags = articleData.tags;
        const lastPublicationDate = articleData.last_publication_date;
        const articleBannerImage = getImage(
          articleData.data.body[0].primary.image.gatsbyImageData
        );
        const alt = articleData.data.body[0].primary.image.alt;

        return (
          <div key={uuidv4()}>
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
                        <span key={uuidv4()} className="news-panel-tag">
                          {tag}
                        </span>
                      ))}
                      <p>{lastPublicationDate}</p>
                    </div>
                  </div>
                  <GatsbyImage
                    className="news-panel-image"
                    draggable={false}
                    image={articleBannerImage}
                    alt={alt}
                  />
                </article>
              </section>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NewsPanel;
