import { Theme } from '@material-ui/core';

interface ITopBarOwnProps {
    classes: any;
}
interface ITopBarStateProps {
    theme: Theme;
}

export type ITopBarProps = ITopBarOwnProps & ITopBarStateProps;

export interface ITopBarState {
}
