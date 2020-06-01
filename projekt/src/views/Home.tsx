import React, {useEffect, useState} from 'react';
import PostsService, {IPosts} from "../services/posts.service";
import {NavLink} from "react-router-dom";
import {Card, CardContent, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    navlink: {
        textDecoration: 'none',
    }
});

const Home = () => {
    const classes = useStyles();
    const [posts, setPosts] = useState<IPosts | null>();

    useEffect(() => {
        PostsService.getAllPosts().then(resp => {
            if (resp) {
                setPosts(resp);
            }
        });
    }, []);

    return (
        <div>
            <h1>Posty</h1>
            {!!posts?.posts && posts?.posts.map((post : any) => (
                <Card key={post.id}>
                    <NavLink to={`/post/${post.id}`} className={classes.navlink}>
                        <CardContent>
                            <Typography>ID: {post.id}  TITLE: {post.title}</Typography>
                            <Typography>USER ID: {post.userId}</Typography>
                            <Typography>CONTENT:<br/>{post.body}</Typography>
                        </CardContent>
                    </NavLink>
                </Card>
            ))}
        </div>
    );
};

export default Home;