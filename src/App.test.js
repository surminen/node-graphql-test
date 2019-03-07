import React from 'react';
const renderer = require('react-test-renderer'); // ES5 with npm
import App from './components/App'
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo'

import { MockedProvider } from 'react-apollo/test-utils';

// The component AND the query need to be exported
import { FEED_QUERY, MovieList } from './components/MovieList';

const mocks = [
  {
    request: {
      query: FEED_QUERY,
      variables: {
        title: 'new title',
      },
    },
    result: {
      data: {
        movie: { title: 'new title', year: 1974 },
      },
    },
  },
];

it('renders without error', () => {
  renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>,
  );
});
