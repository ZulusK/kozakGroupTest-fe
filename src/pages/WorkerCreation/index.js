import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import withAuthRequired from '../../hoc/withAuthRequired';
import * as workerActions from '../../reducers/workers/actions';
import withMainLayout from '../../hoc/withMainLayout';
import * as validation from '../../services/helpers/dataValidation';
import FormInput from '../../components/FormInput';

class WorkerCreation extends Component {
  _onSubmit = values => {
    const data = {
      fullname: values.fullname,
      gender: values.gender,
      salary: values.salary,
      position: values.position,
      contacts: {
        email: values.email,
        mobileNumber: values.mobileNumber
      }
    };
    this.props.createWorker(data);
  };
  render() {
    const { handleSubmit, submitting, pristine, reset } = this.props;
    return (
      <div className="container has-text-centered is-mobile">
        <div className="column is-8-tablet is-offset-2-tablet is-4-desktop is-offset-4-desktop">
          <h3 className="title has-text-grey">Add worker</h3>
          <div className="box">
            <form onSubmit={handleSubmit(this._onSubmit)}>
              <Field
                label="Full name"
                name="fullname"
                placeholder="Fullname of worker"
                type="text"
                component={FormInput}
                validate={validation.fullnameValidation}
              />
              <Field
                label="Position"
                name="position"
                placeholder="Position of worker"
                type="textarea"
                component={FormInput}
                rows={5}
                validate={validation.positionValidation}
              />
              <div className="columns">
                <div className="column is-6">
                  <Field
                    label="Salary"
                    name="salary"
                    placeholder="Salary of worker"
                    type="number"
                    component={FormInput}
                  />
                </div>
                <div className="column is-6">
                  <div className="field">
                    <label className="label">Gender</label>
                  </div>
                  <label>
                    <Field
                      name="gender"
                      component="input"
                      type="radio"
                      value="male"
                      validate={validation.genderValidation}
                    />{' '}
                    Male
                  </label>{' '}
                  <label>
                    <Field
                      name="gender"
                      component="input"
                      type="radio"
                      value="female"
                      validate={validation.genderValidation}
                    />{' '}
                    Female
                  </label>
                </div>
              </div>
              <Field
                label="Mobile number"
                name="mobileNumber"
                placeholder="+380 xxx xxx xxx"
                type="text"
                component={FormInput}
                validate={validation.mobileNumberValidation}
              />
              <Field
                label="Email"
                name="email"
                placeholder="Email fo worker"
                type="text"
                component={FormInput}
                validate={validation.emailValidation}
              />
              <div className="field is-grouped">
                <div className="control">
                  <button
                    className="button is-link"
                    type="submit"
                    disabled={pristine || submitting}
                  >
                    Submit
                  </button>{' '}
                  <button
                    type="button"
                    className="button is-danger"
                    disabled={pristine || submitting}
                    onClick={reset}
                  >
                    Clear Values
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  createWorker: data => dispatch(workerActions.createWorker(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({ form: 'createWorker' })(
    withAuthRequired(withMainLayout(WorkerCreation))
  )
);
