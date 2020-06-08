import React from 'react';
import {Drawer, ListItemIcon, ListItemText, MenuItem, MenuList} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import {NavLink} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import SearchMovie from "../../views/searchMovie/SearchMovie";
import StarIcon from '@material-ui/icons/Star';

const makeClasses = makeStyles((theme: Theme) => ({
    drawerContent: {
        margin: '20px',
    }
}));

interface IDrawerComponentProps {
    shouldBeOpen: boolean,
}

const DrawerComponent: React.FC<IDrawerComponentProps> = ({ shouldBeOpen }) => {
    const classes = makeClasses();
    const [isOpen, setIsOpen] = React.useState(false);
    const history = useHistory();
    const redirectTo = (path: string, name: string) => <div onClick={() => history.push(path)}>{name}</div>;
    return (
        <div>
            <Drawer
                open={isOpen || shouldBeOpen}
                onClose={() => setIsOpen(false)}
            >
                <div className={classes.drawerContent}>
                    <MenuList>
                        <MenuItem component={NavLink} to='/'>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </MenuItem>
                        <MenuItem component={NavLink} to='/movie'>
                            <ListItemIcon>
                                <MovieIcon />
                            </ListItemIcon>
                            <ListItemText primary='Movie'/>
                        </MenuItem>
                        <MenuItem component={NavLink} to='/search'>
                            <ListItemIcon>
                                <SearchIcon />
                            </ListItemIcon>
                            <ListItemText primary='Search Movie'/>
                        </MenuItem>
                        <MenuItem component={NavLink} to='/favourites'>
                            <ListItemIcon>
                                <StarIcon />
                            </ListItemIcon>
                            <ListItemText primary='Favourites'/>
                        </MenuItem>
                    </MenuList>
                    {/*<li>{redirectTo('/', 'Home')}</li>*/}
                    {/*<li>{redirectTo('/movie', 'Movie')}</li>*/}
                    {/*<li>{redirectTo('/search', 'Search Movie')}</li>*/}
                </div>
            </Drawer>
        </div>
    );
};

export default DrawerComponent;
