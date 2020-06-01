import React from 'react';
import CommentsService, {IComments} from "../services/comments.service";
import {makeStyles} from "@material-ui/core/styles";
import {Card, CardContent, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles({
    navlink: {
        textDecoration: 'none',
    }
});

const Post = (props : any) => {
    const classes = useStyles();
    const [comments, setComments] = React.useState<IComments | null>();
    const id = props.match.params.id;

    React.useEffect(() => {
        CommentsService.getComments().then(resp => {
            if (resp) {
                setComments(resp);
            }
        });
    },[id]);

    return (
        <div>
            <h1>Komentarze do posta</h1>
            {!!comments?.comments && comments?.comments.map((comment : any) => (
                <Card key={comment.id}>
                    <CardContent>
                        <Typography>ID: {comment.id}  NAME: {comment.name}</Typography>
                        <Typography>CONTENT:<br/>{comment.body}</Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Post;