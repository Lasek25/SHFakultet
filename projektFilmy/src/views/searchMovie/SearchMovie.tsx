import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import movieService, {IMovieProps, IMoviesProps} from '../../services/movies.service';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {NavLink} from "react-router-dom";


const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        marginBottom: '15px',
        width: '400px'
    },
    cardContent: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        border: 'solid 2px #3f51b5',
        padding: '15px',
    },
    input: {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px'
    },
    navlink: {
        textDecoration: 'none',
    }
});


const SearchMovie = () => {
    const classes = useStyles();
    const [movies, setMovies] = React.useState<IMoviesProps | null>(null);
    const [moviesById, setMoviesById] = React.useState<IMovieProps | null>(null);
    const [movieToSearch, setMovieToSearch] = React.useState('');

    React.useEffect(() => {
        movieService.searchByName(movieToSearch).then(resp => {
            if (resp) {
                setMovies(resp);
            }
        });
        movieService.searchById(movieToSearch).then(resp => {
           if(resp){
               setMoviesById(resp);
           }
        });

        //movieService.searchById('tt0848228');
    }, [movieToSearch]);


    return (
        <div>
            <NavPanel/>
            <div className={classes.container}>
                <div className={classes.input}>
                    <input
                        placeholder="Enter movie name or id..."
                        onChange={event => setMovieToSearch(event.target.value)}
                    />
                </div>
                <div className={classes.card}>
                    {!!movies?.movies.length &&
                    movies?.movies.map(movie => (
                        <Card key={movie.id} className={classes.card}>
                            <NavLink to={`/movie/${movie.id}`} className={classes.navlink}>
                                <CardContent className={classes.cardContent}>
                                    <Typography> {movie.title}</Typography>
                                    <Typography> {movie.year}</Typography>
                                    <Typography>
                                        <img src={movie.poster}
                                             alt={movie.title}/>
                                    </Typography>
                                </CardContent>
                            </NavLink>
                        </Card>
                    ))
                    }
                    {!!moviesById &&
                    <Card key={moviesById.id} className={classes.card}>
                        <NavLink to={`/movie/${moviesById.id}`} className={classes.navlink}>
                            <CardContent className={classes.cardContent}>
                                <Typography> {moviesById.title}</Typography>
                                <Typography> {moviesById.year}</Typography>
                                <Typography>
                                    <img src={moviesById.poster}
                                         alt={moviesById.title}/>
                                </Typography>
                            </CardContent>
                        </NavLink>
                    </Card>
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchMovie;