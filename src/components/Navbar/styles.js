import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    color: "white",
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  toolbar:{
    background:"#ffffff",
    width:"-moz-max-content",
    height:"-webkit-fit-content"
  },
  dropDowd:{
    marginLeft:"100px",
    flex: 1,
    width: "max-content",
    height: "max-content",

  },
  searchs: {
    justifyContent: "center",
    display: "flex",
  },
  searchb: {
    backgroundColor: "white",
    height: "80%",
    width: "60%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #001524",
  },
  btn:{
    marginLeft:"190px",
    width:"200px",
    height:"70px",
    background: 'linear-gradient(45deg, #0000CD 30%,#00BFFF 90%)',
    border: 0,
    borderRadius: 50,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '0 30px',
    '&:hover':{
      backgroundColor:'linear-gradient(45deg, #00CED1 30%,#00FFFF 90%)'
    },
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
    width:"maxWidth",
    height:"100px",
    display: "flex",
    borderRadius: 50,
    marginLeft:"100px",
    border:"50px",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "#00BFFF",
    marginTop: "20px",
    color:"#199",
  },
  titleName:{
    color:"darkgreen",
    fontSize:"xxx-large",
    marginLeft:"30px"
  },
  cartt: {
    marginLeft:"100px",
    "&:hover": {
      color: "#157",
      boxShadow: "none",
    },
  },
  image: {
    marginLeft: "70px",
    marginTop:"10px",
    marginBottom:"10px",
    width:"100px",
    height:"100px"
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
