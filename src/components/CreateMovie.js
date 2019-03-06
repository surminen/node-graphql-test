import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
// import Movie from "./MovieList";

const POST_MUTATION = gql`
  mutation PostMutation($title: String!, $year: Number!) {
    CreateMovie(title: title, year: year) {
      title
      year
    }
  }
`

// const POST_MUTATION = gql`
//   mutation PostMutation($description: String!, $url: String!) {
//     post(description: $description, url: $url) {
//       id
//       createdAt
//       url
//       description
//     }
//   }
// `

class CreateMovie extends Component {
    state = {
        title: '',
        year: '',
    }


    render() {
        const { title, year } = this.state

        let input;

        return (
            <div>
                <div className="flex flex-column mt3">
                    <input
                        className="mb2"
                        value={title}
                        onChange={e => this.setState({ title: e.target.value })}
                        type="text"
                        placeholder="A title for the movie"
                    />
                    <input
                        className="mb2"
                        value={year}
                        onChange={e => this.setState({ year: e.target.value })}
                        type="number"
                        placeholder="The year the movie was made"
                    />
                </div>
                {/*<Mutation mutation={POST_MUTATION}*/}
                          {/*variables={{ title, year }}>*/}
                    {/*{postMutation => <button onClick={postMutation}>Submit</button>}*/}
                {/*</Mutation>*/}
                <Mutation mutation={POST_MUTATION}>
                    {(addTodo, { data }) => (
                        <div>
                            <form
                                onSubmit={e => {
                                    e.postMutation();
                                    addTodo({ variables: { title: input.value } });
                                    input.value = "";
                                }}
                            >
                                <input
                                    ref={node => {
                                        input = node;
                                    }}
                                />
                                <button type="submit">Add Todo</button>
                            </form>
                        </div>
                    )}
                </Mutation>
            </div>
        )
    }
}

export default CreateMovie