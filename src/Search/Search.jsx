import React, { Component } from 'react'
import './Search.css'

export class Search extends Component {
  render() {
    return (
    <div>
        <form className="">
            <div className="measure flex">
                <input
                    id="name"
                    className="input-reset ba bw3 b--yellow pa3 mb2 w-80 mr2 br3 shadow-5"
                    placeholder="Что я хочу посмотреть..."
                    type="text"
                    aria-describedby="name-desc"
                />
                <button id="name-desc" className="f6 dim ba br3 ph3 pv3 mb2 b--yellow w-30 bg-yellow shadow-5">
                    <i className="fas fa-search f2 orange tc" />
                </button>
            </div>
        </form>
    </div>
    )
  }
}

export default Search
