import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const query = gql`
  query {
    authors {
      name
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(query);
  console.log({ loading, error, data });

  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
}

export default App;
