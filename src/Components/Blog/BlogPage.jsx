import { useQuery } from "@apollo/client/react";
import { useParams } from "react-router-dom";
import { GET_BLOG_INFO } from "../../graphQl/queries";

function BlogPage() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_BLOG_INFO);
  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error...</h3>;
  const post = data.posts.find((item) => item.slug === slug);
  if (!post) return <p>مقاله پیدا نشد!</p>;

  return (
    <>
      <h1>{post.title}</h1>
      <img src={post.coverPhoto.url} alt={post.title} />
      <p>نویسنده:{post.author.name}</p>
    </>
  );
}

export default BlogPage;
