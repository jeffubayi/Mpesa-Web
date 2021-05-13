import * as React from 'react';
import { useListContext, List, TextField, DateField, ReferenceField, EditButton,DeleteButton } from 'react-admin';
import { Card, CardActions, CardContent, CardHeader, Avatar } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

const cardStyle = {
    width: 300,
    minHeight: 300,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top',
    border: '1px solid #e600ac"'
};
const CommentGrid = () => {
    const { ids, data, basePath } = useListContext();
    return (
        <div style={{ margin: '1em' }}>
        {ids.map(id =>
            <Card key={id} style={cardStyle}>
                <CardContent>
                    <TextField record={data[id]} source="body" />
                </CardContent>
                <CardContent>
                    <ReferenceField label="Post" resource="comments" record={data[id]} source="post_id" reference="posts" basePath={basePath}>
                        <TextField source="name" />
                        <TextField source="title" />
                    </ReferenceField>
                </CardContent>
                <CardActions style={{ textAlign: 'right' }}>
                    <EditButton resource="posts" basePath={basePath} record={data[id]} />
                    <DeleteButton resource="posts" basePath={basePath} record={data[id]} />
                </CardActions>
            </Card>
        )}
        </div>
    );
};

 const CommentList = (props) => (
    <List title="All comments" {...props}>
        <CommentGrid />
    </List>
);
export default CommentList
