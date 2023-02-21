import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';


class GraphQLClient {
  constructor(token) {
    const httpLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_URI });
    const authLink = new ApolloLink((operation, forward) => {
      operation.setContext(({ headers = {} }) => ({
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      }));
      return forward(operation);
    });
    this.client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
  }

  async query(query, variables = {}) {
    const { data } = await this.client.query({ query, variables });
    return data;
  }

  async mutate(mutation, variables = {}) {
    const { data } = await this.client.mutate({ mutation, variables });
    return data;
  }
}

export default GraphQLClient;
