import React, { useState } from 'react';
import { connect } from 'react-redux';

//import actions from '../actions';
const AdditionalFeature = props => {
  return (
    <li>
      {/* onCLick={() => {props.actions(state var);}} Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(
  mapStateToProps,
  {/*action, action */}
) (AdditionalFeature);
