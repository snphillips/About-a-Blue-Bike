import React, { Component } from "react";


export default class AutoBikeIdPick extends Component {

  render() {
    return (

        <div>
          <form>
            <input
              className="button"
              type="submit"
              value="random bike id picker"
              placeholder="random"
              onClick={this.props.randomSubmit.bind(this)}

            />
          </form>
         </div>

    );
  }
}
