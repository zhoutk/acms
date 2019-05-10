import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import SendIcon from '@material-ui/icons/Send';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import MailIcon from '@material-ui/icons/Mail';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles';
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
        <List
        component="nav"
        subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
        className={classes.list}
      >
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText inset primary="Sent mail" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText inset primary="Drafts" />
        </ListItem>
        <ListItem button onClick={handleDrawerClose}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText inset primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="nav" disablePadding>
            <ListItem button >
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Starred" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
)

export default withStyles(styles)(SideBar);
