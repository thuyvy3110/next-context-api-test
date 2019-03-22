import App, { Container } from 'next/app';
import ContextProvider from '../provider/ContextProvider';
import fetch from 'isomorphic-unfetch';

export default class MyApp extends App {
  static async getInitialProps() {
    const res = await fetch('https://node-hnapi.herokuapp.com/news');
    let data = await res.json();

    console.log(data)
    return { articles: data }
  }

  render () {
    const { Component, pageProps } = this.props;
    
    return (
      <Container>
        <ContextProvider articles={this.props.articles}>
          <Component {...pageProps} />
        </ContextProvider>
      </Container>
    );
  }
}