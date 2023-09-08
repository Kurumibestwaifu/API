import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../../../containers/store";
import { logout } from "../../../utilities/common";
import { styled } from "styled-components";
import About from './../../../pages/About';

const drawerWidth = 240;

const ContainerBox = styled(Box)`
`;

const AppHeader = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isAuth = useAppSelector((state) => state.authReducer.isAuth);
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        
      </Typography>
      <Divider />
      {isAuth && (
        <List>
          
          <Button onClick={logoutHandler}>
            <ListItem key={"Đăng xuất"} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={"Đăng xuất"} />
              </ListItemButton>
            </ListItem>
          </Button>
        </List>
      )}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ContainerBox sx={{ display: "flex" }}>
      
    </ContainerBox>
  );
};

export default AppHeader;
