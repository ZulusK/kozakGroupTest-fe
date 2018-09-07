import React, { Component } from 'react';
// import style from './styles.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDataInvisible: this.props.secure ? true : false
    };
  }
  _onToggleDataVisibility = () => {
    this.setState(prevState => ({
      isDataInvisible: !prevState.isDataInvisible
    }));
  };
  _getStyleAccordingToState = () => {
    if (!this.props.meta.touched) {
      return '';
    }
    if (this.props.meta.error) {
      return 'is-danger';
    }
    if (this.props.meta.warning) {
      return 'is-warning';
    }
    if (this.props.meta.valid) {
      return 'is-success';
    }
  };
  _getInputStyle = () => {
    return 'input ' + this._getStyleAccordingToState();
  };
  _getHelpStyle = () => {
    return 'help ' + this._getStyleAccordingToState();
  };

  render() {
    const {
      input,
      label,
      type,
      meta: { error, warning }
    } = this.props;
    return (
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <input
            className={this._getInputStyle()}
            type={type}
            placeholder={this.props.placeholder}
            onChange={input.onChange}
            {...input}
          />
        </div>
        <p className={this._getHelpStyle()}>{error || warning}</p>
      </div>
    );
  }
}

FormInput.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string.isRequired
};
export default FormInput;
