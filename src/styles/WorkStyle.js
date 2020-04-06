import { makeStyles } from "@material-ui/core/styles";
export const workStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"

  },
  cardMedia: {
    paddingTop: "70%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
  
}));
