import React from 'react';
import Context from '../config/Context';

const ArticleList = () => {
  
  const generateArticles = () => {
    const context = React.useContext(Context);
    console.log(context)
    return context.articles.map(article => <p>{article.title}</p>)
  }

  const generateStateTest = () => {
    const context = React.useContext(Context);
    console.log(context.state.filters.active)
    return (
      <React.Fragment>
        <button onClick={context.toggleActive}>Click Me</button>
        {context.state.filters.active ? <h1>Active</h1> : <h1>Inactive</h1>}
      </React.Fragment>
    )
  }

  return (
    <div>
      <h3>Article List</h3>
      {generateArticles()}
      {generateStateTest()}
    </div>
  );
};

export default ArticleList;