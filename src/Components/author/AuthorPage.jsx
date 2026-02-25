import { useQuery } from "@apollo/client/react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphQl/queries";

function AuthorPage() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO);
  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error...</h3>;
  const author = data.authors.find((item) => item.slug === slug);
  if (!author) return <p>نویسنده پیدا نشد!</p>;

  return (
    <>
      <h1>{author.name}</h1>
      <img src={author.avatar.url} alt={author.name} />
    </>
  );
}

export default AuthorPage;
