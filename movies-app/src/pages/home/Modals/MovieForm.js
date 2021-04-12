import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";

import styles from './modals.module.scss';
import {classNames} from '../../../utils';

const cn = classNames(styles);

const validationSchema = Yup.object().shape({
  title: Yup.string().required('This field is mendatory'),
  overview: Yup.string().required('This field is mendatory'),
  runtime: Yup.number('Must be a number')
    .min(60, 'The movie must last at least 1 hour')
    .max(240, 'The movie must last less then 4 hours')
    .required('This field is mendatory'),
})

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
      release_date: '',
      poster_path: '',
      genre: '',
      overview: '',
      runtime: ''
    },
    onSubmit: () => {}
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.id !== nextProps.prefill.id) {
      return {
        prefill: nextProps.prefill
      }
    } else {
      return null;
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      prefill: props.prefill
    }
  }

  render() {
    return (
      <Formik 
        initialValues={this.state.prefill}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          values.genres = ['drama'];
          this.props.onSubmit(values)
        }}
      >
        {({handleReset}) => (
          <Form>
            {console.log()}
            <div className="form-group">
              <label className="form-label" htmlFor="title">title</label>
              <Field 
                id="title"
                type="text"
                className="form-control"
                name='title'
              />
              <ErrorMessage name="title" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="release_date">release date</label>
              <Field 
                id="release_date"
                type="date"
                className="form-control calendar"
                name='release_date'
              />
              <ErrorMessage name="release_date" />
            </div>
            <div className="form-group">
              <label className="form-label">movie url</label>
              <Field 
                id="poster_path"
                type="text"
                className="form-control"
                name="poster_path"
              />
              <ErrorMessage name="poster_path" />
            </div>
            <div className="form-group">
              <label className="form-label">genre</label>
              <div className="dropdown-container">
                <Field 
                  id="genres"
                  as="select"
                  className="form-control dropdown"
                  name="genres"
                  multiple
                >
                  <option value="default">Select Genre</option>
                  <option value="action">Action</option>
                  <option value="drama">Drama</option>
                  <option value="detective">Detective</option>
                </Field>
                <ErrorMessage name="genres" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="overview">overview</label>
              <Field
                id="overview"
                type="text"
                className="form-control"
                name="overview"
              />
              <ErrorMessage name="overview" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="runtime">runtime</label>
              <Field
                id="runtime"
                type="text"
                className="form-control"
                name="runtime"
              />
              <ErrorMessage name="runtime" />
            </div>
            <div className="form-group submit-group">
              <button type="button" className="btn btn-outline-primary" 
                onClick={handleReset}>RESET</button>
              <button type="submit" className="btn btn-primary">SUBMIT</button>
            </div>
          </Form>
        )}
      </Formik>
    )
  }
}
