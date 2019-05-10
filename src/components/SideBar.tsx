import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles';
import Menu from './Menu';
import { direction } from '../themes/default';

const styles = (theme: Theme | any) => ({
    list: {
      width: '100%',
      maxWidth: theme.drawerWidth - 60,
      backgroundColor: theme.palette.background.paper,
    },
    drawer: {
      width: theme.drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: theme.drawerWidth,
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
    open: boolean,
    handleDrawerClose: () => void
  }

const SideBar = ({ open, handleDrawerClose, classes }: IProps) => (
    <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
        paper: classes.drawerPaper,
        }}
    >
        <div className={classes.drawerHeader}>
        <IconButton onClick={ handleDrawerClose }>
            {direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
        </div>
        <Divider />
        <Menu />
    </Drawer>
)

export default withStyles(styles)(SideBar);
