// This is the spinner that displays while the user
// waits for results.


import React from 'react';
import { css } from '@emotion/core';
//react-spinners is an npm package
import { SyncLoader } from 'react-spinners';


const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export default class ReactSpinner extends React.Component {
  render() {
    // console.log(this.props.loading)
    return (
      <span className='sweet-loading' >
        <SyncLoader
          className={override}
          sizeUnit={"px"}
          size={32}
          color={'#123abc'}
          loading={this.props.loading}
        />
      </span>
    )
  }
}
