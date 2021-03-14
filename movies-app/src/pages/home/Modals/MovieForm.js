import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './modals.module.scss';
import {classNames} from '../../../utils';

const cn = classNames(styles);

export class MovieForm extends Component {
  static propsType = {
    prefill: PropTypes.shape({
      title: PropTypes.string,
      releaseDate: PropTypes.string,
      movieUrl: PropTypes.string,
      genre: PropTypes.string,
      overview: PropTypes.string,
      runtime: PropTypes.string
    }),
    onSubmit: PropTypes.func
  }

  static defaultProps = {
    prefill: {
      title: '',
      releaseDate: '',
      movieUrl: '',
      genre: '',
      overview: '',
      runtime: ''
    },
    onSubmit: () => {}
  }

  constructor(props) {
    super(props);

    this.state = {
      ...this.props.prefill
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({...this.state})
  }

  restForm = () => {
    this.setState({
      ...this.props.prefill
    })
  }

  render() {
    const {
      state,
      handleChange,
      handleSubmit
    } = this;

    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">title</label>
          <input 
            type="text"
            className="form-control"
            value={state.title}
            name='title'
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">release date</label>
          <input 
            type="date"
            className="form-control calendar"
            value={state.releaseDate}
            name='releaseDate'
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">movie url</label>
          <input 
            type="text"
            className="form-control"
            value={state.movieUrl}
            name="movieUrl"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">genre</label>
          <div className="dropdown-container">
            <select 
              type="text"
              className="form-control dropdown"
              value={state.genre}
              name="genre"
              onChange={handleChange}
            >
              <option value="default">Select Genre</option>
              <option value="action">Action</option>
              <option value="drama">Drama</option>
              <option value="detective">Detective</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">overview</label>
          <input
            type="text"
            className="form-control"
            value={state.overview}
            name="overview"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">runtime</label>
          <input
            type="text"
            className="form-control"
            value={state.runtime}
            name="runtime"
            onChange={handleChange}
          />
        </div>
        <div className="form-group submit-group">
          <button type="button" className="btn btn-outline-primary" onClick={this.restForm}>RESET</button>
          <button type="submit" className="btn btn-primary">SUBMIT</button>
        </div>
      </form>
    )
  }
}