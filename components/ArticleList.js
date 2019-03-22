import React from 'react';
import Context from '../config/Context';

const ArticleList = () => {
  const generateArticles = () => {
    const context = React.useContext(Context);
    console.log(context, 'context') // Context returns undefined
    return context.articles.map(article => <p>{article.title}</p>)
  }

  return (
    <div>
      <h3>Article List</h3>
      {generateArticles()}
    </div>
  );
};

export default ArticleList;