import faker from "faker";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import googleFill from "@iconify/icons-eva/google-fill";
import twitterFill from "@iconify/icons-eva/twitter-fill";
import facebookFill from "@iconify/icons-eva/facebook-fill";
import linkedinFill from "@iconify/icons-eva/linkedin-fill";
// material
import {
  Box,
  Grid,
  Card,
  Paper,
  Typography,
  CardHeader,
  CardContent,
  Avatar,
} from "@material-ui/core";
// utils
import { fShortenNumber } from "../../../utils/formatNumber";
import { experimentalStyled as styled } from "@material-ui/core/styles";
// ----------------------------------------------------------------------

const SOCIALS = [
  {
    name: "MyNHIF",
    icon: "https://pbs.twimg.com/profile_images/900003217127428096/Xr4BvlX6_400x400.jpg",
  },
  {
    name: "MDAKTARI",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///+t3sAxrGKq3b4qql6v38Km27sjqVojqVu548kIpVGz4MU9sGoYp1bz+vYbp1fJ6dWf07HU69zM6teP0Kiy28C+4cre8OVcuX52xZS43sXx+fRlvIXJ5dJuv4tIs3FTt3iBx5mHyZ6m1bbn9OuVzqiO0KYZUBUMAAAEmklEQVR4nO3d6ZqiOACFYREMmBJQbFHLpbTUvv9LbEnABaIsJpDQ5/1VI89055sgIMSawQAAAAAAAAAAAAAAAAAAAAAAAAAA+md32R8mk8PxFHU9EiWWaxp6jjMcOo7rO5eg6/HIdt7Sa9ydRy9dD0muxXNfwh0uux6VREc/35egcdfjkmYfZlGO67rebTrpd9cjk+Q3DXR8bz1bLC5b6maJ/Tio7ijPCQ+79JXg5Hnpm7EXh9R0wqj1+OKavzO9fVejkujCC/3cDnnhibQHB1S+j9Jd/vVfVu5suxiTVAsW4v0pbpmwYyrdtD8muVaswxVs2bH91D21PiTJ2E7qCS/RJr3YTSM2Ub7weDJjpwyv7SFJFrOzPRVum/Nthp8ST2yefoTbznx+zy0PSbJTcih1DsJtG4pCE1QoNPyqpv+Fs/+6MOhR4Uq4DYVmQCEK9YfCHhR6KPwPCg2/780LxfdiUGgGFKJQfyhEof4u5YWGX9NUKOzFHIqfZRtTeI52mbhg77wuHJhQeJ4dqO+HqdsPd+z5qLmF0Yp6hdVcAsYW7ouL1XpVuMxW/fS1MFvp1NvCKAt0XJ9eDzaZ8P6jdxMaWLhJl1M6/mHR/JpE58IDP8Z4k4+Gp3HhN5/CcP3ZH6NxIZ9B9/jhH6NvIV8k8+K5Zw36Fm75mruaiyimyXXq9BH7D+WSh1fmQhFzbnFpEV+rVncftWzr0fWf+LLFv5ZdDRnNW4p8t1btja/nQisr/DPKv/6STeJWGtkKEuGCyrckFF6RuYqknHef29+QU2jZYxVNz47sU23tU4WkQsseqYh60nGhZX2pqHrU7V6azKLqrxOdmq3tlVdoEcV3IHdyzxZ/6xdatpKwO37G/635b70odBoVKr7UWzX6pkShcOQ1LrSs8r/vE9/8ylv8dP4lqYVE8cpi/ukprLefytxLLVvxpc2CfwL2a50T5RaqvrJJ72K4PzXe8VILlR9NN+mtNoeuFlXfEeOvvE8KidK+q/nj3UQv+XJv5n6bdHLzk7j9cDPUuXAQ17gjPMylP2/TtXAQhRWfWpRoctXWTuEg2FZ9MqOiUPEpPzU/0MpPZ2QXtvXbCpaXCU2eVRQfjYZuniMWNjsftngPMlg+Pd7+zizyjmuR/X7WZAqJjt9aHI/EmgRaLdysqa94TdOc6gvvZmQWajmFMgu1fBfKLFR9m6YpaYVEx6dVCVmFrdzXb0RSoa676EBSIRnreZBhPi+0yVjL82BmXF5I3rHjSOP5S5QXkiDYpIKCrodfQYXCrof4IRSiUH8oRKH+UIhC/aEQhfrrf2FcFqj8ybVq49JC0+cQhSjUHwpRqL/ywv6fD1GoOxSaX1h+5d3OSi51pmWfntr4RpNSUWnhtOshfmhDygr1fX5dUdkcarpKpoaSN6Kt/CtpypXspubvpCVnRNv0c0UieDeJei43rCt6nWj8qSIVvzzYmH+YSb24LdzCt5dbE4t2VOOv154sSWEa9V1t2EwQPzXaZGz8/7arIJhbxLbt5Dd+EDLtXx+zWc6TX9YS9TQPAAAAAAAAAAAAAAAAAAAAAAAA4J1/0dpe9AhzWU8AAAAASUVORK5CYII",
  },
  {
    name: "GLOBAL PAY",
    icon: "https://i.imgur.com/JgVqHBs.png",
  },
  {
    name: "PRO GAS",
    icon: "https://arkafrica.com/wp-content/uploads/2021/02/ark-proto-feature-brandcreation-identity-progas-scaled.jpg",
  },
  {
    name: "DSTV",
    icon: "https://play-lh.googleusercontent.com/g4L6GfbKXwGwABBtyib_1Ln1BqVweFQtsQjaCj0qrfb94P0akt_umUx0gopfpxOl4Te9=w480-h960-rw",
  },
  {
    name: "PAWA",
    icon: "https://pbs.twimg.com/profile_images/845221343096426497/Kad2DdBz.jpg",
  },
  {
    icon:
      "https://pbs.twimg.com/profile_images/841769202201550850/5gk9sw2G_400x400.jpg",
    name: "BOOK A BUS",
  },
  {
    icon:
      "data:image/png;base64,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",
    name: "GIFT VOUCHERS",
  },
];

// ----------------------------------------------------------------------

SiteItem.propTypes = {
  site: PropTypes.object,
};

const CardMediaStyle = styled("div")({
  display: "grid",
  justifyContent: "center",
  marginBottom: "0.3rem",
});

function SiteItem({ site }) {
  const { icon, name } = site;

  return (
    <Grid item xs={6} lg={3}>
      <Paper variant="outlined" sx={{ py: 2.5, textAlign: "center" }}>
        <CardMediaStyle>
          <Avatar sx={{ mb: 0.5 }} src={icon} />
        </CardMediaStyle>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {name}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default function AppTrafficBySite() {
  return (
    <Card>
      <CardHeader title="Frequent services" />
      <CardContent>
        <Grid container spacing={2}>
          {SOCIALS.map((site) => (
            <SiteItem key={site.name} site={site} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
