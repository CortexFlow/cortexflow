import React from "react";
import { Link } from "react-router-dom";
import "../../css/blog.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Assicurati di installare font-awesome
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"; // Importa le icone che utilizzi

import { articles } from "../Articles/articles_list";

const Blog = () => {
  return (
    <div className="blog">
      <main>
        <section className="section__container blog__container">
          <div className="blog__grid">
            {articles.map((article, index) => (
              <div key={index} className="blog__card">
                <div className="blog__content">
                  <Link to = {article.link}>
                  <img
                    src={article.articlePrevImg}
                    alt="article-preview-img"
                    className="article-preview-img"
                    Link
                    to={article.link}
                  />
                  </Link>
                  <h3>{article.title}</h3>
                  <p className="article-date">
                    <p>
                      <FontAwesomeIcon icon={faCalendarAlt} />
                    </p>
                    <p>{article.date}</p>
                  </p>
                  <div className="author-info">
                    <img
                      src="https://avatars.githubusercontent.com/u/170751096?v=4"
                      alt={article.author}
                      className="article-author-img"
                    />
                    <p>{article.author}</p>
                  </div>
                  <p>{article.description}</p>
                  {/* Trasformare l'hashtag in un bottone mantenendo la stessa posizione */}
                  <button className="article-hashtag-btn">
                    {article.hashtag}
                  </button>
                  {/*                   <a href={article.link}>
                    Read more <FontAwesomeIcon icon={faArrowRight} />
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
export default Blog;
