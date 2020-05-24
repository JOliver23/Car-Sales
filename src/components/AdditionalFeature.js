import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateFeatures } from '../actions';
//import actions from '../actions';

const AdditionalFeature = props => {
console.log(props.feature);
  // const [newFeature, setNewFeature] = useState();

  return (
    <li>
      {/* onCLick={() => {props.actions(state var);}} Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.updateFeatures}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.additionalFeature
  }
}

export default connect(
  mapStateToProps,
  {updateFeatures}
) (AdditionalFeature);
