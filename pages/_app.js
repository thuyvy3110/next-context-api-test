import App, { Container } from 'next/app';
import Context from '../config/Context';
import ContextProvider from '../provider/ContextProvider';
import fetch from 'isomorphic-unfetch';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    const res = await fetch('https://node-hnapi.herokuapp.com/news');
    let data = await res.json();

    console.log(data)
    return { articles: data }
  }

  render () {
    const { Component, pageProps } = this.props;
    
    return (
      <Container>
        <ContextProvider value={{ articles: this.props.articles}}>
          <Component {...pageProps} />
        </ContextProvider>
      </Container>
    );
  }
}