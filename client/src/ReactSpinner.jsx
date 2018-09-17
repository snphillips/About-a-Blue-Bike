import React from 'react';
import { css } from 'react-emotion';
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
      <div className='sweet-loading' >
        <SyncLoader
          className={override}
          sizeUnit={"px"}
          size={32}
          color={'#123abc'}
          // color={'#1884c7'}
          loading={this.props.loading}
        />
      </div>
    )
  }
}
