import IndexPage from './index';

const isBrowser = typeof window !== 'undefined';

class WorkPage extends IndexPage {
  constructor(props) {
    super(props);
    this.state = {
      isArticleVisible: true,
      timeout: true,
      articleTimeout: true,
      article: 'work',
      loading: 'is-loading',
    };
    this.handleOpenArticle = this.handleOpenArticle.bind(this);
    this.handleOpenInnerArticle = this.handleOpenInnerArticle.bind(this);
    this.handleCloseArticle = this.handleCloseArticle.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    if (isBrowser) {
      window.history.pushState(
        {
          isArticleVisible: true,
          timeout: true,
          articleTimeout: true,
          article: 'work',
          loading: 'is-loading',
        },
        null,
        '/'
      );
    }
  }
}

export default WorkPage;
