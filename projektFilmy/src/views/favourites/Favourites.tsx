import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import {favouritesSelector} from "../../store/selectors/favourites.selector";
import {useSelector} from "react-redux";
import {useService} from "../../hooks/useService";
import {FavouriteMovieService} from "../../services/favourite.service";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {IMovieProps} from "../../services/movies.service";

const useStyles = makeStyles({
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
        padding: '15px',
    },
    container: {
    //     display: "flex",
    //     flexDirection: "row",
    //     justify: "center",
    //     alignItems: "center",
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    }
});

const Favourites = () => {
    const classes = useStyles();
    const favourites = useSelector(favouritesSelector);
    const favouriteMovieService = useService(FavouriteMovieService);

    const handleDeleteFilm = (movie : IMovieProps) => {
        favouriteMovieService.deleteMovie(movie);
    };

    return (
        <div>
            <NavPanel />
            <div className={classes.container}>
                {!!favourites.favourites && favourites.favourites.map(movie => (
                    <div className={classes.card}>
                        <Card key={movie.id} className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Typography> {movie.title}</Typography>
                                <Typography> {movie.year}</Typography>
                                <Typography>
                                    <img src={movie.poster}
                                         alt={movie.title}/>
                                </Typography>
                                <button onClick={() => handleDeleteFilm(movie)}>
                                    Delete
                                </button>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favourites;