import { graphql } from "../gql";

export const PostsQuery = graphql(/* GraphQL */ `
  query GetAuthors {
    authors {
      name
      posts {
        title
        body
        tags {
          name
        }
      }
    }
  }
`);
