import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';
import { useRecordContext } from 'react-admin';
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    DeleteButton,
    useResourceContext,
    ChipField,
  } from 'react-admin'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ProfileCard = (props) => {
    const { source } = props;
    const record = useRecordContext(props);
    return (
    //{ids.map((id) => (
    <Card  variant="outlined" >
      <CardContent>
        <TextField source='name'/>
      </CardContent>
      <CardActions>
        <Button size="small">View Grades</Button>
      </CardActions>
    </Card>
    )
};
ProfileCard.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
};

export default ProfileCard;
