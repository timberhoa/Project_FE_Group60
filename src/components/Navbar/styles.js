import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    color: "white",
    boxShadow: "none",
    background: "#001524",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  toolbar:{
    background:"white",
    width:"-moz-max-content",
    height:"-webkit-fit-content"
  },
  dropDowd:{
    flex: 1,
    width: "max-content",
    height: "max-content",

  },
  button:{
    margin: "0 20px",
    padding: "20px 40px",
    fontSize: "78px"
  },
  buttonMenu:{
    backgroundColor: "white",
    padding: "10px 20px",
    borderRadius: "8px",
    textAlign: "center",
    fontSize: "94px",
    color: "white"
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    fontFamily: "Rale way",
    fontWeight: 600,
    letterSpacing: 1,
    textDecoration: "none",
    "&:hover": {
      color: "#ffff",
      boxShadow: "none",
    },
  },
  navContainer:{
    width:"2200px",
    height:"200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "white",
    marginTop: "20px"
  },
  titleName:{
    color:"darkgreen",
    fontSize:"xxx-large",
    marginLeft:"30px"
  },
  cartt: {
    marginLeft:"100px",
    "&:hover": {
      color: "#ffff",
      boxShadow: "none",
    },
  },
  image: {
    marginLeft: "70px",
    marginTop:"50px",
    marginBottom:"50px",
    width:"200px",
    height:"200px"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
