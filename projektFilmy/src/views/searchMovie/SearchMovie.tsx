import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import movieService, { IMoviesProps } from '../../services/movies.service';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignSelf: 'center'
    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        border: 'solid 2px lightBlue'
    },
    input: {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px'
    },
});


const SearchMovie = () => {
    const classes = useStyles();
    const [movies, setMovies] = React.useState<IMoviesProps | null>(null);
    const [movieToSearch, setMovieToSearch] = React.useState('');

    React.useEffect(() => {
        movieService.searchByName(movieToSearch).then(resp => {
            if (resp) {
                setMovies(resp);
            }
        });

        movieService.searchById('tt0848228');
    }, [movieToSearch]);


    return (
        <div>
            <NavPanel/>
            <div className={classes.container}>
                <div className={classes.input}>
                    <input
                        placeholder="Enter movie name"
                        onChange={event => setMovieToSearch(event.target.value)}
                    />
                </div>
                <Card className={classes.cardContainer}>
                    <CardContent className={classes.cardContainer}>
                        {!!movies?.movies.length &&
                        movies?.movies.map(movie => (
                            <TableRow key={movie.id} className={classes.card}>
                                <Typography> {movie.title}</Typography>
                                <Typography> {movie.year}</Typography>
                                <Typography>
                                    <img src={movie.poster}
                                         alt={movie.title}/>
                                </Typography>
                            </TableRow>
                        ))
                        }
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default SearchMovie;