import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategory } from '../../services';
import 'vanilla-tilt';
import './styles.scss';

class JokeView extends Component {
  state = {
    joke: {},
  }

  async componentDidMount() {
    VanillaTilt.init(document.querySelector('.joke-view-wrapper'), {
      max: 10,
      speed: 200,
    });
    this.fetchJoke(this.props.cat);
  }

  fetchJoke = cat => getCategory(cat)
    .then(data => this.setState({ joke: data }))

  render() {
    const { joke: { icon_url, value, url } } = this.state;
    return (
      <Fragment>
        <div className="joke-view-wrapper">
          {icon_url ? <img className="joke-view-image" alt="chuck" src={icon_url} /> : <h4>Loading...</h4>}
          {value ? <span className="joke-view-content">{value}</span> : <h4>Loading...</h4>}
          {url ? <a className="joke-view-link" target="blank" href={url}>View in new tab</a> : <h4>Loading...</h4>}
        </div>
        <Link className="link-home" to="/">HOME</Link>
      </Fragment>
    );
  }
}

JokeView.propTypes = {
  cat: PropTypes.string,
};

const mapStateToProps = state => ({ cat: state.rootReducer.selectedCat });

export default connect(mapStateToProps, null)(JokeView);
