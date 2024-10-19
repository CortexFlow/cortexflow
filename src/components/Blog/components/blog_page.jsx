import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "../../css/blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import { articles } from "../Articles/articles_list";
import "../../css/blog-responsive.css";

const Blog = () => {
  const memorizedArticles = useMemo(() => articles, []);

  return (
    <div className="blog">
      <main>
        <section className="section__container blog__container">
          <div className="blog__grid">
            {memorizedArticles.map((article, index) => (
              <div key={index} className="blog__card">
                <div className="blog__content">
                  <Link to={article.link}>
                    <img
                      src={article.articlePrevImg}
                      alt="article-preview-img"
                      className="article-preview-img"
                      title="article preview"
                    />
                  </Link>
                  <h3>{article.title}</h3>
                  <p className="article-date">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <p>{article.date}</p>
                  </p>
                  <div className="author-info">
                    <img
                      src="https://avatars.githubusercontent.com/u/170751096?v=4"
                      alt={article.author}
                      className="article-author-img"
                      title="article author"
                    />
                    <p>{article.author}</p>
                  </div>
                  <p>{article.description}</p>
                  <button className="article-hashtag-btn">
                    {article.hashtag}
                  </button>
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
