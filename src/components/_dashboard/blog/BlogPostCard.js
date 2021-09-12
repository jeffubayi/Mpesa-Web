import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
// material
import {  experimentalStyled as styled } from "@material-ui/core/styles";
import { Link, Card, Grid, Avatar, CardContent } from "@material-ui/core";

// ----------------------------------------------------------------------

const CardMediaStyle = styled("div")({
  display: "grid",
  justifyContent: "center",
  marginTop: "1rem",
});

const TitleStyle = styled(Link)({
  height: 44,
  overflow: "hidden",
  WebkitLineClamp: 2,
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
});

// ----------------------------------------------------------------------

BlogPostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function BlogPostCard({ post }) {
  const { cover, title } = post;

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ position: "relative", textAlign: "center" }}>
        <CardMediaStyle>
          <Avatar
            alt={title}
            src={cover}
            style={{ width: "5rem", height: "5rem" }}
          />
        </CardMediaStyle>

        <CardContent
          sx={{
            pt: 4,
          }}
        >
          <TitleStyle
            to="#"
            color="inherit"
            variant="subtitle2"
            underline="hover"
            component={RouterLink}
          >
            {title}
          </TitleStyle>
        </CardContent>
      </Card>
    </Grid>
  );
}
