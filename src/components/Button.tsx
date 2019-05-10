import React from 'react'
import classNames from 'classnames';
import { withStyles, Theme, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme | any) => ({
});

interface IProps extends WithStyles<typeof styles> {
    classes: any,
    open: boolean,
}

const Button = ({ classes, open }: IProps) => (
    <main
        className={classNames(classes.content, {
        [classes.contentShift]: open,
        })}
    >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
            Button.
        </Typography>
    </main>
)

export default withStyles(styles)(Button);