import { makeStyles } from "@material-ui/core/styles";

export const useMenuStyles = makeStyles(theme => ({
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(3),
    flexShrink: 0
  }
}));
