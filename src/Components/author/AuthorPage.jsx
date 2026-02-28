import { useQuery } from "@apollo/client/react";
import { useParams } from "react-router-dom";
import sanitizeHtml from "sanitize-html";

import { GET_AUTHOR_INFO } from "../../graphQl/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import CardEl from "../Shared/CardEl";

function AuthorPage() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug: slug },
  });
  console.log(slug);
  console.log(error);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error...</h3>;

  console.log("data:", data);

  return (
    <Container maxWidth="lg">
      {data.authors.map(({ avatar, name, field, description, post }) => (
        <Grid container mt={10} key={name}>
          <Grid
            size={{ xs: 12 }}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
            <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
              {name}
            </Typography>
            <Typography
              component="p"
              variant="h5"
              color="text.secondary"
              mt={2}
            >
              {field}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12 }} mt={5}>
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(description.html),
              }}
            ></div>
          </Grid>
          <Grid size={{ xs: 12 }} mt={6}>
            <Typography component="h3" variant="h5" fontWeight={700}>
              مقالات {name}
            </Typography>
            <Grid container spacing={2} mt={2}>
              {post.map((post) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={post.id}>
                  <CardEl
                    title={post.title}
                    slug={post.slug}
                    coverPhoto={post.coverPhoto}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
}

export default AuthorPage;
