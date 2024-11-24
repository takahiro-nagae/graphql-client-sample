import "./App.css";
import { useQuery } from "urql";
import { PostsQuery } from "./query/posts";

function App() {
  const [result] = useQuery({
    query: PostsQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;

  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      {!fetching &&
        data &&
        data.authors.map((author) => (
          <div key={author.name}>
            <h2>{author.name}</h2>
            <ul>
              {author.posts.map((post: any) => (
                <li key={post.title}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  <ul>
                    {post.tags.map((tag: any) => (
                      <li key={tag.name}>{tag.name}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}

export default App;
