import React from "react";
import { Button, Popover } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

import MainMenu from "../MainMenu/MainMenu";

const useStyles = makeStyles(theme => ({
  profileMenu: {
    "& > a > button": {
      margin: theme.spacing(1),
      marginLeft: "10%",
      width: "80%"
    },
    "& > a": {
      textDecoration: "none"
    },
    width: 200,
    display: "flex",
    flexDirection: "column"
  },
  popover: {
    pointerEvents: "none"
  },
  paper: {
    padding: theme.spacing(1)
  },
  profile: {
    padding: theme.spacing(1)
  }
}));

const ProfileMenu = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className={classes.profile}>
      <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        onClick={handleMenuClick}
      >
        <MainMenu className={classes.profileMenu} />
      </Popover>
    </div>
  );
};

export default ProfileMenu;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Popper from "@material-ui/core/Popper";
// import MainMenu from "../MainMenu/MainMenu";

// const useStyles = makeStyles(theme => ({
//   paper: {
//     border: "1px solid",
//     padding: theme.spacing(1),
//     backgroundColor: theme.palette.background.paper
//   }
// }));

// const ProfileMenu = () => {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = event => {
//     setAnchorEl(anchorEl ? null : event.currentTarget);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "simple-popper" : undefined;

//   return (
//     <div>
//       <button aria-describedby={id} type="button" onClick={handleClick}>
//         Toggle Popper
//       </button>
//       <Popper id={id} open={open} anchorEl={anchorEl}>
//         <MainMenu />
//       </Popper>
//     </div>
//   );
// };

// export default ProfileMenu;
