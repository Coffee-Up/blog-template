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
            data {
              date_evenement(formatString: "DD  MMMM, YYYY", locale: "fr")
              resume {
                raw
              }
              titre_principal_article
              image_principale {
                alt
                gatsbyImageData(width: 500)
              }
            }
            tags
          }
        }
      }
    }
  `);
  const articlesData = data.allPrismicArticle.edges;

  return (
    <div id="news-container">
      <h2>Actualité</h2>
      {articlesData.map(({ node: article }) => {
        const titre = article.data.titre_principal_article;
        const resume = article.data.resume;
        const tags = article.tags;
        const dateEvent = article.data.date_evenement;
        const articleBannerImage = getImage(
          article.data.image_principale.gatsbyImageData
        );
        const alt = article.data.image_principale.alt;

        return (
          <div key={uuidv4()}>
            <Link to={`post/${article.uid}`}>
              <section>
                <article className="news-panel-article-container">
                  <div>
                    <header>
                      <h1>{titre}</h1>
                      <RichText render={resume.raw} />
                    </header>
                    <div className="news-panel-text">
                      {tags.map((tag) => (
                        <span key={uuidv4()} className="news-panel-tag">
                          {tag}
                        </span>
                      ))}
                      <p>{dateEvent}</p>
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
