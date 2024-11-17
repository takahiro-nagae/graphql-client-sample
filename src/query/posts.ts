import { gql } from "urql";

export const PostsQuery = gql`
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
`;
