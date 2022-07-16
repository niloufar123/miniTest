import React from "react";

import css from "./LoadingDimmer.scss";
import { connect } from 'react-redux';
function LoadingDimmer(props){
    const isLoading = props.requestState=="loading"
    return(
            isLoading ?
            <div className="loading-dimmer"></div>
            : ""

    )
}

const mapStateToProps = function(state) {
    return {
     requestState: state.request.status
    }
  }

  export function LoadingSpinner(props){
    return(
            <div className="loading-dimmer"></div>
    )
  }

  export default connect(mapStateToProps,null)(LoadingDimmer);
