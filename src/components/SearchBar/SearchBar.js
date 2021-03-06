
  import React from 'react';

  import Link from '../Link';

  import debounce from '../../utils/debounce';

  import ESIClient from '../../utils/ESIClient';
  import connector from '../../utils/connector';

  if (!String.prototype.capitalizeFirstLetter) {
    Object.defineProperty(String.prototype, 'capitalizeFirstLetter', {
      value() {
        return this
            .charAt(0)
            .toUpperCase() + this.slice(1);
      },
    });
  }

  class SearchBar extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        results: this.props.search ? [] : [['Start typing…', []]],
      };

      this.debounce_request_search = debounce(
        (search, init) => this.request_search(search, init)
      , 300);

      console.log('search for ', this.props.layout.search);
      if (this.props.layout.search) {
        this.search(this.props.layout.search, true);
      } else {
        // this.props.set_searching(false);
      }
    }

    search(search, init) {
      console.log(search, init);
      if (!init) { /* this.setState({ query: search }); */ }
      if (search.length < 3) { return this.setState({ results: [['Start typing…', []]] }); }
      console.log("searching for", search);
      this.debounce_request_search(search, init);
    }

    async request_search(search, init) {
      const client = await ESIClient;
      const { body: search_data } = await client.apis.Search.get_search({
        search,
        strict: !!init,
        categories: this.props.categories,
      });
      if ([].concat(...Object.values(search_data)).length === 0) {
        return this.setState({
          results: [['No results', []]],
        });
      }
      const { body: names } = await client.apis.Universe.post_universe_names({
        ids: []
          .concat(...Object
            .values(search_data)
            .map(val => val.slice(0, this.props.limit))
          ),
      });
      const lookup = names.reduce((p, { id, name }) => !(p[id] = name) || p, {});
      const results = Object
        .entries(search_data)
        .map(([name, ids]) =>
          ([name, ids.slice(0, this.props.limit)
            .map(id => ({ id, name: lookup[id] }))]));
      if (this.props.layout.search === search) {
        console.log(results);
        this.setState({ results });
      }
    }

    resultToUrl(size, category, id) {
      return `https://imageserver.eveonline.com/${category.split('_').slice(-1)[0].capitalizeFirstLetter()}/${id}_${size}.${category === 'character' ? 'jpg' : 'png'}`;
    }

    render() {
      return (
        <div className="searchbar">
          <div className="searchbg" onClick={e => console.log('click') || this.props.set_searching(false)} />
          <div className="searchres-wrapper">
            <div className="searchres">
              {this.state.results.map(result =>
                [
                  <h3	key={result[0]}>{result[0]}</h3>,
                  result[1].map(({ id, name }) =>
                    <Link key={id} to={`/${result[0].split("_").slice(-1)[0]}s/${id}/`} onClick={e => { this.props.set_search(""); this.props.set_searching(false); } }>
                      <img src={this.resultToUrl(64, result[0], id) } />
                      <span>{name}</span>
                    </Link>,
                  ),
                ])}
            </div>
          </div>
          <div className="sbexpand">
            <input
              type="text"
              value={this.props.layout.search}
              onChange={e => console.log('onchange') || this.props.set_search(e.target.value)}
              onKeyUp={e => console.log('onkeyup') || !this.props.set_searching(!!e.target.value) || this.search(e.target.value)}
              onFocus={e => console.log('onfocus') || !this.props.set_searching(!!e.target.value) || e.target.value === '' ? this.setState({ results: [['Start typing…', []]] }) : false}
            />
          </div>
        </div>
      );
    }

  }

  export default connector(SearchBar);
