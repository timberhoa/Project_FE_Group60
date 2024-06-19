import React, {useState} from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import useStyles from "./styles";
import { Menu, MenuItem, Button, ListItemText } from '@mui/material';
import { FaBars, FaChevronDown } from 'react-icons/fa';


const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar className={classes.toolbar}>

          <img
              src={logo}
              alt="Book Store App"
              height="50px"
              className={classes.image}
          />
          <div className={classes.titleName}>BOOKSHOP</div>
          <div className={classes.navContainer}>
            <div className={classes.dropDowd}>
              <Button classes={classes.buttonMenu}
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
              >
                <FaBars style={{marginRight: '20px'}}/>
                Danh mục sản phẩm
                <FaChevronDown style={{marginLeft: '20px'}}/>
              </Button>

              <Menu classes={classes.menu}
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <ListItemText primary="Sách ngoại ngữ"/>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemText primary="Sách IT"/>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemText primary="Sách chuyên ngành"/>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemText primary="Sách luyện thi"/>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemText primary="Sách Tiếng Hàn"/>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemText primary="Sách Tiếng Trung"/>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemText primary="Sách Tiếng Nhật"/>
                </MenuItem>
              </Menu>
            </div>

            <button>
              Trang Chủ
            </button>
            <button>
              Trang Chủ
            </button>
            <button>
              Trang Chủ
            </button>

            <div className={classes.button}>
              <IconButton
                  component={Link}
                  to="/cart"
                  aria-label="Show cart items"
                  color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart/>
                </Badge>
              </IconButton>
            </div>
          </div>


          {/*<div className={classes.grow}/>*/}

        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
