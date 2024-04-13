import React from 'react';
import Layout from '../components/layout';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import grecaptcha from 'grecaptcha';

const isBrowser = typeof window !== 'undefined';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
    };
    this.handleOpenArticle = this.handleOpenArticle.bind(this);
    this.handleOpenInnerArticle = this.handleOpenInnerArticle.bind(this);
    this.handleCloseArticle = this.handleCloseArticle.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  componentDidUpdate() {
    window.onpopstate = e => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      });

      setTimeout(() => {
        this.setState({
          timeout: !this.state.timeout,
        });
      }, 325);

      setTimeout(() => {
        this.setState({
          isArticleVisible: !this.state.isArticleVisible,
          article: '',
        });
      }, 350);

      if (isBrowser) {
        window.history.pushState(this.state, null, '/');
      }
    };
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      });
    }, 350);

    if (isBrowser) {
      window.history.pushState(this.state, null, '/' + article);
    }
  }

  handleOpenInnerArticle(article) {
    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      });
    }, 350);

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        articleTimeout: !this.state.articleTimeout,
        article,
      });
    }, 375);

    if (isBrowser) {
      window.history.pushState(this.state, null, '/' + article);
    }
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: '',
      });
    }, 350);

    if (isBrowser) {
      window.history.pushState(this.state, null, '/');
    }
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <div
          className={`body ${this.state.loading} ${
            this.state.isArticleVisible ? 'is-article-visible' : ''
          }`}
        >
          <div id="wrapper">
            <Header
              onOpenArticle={this.handleOpenArticle}
              timeout={this.state.timeout}
            />
            <script src="https://www.google.com/recaptcha/api.js?render=6LdJm7kpAAAAAKuH5Ii7gXwyGd-F0REqiId3cohs">
              grecaptcha.ready(function() { grecaptcha.execute('6LdJm7kpAAAAAKuH5Ii7gXwyGd-F0REqiId3cohs', {action: 'homepage'}).then(function(token) { document.getElementById('captchaResponse').value = token;}) });
            </script>
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onOpenArticle={this.handleOpenInnerArticle}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
            />
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg"></div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
