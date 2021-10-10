// material
import { Grid, Container, Stack, Typography } from "@material-ui/core";
// components
import Page from "../components/Page";
import { BlogPostCard, HighlightCard } from "../components/_dashboard/blog";
import styled from "styled-components";
// ----------------------------------------------------------------------

const discover = [
  {
    id: "1",
    cover:
      "https://1.bp.blogspot.com/-z273SXbpMB0/XwXYCoMcL5I/AAAAAAAAGpo/Y3TrlB9nPSsGC5s9FEY0jMFIF8DPs8yNwCNcBGAsYHQ/s1600/images-12.jpeg",
    title: "Mshwari",
  },
  {
    id: "2",
    cover:
      "http://2.bp.blogspot.com/-AYWTmr5Lq_c/VMHQlDgfSvI/AAAAAAAABRQ/amUjLtWwu5g/s1600/KCB%2BMpesa%2BPaybill%2BNumber.jpg",
    title: "KCB Mpesa",
  },
];

// ----------------------------------------------------------------------

const High= styled.div`
display: grid;
gap: 1.2rem;
grid-template-columns: repeat(1, auto);
@media (min-width: 768px) {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 3rem;
}
`;

export default function Blog() {
  return (
    <Page title="Growth | Mpesa ">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Grow
          </Typography>
        </Stack>

        <Stack
          mb={5}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="subtitle2" gutterBottom>
            HIGHLIGHTED
          </Typography>
        </Stack>
        <High>
        <HighlightCard title="MSHWARI" subtitle="Go for it" outlinedButton="loans" containedButton="savings" img="https://1.bp.blogspot.com/-z273SXbpMB0/XwXYCoMcL5I/AAAAAAAAGpo/Y3TrlB9nPSsGC5s9FEY0jMFIF8DPs8yNwCNcBGAsYHQ/s1600/images-12.jpeg" />
        <HighlightCard title="KCB" subtitle="Go ahead" outlinedButton="loans" containedButton="savings" img="http://2.bp.blogspot.com/-AYWTmr5Lq_c/VMHQlDgfSvI/AAAAAAAABRQ/amUjLtWwu5g/s1600/KCB%2BMpesa%2BPaybill%2BNumber.jpg" />
        </High>
        <Stack
          mb={5}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="subtitle2" gutterBottom>
            DISCOVER MORE
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {discover.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
