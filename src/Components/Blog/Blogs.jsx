import { useQuery } from "@apollo/client/react";
import { GET_BLOGS_INFO } from "../../graphQl/queries";
import { Grid } from "@mui/material";
import CardEl from "../Shared/CardEl";
import Loader from "../Shared/Loader";

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);

  if (loading) return <Loader />;
  if (error) return <p>Error...</p>;
  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
          <CardEl {...post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Blogs;
