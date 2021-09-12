
// material
import { Grid, Container, Stack, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';
import { BlogPostCard,HighlightCard } from '../components/_dashboard/blog';
//
import POSTS from '../_mocks_/blog';

// ----------------------------------------------------------------------



// ----------------------------------------------------------------------

export default function Blog() {
  return (
    <Page title="Dashboard: Blog | Minimal-UI">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Discover
          </Typography>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="subtitle2" gutterBottom>
            HIGHLIGHTED
          </Typography>
        </Stack>
        <HighlightCard />
        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="subtitle2" gutterBottom>
            DISCOVER MORE
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
