import React from 'react';
import ReactJson from 'react-json-view'

function Result(props) {
  return (
    <>
    <ReactJson src={props.result} theme="monokai" />
    </>
  );
}

export default Result;