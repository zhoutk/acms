import React from 'react'
import classNames from 'classnames';
import { withStyles, Theme, WithStyles } from '@material-ui/core/styles';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Button from './Button'
import NotFound from './NotFound'

const styles = (theme: Theme | any) => ({
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -theme.drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    }
});

interface IProps extends WithStyles<typeof styles> {
    classes: any,
    open: boolean,
}

const MainBoard = ({ classes, open }: IProps) => (
    <main
        className={classNames(classes.content, {
        [classes.contentShift]: open,
        })}
    >
        <div className={classes.drawerHeader} />
        
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/button" component={Button} />
            <Route component={NotFound} />
        </Switch>

    </main>
)

export default withStyles(styles)(MainBoard);