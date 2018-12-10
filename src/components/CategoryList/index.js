import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import setCategory from '../../actions';
import { getCategories } from '../../services';
import CategoryField from '../CatField';
import 'vanilla-tilt';
import './styles.scss';

class CategoryList extends Component {
  state = {
    data: [],
  }

  async componentDidMount() {
    this.fetchData();
  }

  fetchData = () => getCategories()
    .then(data => this.setState({ data }));

  render() {
    const { data } = this.state;
    const { setCat } = this.props;
    return (
      <div className="category-list" data-tilt data-tilt-glare data-tilt-max-glare="0.8">
        <div className="title">
          <h1>Category List ( select for joke )</h1>
        </div>
        <div className="category-list-fields-wrapper">
          {data.length > 0 ? data.map((item, i) => (
            <CategoryField
              onClick={() => {
                setCat(item);
                this.props.history.push(`/${item}`);
              }}
              key={i}
              name={item}
            />
          )) : <h4>Loading...</h4>}
        </div>
      </div>
    );
  }
}

CategoryList.propTypes = {
  setCat: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

const mapStateToProps = state => ({ cat: state });

const mapDispatchToProps = dispatch => ({
  setCat: cat => dispatch(setCategory(cat)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryList));
