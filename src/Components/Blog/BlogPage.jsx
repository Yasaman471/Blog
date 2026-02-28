import { GET_POST_INFO } from "../../graphQl/queries";
import { useQuery } from "@apollo/client/react";
import { useParams } from "react-router-dom";
import Loader from "../Shared/Loader";

function BlogPage() {
  const { slug } = useParams();
  const { loading, data, errors } = useQuery(GET_POST_INFO, {
    variables: { slug: slug },
  });
  if (loading) return <Loader />;
  if (errors) return <h3>Error...</h3>;

  return (
    <>
      <h1>{data.post.title}</h1>
      <img src={data.post.coverPhoto.url} alt={data.post.title} />
      <p>نویسنده:{data.post.author.name}</p>
    </>
  );
}

export default BlogPage;
