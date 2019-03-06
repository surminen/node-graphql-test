import React, { Component } from 'react'

class Movie extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.movie.title} ({this.props.movie.year})
                </div>
            </div>
        )
    }
}

export default Movie