import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EmailField,
  EditButton,
  DeleteButton,
  useResourceContext,
  ChipField,
  UrlField,
  BooleanField,
  SimpleList,
} from 'react-admin'
import { makeStyles } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import classnames from 'classnames';

const useStyles = makeStyles({
    small: { color: 'green' },
    big: { color: 'red' },    
});

const colored = WrappedComponent => props => {
    const classes = useStyles();
    return (
        <WrappedComponent
            className={classnames({
                [classes.small]: props.record[props.source] === true,
                [classes.big]: props.record[props.source] === false,
            })}
            {...props}
        />
    )
};


const ColoredNumberField = colored(BooleanField);
// Ensure the original component defaultProps are still applied as they may be used by its parents (such as the `Show` component):
ColoredNumberField.defaultProps = NumberField.defaultProps;

const TodoList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List title="All users" {...props}>
    {isSmall ? (
        <SimpleList
            primaryText={record => record.id}
            tertiaryText={record => record.title}
        />
    ) : (
        <Datagrid>
        <TextField source='id' />
        <TextField source='title' />
        <ColoredNumberField source='completed' />
        </Datagrid>
    )}
</List>
  )
}

export default TodoList