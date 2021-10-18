// material
import {
  Container,
  Typography,
  ListItemAvatar,
  Avatar,
  List,
  Button,
  CardHeader,
} from "@material-ui/core";
// components
import Page from "../components/Page";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";
import StarIcon from "@material-ui/icons/Star";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import LockIcon from "@material-ui/icons/Lock";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LanguageIcon from "@material-ui/icons/Language";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ScreenLockPortraitIcon from "@material-ui/icons/ScreenLockPortrait";
import DescriptionIcon from "@material-ui/icons/Description";
import EditIcon from "@material-ui/icons/Edit";
import account from "../_mocks_/account";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  transactCard: {
    width: "100%",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#000",
    fontSize: "0.8rem",
    fontWeight: 600,
    backgroundColor: "#F4F6F8",
    margin: "1rem",
  },
  iconGreen: {
    backgroundColor: "#00AB55",
  },
  iconBlue: {
    backgroundColor: "#036ECC",
  },
  iconRed: {
    backgroundColor: "#f7005b",
  },
  iconPurple: {
    backgroundColor: "purple",
  },
  iconWhite: {
    fill: "#FAFAFA",
  },
  iconBlueGreen: {
    backgroundColor: "#11E2F6",
  },
  avatar: {
    height: "5rem",
    width: "5rem",
  },
}));

const CardWrapper = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(1, auto);
  width: 100% @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, auto);
    gap: 1rem;
    justify-content: flex-start;
  }
`;

const Main = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(1, auto);
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 2rem;
  }
`;

export default function Transaction({ products, ...rest }) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(["wifi"]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <>
      <Page title="Settings | Mpesa">
        <Container>
          <Typography variant="h4" gutterBottom>
            Settings
          </Typography>
          <CardHeader
            avatar={
              <Avatar
                aria-label="recipe"
                className={classes.avatar}
                src={account.photoURL}
              />
            }
            action={
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                startIcon={<EditIcon />}
              >
                Edit 
              </Button>
            }
            title={account.displayName}
            subheader={account.role}
          />
          <Main>
            <div>
              <Paper className={classes.paper}>SETTINGS</Paper>
              <CardWrapper>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.iconBlue}>
                        <StarIcon className={classes.iconWhite} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="MANAGE FAVORITES" />
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.iconGreen}>
                        <FingerprintIcon className={classes.iconWhite} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      id="switch-list-label-bluetooth"
                      primary="BIOMETRIC AUTHENTICATION"
                    />
                    <ListItemSecondaryAction>
                      <Switch
                        edge="end"
                        onChange={handleToggle("bluetooth")}
                        checked={checked.indexOf("bluetooth") !== -1}
                        inputProps={{
                          "aria-labelledby": "switch-list-label-bluetooth",
                        }}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.iconRed}>
                        <LockIcon className={classes.iconWhite} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="CHANGE PIN" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.iconRed}>
                        <ExitToAppIcon className={classes.iconWhite} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="LOGOUT" />
                  </ListItem>
                </List>
              </CardWrapper>
            </div>
            <div>
              <Paper className={classes.paper}>SUPPORT</Paper>
              <CardWrapper>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.iconBlue}>
                        <MailIcon className={classes.iconWhite} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="MAKE REQUEST" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.iconBlue}>
                        <PhoneIcon className={classes.iconWhite} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="CALL SUPPORT" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.iconBlue}>
                        <LocalLibraryIcon className={classes.iconWhite} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="FAQs" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.iconGreen}>
                        <LanguageIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="SAFARICOM WEBSITE" />
                  </ListItem>
                </List>
              </CardWrapper>
            </div>
            <div>
              <Paper className={classes.paper}>SOCIAL</Paper>
              <CardWrapper>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.iconBlue}>
                        <FacebookIcon className={classes.iconWhite} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="FACEBOOK" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.iconBlueGreen}>
                        <TwitterIcon className={classes.iconWhite} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="TWITTER" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.iconRed}>
                        <YouTubeIcon className={classes.iconWhite} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="YOUTUBE" />
                  </ListItem>
                </List>
              </CardWrapper>
            </div>
            <div>
              <Paper className={classes.paper}>ABOUT</Paper>
              <CardWrapper>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.iconPurple}>
                        <ThumbUpIcon className={classes.iconWhite} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="RATE US ON APPSTORE" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.iconPurple}>
                        <DescriptionIcon className={classes.iconWhite} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="TERMS AND CONDITIONS" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.iconPurple}>
                        <ScreenLockPortraitIcon className={classes.iconWhite} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="PRIVACY POLICY" />
                  </ListItem>
                </List>
              </CardWrapper>
            </div>
          </Main>
        </Container>
      </Page>
    </>
  );
}
