import React, { Component } from 'react'
import Movie from './Movie'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const FEED_QUERY = gql`
  {
    Movie {
      title
      year
    }
  }
`

class MovieList extends Component {
    render() {
        return (
            <Query query={FEED_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error: {error.toString()}</div>

                    const moviesToRender = data.Movie

                    return (
                        <div>
                            {moviesToRender.map(movie => <Movie key={movie.id} movie={movie} />)}
                        </div>
                    )
                }}
            </Query>
        )
    }
}

export default MovieList
