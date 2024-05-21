import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <AppBar position="fixed" background="transparent">
      <Toolbar style={{ minHeight: "80px" }}>
        <Typography
          variant="h6"
          className={classes.title}
          style={{ fontSize: "32px", fontWeight: "800", marginLeft:"5px" }}
        >
          
          मजदूर रोजगार
        </Typography>
        <div style={{ marginTop: "20px" }}>
          {isAuth() ? (
            userType() === "recruiter" ? (
              <>
                <Button color="inherit" onClick={() => handleClick("/home")}>
                  <Typography style={{ fontSize: "18px" }}>घर</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/addjob")}>
                  <Typography style={{ fontSize: "18px" }}>नौकरियां जोड़ें</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                  <Typography style={{ fontSize: "18px" }}>की तैनाती</Typography>
                </Button>
                <Button
                  color="inherit"
                  onClick={() => handleClick("/employees")}
                >
                  <Typography style={{ fontSize: "18px" }}>
                  कर्मचारी
                  </Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  <Typography style={{ fontSize: "18px" }}>प्रोफ़ाइल</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  <Typography style={{ fontSize: "18px" }}>लॉग आउट</Typography>
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={() => handleClick("/home")}>
                  <Typography style={{ fontSize: "18px" }}>घर</Typography>
                </Button>
                <Button
                  color="inherit"
                  onClick={() => handleClick("/applications")}
                >
                  <Typography style={{ fontSize: "18px" }}>लागू</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  <Typography style={{ fontSize: "18px" }}>प्रोफ़ाइल</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  <Typography style={{ fontSize: "18px" }}>लॉग आउट</Typography>
                </Button>
              </>
            )
          ) : (
            <>
              <Button color="inherit" onClick={() => handleClick("/login")}>
                <Typography style={{ fontSize: "18px" }}>लॉग इन करें</Typography>
              </Button>
              <Button color="inherit" onClick={() => handleClick("/signup")}>
                <Typography style={{ fontSize: "18px" }}>साइन अप करें</Typography>
              </Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
