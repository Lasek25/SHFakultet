import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import movieService, {IMovieProps} from "../../services/movies.service";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, TableCell, TableRow} from "@material-ui/core";
import {useService} from "../../hooks/useService";
import {FavouriteMovieService} from "../../services/favourite.service";
import {useSelector} from "react-redux";
import {favouritesSelector} from "../../store/selectors/favourites.selector";

const useStyles = makeStyles({
    poster: {
        display: 'flex',
        marginTop: '10px',
        marginBottom: '10px',
        flexDirection: 'column',
    },
    button: {
        marginTop: '15px'
    },
});

const Movie = (props:any) => {
    const classes = useStyles();
    const [movie, setMovie] = React.useState<IMovieProps | null>();
    const id = props.match.params.id;
    const favouriteMovieService = useService(FavouriteMovieService);
    const favourites = useSelector(favouritesSelector);

    React.useEffect(() => {
        movieService.searchById(id).then(resp => {
            if (resp) {
                setMovie(resp);
            }
        });
    },[id]);

    const handleAddFilm = (movie : IMovieProps) => {
        favouriteMovieService.addMovie(movie);
    };

    return (
        <div>
            <NavPanel />
            {!!movie &&
                <div>
                    <Grid container justify='center' alignItems='center'>
                        <Grid item md={5} className={classes.poster} justify='center' alignItems='center'>
                            <img src={movie.poster}
                                 alt={movie.title}
                            />
                            <button onClick={() => handleAddFilm(movie)} className={classes.button}>
                                Add to favourites
                            </button>
                        </Grid>
                        <Grid item md={7}>
                            <TableRow>
                                <TableCell><b>Title:</b></TableCell>
                                <TableCell>{movie.title}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><b>Genre:</b></TableCell>
                                <TableCell>{movie.genre}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><b>Director:</b></TableCell>
                                <TableCell>{movie.director}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><b>Writer:</b></TableCell>
                                <TableCell>{movie.writer}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><b>Production:</b></TableCell>
                                <TableCell>{movie.production}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><b>Released:</b></TableCell>
                                <TableCell>{movie.releaseDate}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><b>Age rating:</b></TableCell>
                                <TableCell>{movie.production}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><b>Awards:</b></TableCell>
                                <TableCell>{movie.awards}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><b>Rated:</b></TableCell>
                                <TableCell>{movie.rating}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><b>Votes:</b></TableCell>
                                <TableCell>{movie.votes}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><b>Actors:</b></TableCell>
                                <TableCell>{movie.actors}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><b>Plot:</b></TableCell>
                                <TableCell>{movie.plot}</TableCell>
                            </TableRow>
                        </Grid>
                    </Grid>
                </div>
            }
        </div>
    );
};

export default Movie;