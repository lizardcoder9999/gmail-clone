import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, Button, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { ArrowDropDown, Apps, Notifications } from "@material-ui/icons";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase/firebase";
import "./Header.css";

function Header() {
  const history = useHistory();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOutUser = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          onClick={() => history.push("/")}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hxTivNwDGbrCGe_7FJXOh1qEMF4FUsRBVg&usqp=CAU"
          alt="are logo"
        />
      </div>

      <div className="header__middle">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search mail" type="text" />
        <ArrowDropDown className="header__inputCaret" />
      </div>

      <div className="header__right">
        <Button onClick={() => signOutUser()}>Logout</Button>
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <Avatar src={user.user} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
