
import { makeStyles } from "@material-ui/core/styles";
import Image from "../assets/diana.jpg"
export const aboutStyles = makeStyles(theme => ({
    root: {
      height: "100vh"
    },
    image: {
      backgroundImage: `url(${Image})`,
      backgroundRepeat: "no-repeat",
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    paper: {
      margin: theme.spacing(30, 4,15,15),
      display: "flex",
      flexDirection: "column"
    }
  }));