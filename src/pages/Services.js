// material
import { Grid, Container, Stack, Typography } from "@material-ui/core";
// components
import Page from "../components/Page";
import { BlogPostCard } from "../components/_dashboard/blog";
import { green, pink, red, purple ,grey,blue,orange,amber} from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CardTravelIcon from "@material-ui/icons/CardTravel";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import Main from "./Main"
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import SchoolIcon from '@material-ui/icons/School';
import RedeemIcon from "@material-ui/icons/Redeem";
import StorefrontIcon from '@material-ui/icons/Storefront';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(5,auto)",
    gap: "2rem",
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: "#fff",
    backgroundColor: green[500],
  },
  purple: {
    color: "#fff",
    backgroundColor: purple[500],
  },
  education: {
    color: "#fff",
    backgroundColor: grey[700],
  },
  red: {
    color: "#fff",
    backgroundColor: red[700],
  },
  events: {
    color: "#fff",
    backgroundColor: purple[300],
  },
  finance: {
    color: "#fff",
    backgroundColor: blue[300],
  },
  gifting: {
    color: "#fff",
    backgroundColor: orange[700],
  },
  house: {
    color: "#fff",
    backgroundColor: amber[700],
  },
  transport: {
    color: "#fff",
    backgroundColor: green[800],
  },
}));
// ----------------------------------------------------------------------

const discover = [
  {
    id: "1",
    cover:
      "https://www.modernmomhq.com/wp-content/uploads/2015/04/AAR2BHealth2BInsurance2BKenya.jpg",
    title: "AAR INSURANCE",
  },
  {
    id: "2",
    cover:
      "https://pbs.twimg.com/profile_images/841769202201550850/5gk9sw2G_400x400.jpg",
    title: "BOOK A BUS",
  },
  {
    id: "3",
    cover:
      "data:image/png;base64,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",
    title: "BUY GIFT VOUCHERS",
  },
  {
    id: "4",
    cover:
      "data:image/png;base64,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",
    title: "BUY HEALTHCARE",
  },
  {
    id: "5",
    cover:
      "https://pbs.twimg.com/profile_images/900003217127428096/Xr4BvlX6_400x400.jpg",
    title: "MYNHIF",
  },
  {
    id: "6",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62n5Gre1IusazRXYhIq8sB7Ufr8RSbcL7rra1qW8s4Fkx1D8q6AHpMvnL8AMCgWEEI3w&usqp=CAU",
    title: "CPF",
  },
  {
    id: "7",
    cover:
      "https://play-lh.googleusercontent.com/VFJzKqiDcyrzcf3BDRkPXJ2JxBFPS_lcQr89BrXPP-CDNSojfy44K6KHUa-gPZd7r4w",
    title: "DSTV",
  },

  {
    id: "8",
    cover: "https://i.imgur.com/JgVqHBs.png",
    title: "E-BIMA",
  },
  {
    id: "9",
    cover:
      "data:image/jpeg;base64,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",
    title: "MADARAKA EXPRESS",
  },
  {
    id: "10",
    cover:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///+t3sAxrGKq3b4qql6v38Km27sjqVojqVu548kIpVGz4MU9sGoYp1bz+vYbp1fJ6dWf07HU69zM6teP0Kiy28C+4cre8OVcuX52xZS43sXx+fRlvIXJ5dJuv4tIs3FTt3iBx5mHyZ6m1bbn9OuVzqiO0KYZUBUMAAAEmklEQVR4nO3d6ZqiOACFYREMmBJQbFHLpbTUvv9LbEnABaIsJpDQ5/1VI89055sgIMSawQAAAAAAAAAAAAAAAAAAAAAAAAAA+md32R8mk8PxFHU9EiWWaxp6jjMcOo7rO5eg6/HIdt7Sa9ydRy9dD0muxXNfwh0uux6VREc/35egcdfjkmYfZlGO67rebTrpd9cjk+Q3DXR8bz1bLC5b6maJ/Tio7ijPCQ+79JXg5Hnpm7EXh9R0wqj1+OKavzO9fVejkujCC/3cDnnhibQHB1S+j9Jd/vVfVu5suxiTVAsW4v0pbpmwYyrdtD8muVaswxVs2bH91D21PiTJ2E7qCS/RJr3YTSM2Ub7weDJjpwyv7SFJFrOzPRVum/Nthp8ST2yefoTbznx+zy0PSbJTcih1DsJtG4pCE1QoNPyqpv+Fs/+6MOhR4Uq4DYVmQCEK9YfCHhR6KPwPCg2/780LxfdiUGgGFKJQfyhEof4u5YWGX9NUKOzFHIqfZRtTeI52mbhg77wuHJhQeJ4dqO+HqdsPd+z5qLmF0Yp6hdVcAsYW7ouL1XpVuMxW/fS1MFvp1NvCKAt0XJ9eDzaZ8P6jdxMaWLhJl1M6/mHR/JpE58IDP8Z4k4+Gp3HhN5/CcP3ZH6NxIZ9B9/jhH6NvIV8k8+K5Zw36Fm75mruaiyimyXXq9BH7D+WSh1fmQhFzbnFpEV+rVncftWzr0fWf+LLFv5ZdDRnNW4p8t1btja/nQisr/DPKv/6STeJWGtkKEuGCyrckFF6RuYqknHef29+QU2jZYxVNz47sU23tU4WkQsseqYh60nGhZX2pqHrU7V6azKLqrxOdmq3tlVdoEcV3IHdyzxZ/6xdatpKwO37G/635b70odBoVKr7UWzX6pkShcOQ1LrSs8r/vE9/8ylv8dP4lqYVE8cpi/ukprLefytxLLVvxpc2CfwL2a50T5RaqvrJJ72K4PzXe8VILlR9NN+mtNoeuFlXfEeOvvE8KidK+q/nj3UQv+XJv5n6bdHLzk7j9cDPUuXAQ17gjPMylP2/TtXAQhRWfWpRoctXWTuEg2FZ9MqOiUPEpPzU/0MpPZ2QXtvXbCpaXCU2eVRQfjYZuniMWNjsftngPMlg+Pd7+zizyjmuR/X7WZAqJjt9aHI/EmgRaLdysqa94TdOc6gvvZmQWajmFMgu1fBfKLFR9m6YpaYVEx6dVCVmFrdzXb0RSoa676EBSIRnreZBhPi+0yVjL82BmXF5I3rHjSOP5S5QXkiDYpIKCrodfQYXCrof4IRSiUH8oRKH+UIhC/aEQhfrrf2FcFqj8ybVq49JC0+cQhSjUHwpRqL/ywv6fD1GoOxSaX1h+5d3OSi51pmWfntr4RpNSUWnhtOshfmhDygr1fX5dUdkcarpKpoaSN6Kt/CtpypXspubvpCVnRNv0c0UieDeJei43rCt6nWj8qSIVvzzYmH+YSb24LdzCt5dbE4t2VOOv154sSWEa9V1t2EwQPzXaZGz8/7arIJhbxLbt5Dd+EDLtXx+zWc6TX9YS9TQPAAAAAAAAAAAAAAAAAAAAAAAA4J1/0dpe9AhzWU8AAAAASUVORK5CYII=",
    title: "MDAKTARI",
  },
  {
    id: "11",
    cover:
      "https://pbs.twimg.com/profile_images/1216973193405194241/ILTMDEIp_400x400.jpg",
    title: "MGAS",
  },
  {
    id: "12",
    cover:
      "https://kenyansconsult.co.ke/wp-content/uploads/2021/02/Minet-Insurance-Kenya.png",
    title: "MINET",
  },
  {
    id: "13",
    cover:
      "https://pbs.twimg.com/profile_images/845221343096426497/Kad2DdBz.jpg",
    title: "PAWA",
  },

  {
    id: "14",
    cover:
      "https://arkafrica.com/wp-content/uploads/2021/02/ark-proto-feature-brandcreation-identity-progas-scaled.jpg",
    title: "PRO GAS",
  },
];

// ----------------------------------------------------------------------

export default function Blog() {
  const classes = useStyles();
  return (
    <Page title="Services | Mpesa ">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={3}
        >
          <Typography variant="h4" gutterBottom>
            Services
          </Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          {" "}
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Avatar className={classes.events}>
              <ConfirmationNumberIcon />
            </Avatar>
            <Typography variant="caption" gutterBottom color="textSecondary">
             Events
            </Typography>
          </Stack>
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Avatar className={classes.education}>
              <SchoolIcon />
            </Avatar>
            <Typography variant="caption" gutterBottom color="textSecondary">
             Education
            </Typography>
          </Stack>
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Avatar className={classes.finance}>
              <MonetizationOnIcon />
            </Avatar>
            <Typography variant="caption" gutterBottom color="textSecondary">
              Finance
            </Typography>
          </Stack>
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Avatar className={classes.gifting}>
              <RedeemIcon />
            </Avatar>
            <Typography variant="caption" gutterBottom color="textSecondary">
             Gifting
            </Typography>
          </Stack>
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Avatar className={classes.red}>
              <FavoriteIcon />
            </Avatar>
            <Typography variant="caption" gutterBottom color="textSecondary">
              Health
            </Typography>
          </Stack>
         
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Avatar className={classes.greenny}>
              <StorefrontIcon/>
            </Avatar>
            <Typography variant="caption" gutterBottom color="textSecondary">
              Marketing
            </Typography>
          </Stack>
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Avatar className={classes.green}>
              <CardTravelIcon />
            </Avatar>
            <Typography variant="caption" gutterBottom color="textSecondary">
              Travel
            </Typography>
          </Stack>
         
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Avatar className={classes.purple}>
              <LocalBarIcon />
            </Avatar>
            <Typography variant="caption" gutterBottom color="textSecondary">
              Entertainment
            </Typography>
          </Stack>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Avatar className={classes.red}>
              <LocalHospitalIcon />
            </Avatar>
            <Typography variant="caption" gutterBottom color="textSecondary">
              Medical
            </Typography>
          </Stack>
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Avatar className={classes.pink}>
              <HomeWorkIcon  />
            </Avatar>
            <Typography variant="caption" gutterBottom color="textSecondary">
             Goverment<br/> services
            </Typography>
          </Stack>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Avatar className={classes.green}>
              <HomeWorkIcon />
            </Avatar>
            <Typography variant="caption" gutterBottom color="textSecondary">
              Transport
            </Typography>
          </Stack>
        </Stack>
        <Stack
          mb={3}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="subtitle2" gutterBottom>
            HIGHLIGHTED
          </Typography>
        </Stack>
       < Main />
        <Stack
          mb={5}
          mt={2}
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
