import PropTypes from "prop-types";
import { Form, FormikProvider, useFormik } from "formik";
// material
import {
  Box,
  Card,
  Avatar,
  CardHeader,
  ListItemSecondaryAction,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import SchoolIcon from '@material-ui/icons/School';
import FavoriteIcon from "@material-ui/icons/Favorite";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';
import RedeemIcon from "@material-ui/icons/Redeem";
// ----------------------------------------------------------------------

const TASKS = [
  "Entertainment",
  "Financial",
  "Education",
];

const CATEGORIES = [
  {name:"Financial",
  icon:<MonetizationOnIcon/>,
  color:"#00AB55"
  },
  {name:"Education",
  icon:<SchoolIcon />,
  color:"#1890FF"

  },
  {name:"Health",
  icon:<FavoriteIcon/>,
  color:"#FF4842"

  },
  {name:"Gifting",
  icon:<RedeemIcon />,
  color:"blue"

  },
 
  {name:"Marketing",
  icon:<StorefrontIcon />,
  color:"#FFC107"
  },
];

// ----------------------------------------------------------------------

TaskItem.propTypes = {
  task: PropTypes.string,
  checked: PropTypes.bool,
  formik: PropTypes.object,
};

function TaskItem({ task, checked, formik, ...other }) {
  const { getFieldProps } = formik;

  return (
    <List >
      <ListItem style={{paddingTop:2,paddingBottom:2}}>
        <ListItemAvatar>
          <Avatar style={{backgroundColor:`${task.color}`,height:"2.3rem",width:"2.3rem"}} >
          {task.icon}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={task.name} />
      </ListItem>
      <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
             <ControlCameraIcon/>
          </IconButton>
        </ListItemSecondaryAction>
    </List>
  );
}

export default function AppTasks() {
  const formik = useFormik({
    initialValues: {
      checked: [TASKS[2]],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { values, handleSubmit } = formik;

  return (
    <Card>
      <CardHeader title="Categories" />
      <Box sx={{ px: 2,  }}>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            {CATEGORIES.map((task) => (
              <TaskItem
                key={task}
                task={task}
                formik={formik}
                checked={values.checked.includes(task)}
              />
            ))}
          </Form>
        </FormikProvider>
      </Box>
    </Card>
  );
}
