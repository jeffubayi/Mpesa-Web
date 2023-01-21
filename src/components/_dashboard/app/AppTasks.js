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

import ControlCameraIcon from '@material-ui/icons/ControlCamera';

// ----------------------------------------------------------------------

const TASKS = [
  "Entertainment",
  "Financial",
  "Transport",
  "Education",
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
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText primary={task} secondary={"mpesa services"} />
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
            {TASKS.map((task) => (
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
