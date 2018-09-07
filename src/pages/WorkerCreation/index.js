import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import withAuthRequired from '../../hoc/withAuthRequired';
import * as workerActions from '../../reducers/workers/actions';
import withMainLayout from '../../hoc/withMainLayout';
import validation from '../../services/helpers/dataValidation';
import FormInput from '../../components/FormInput';
import withNotifications from '../../hoc/withNotifications';

class WorkerCreation extends Component {
  _onSubmit = values => {
    this.props.createWorker(values);
  };
  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <div className="container has-text-centered is-mobile">
        <div className="column is-6-table is-offset-3-tablet is-4-desktop is-offset-4-desktop">
          <h3 className="title has-text-grey">Add worker</h3>
          <div className="box">
            <form>
              <Field
                label="Full name"
                name="fullname"
                placeholder="Fullname of worker"
                type="text"
                component={FormInput}
                validate={validation.username}
              />
              <Field
                label="Position"
                name="position"
                placeholder="Position of worker"
                type="text"
                component={FormInput}
                validate={validation.username}
              />
              <Field
                label="Salary"
                name="salary"
                placeholder="Salary of worker"
                type="number"
                component={FormInput}
              />
              <label>
                <Field
                  name="gender"
                  component="input"
                  type="radio"
                  value="male"
                />{' '}
                Male
              </label>{' '}
              <label>
                <Field
                  name="gender"
                  component="input"
                  type="radio"
                  value="female"
                />{' '}
                Female
              </label>
              <div className="field is-grouped">
                <div className="control">
                  <a
                    className="button is-link"
                    disabled={submitting}
                    onClick={handleSubmit(this._onSubmit)}
                  >
                    Submit
                  </a>
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
    withAuthRequired(withMainLayout(withNotifications(WorkerCreation)))
  )
);
