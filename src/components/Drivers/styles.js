import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  opt: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    margin: "20px",
    color: "white",
  },
  sel: {
    color: "#006F62",
  },
  head: {
    margin: "20px",
    background: " #006F62",
    color: "white",
    border: "1px solid ",
    borderRadius: "20px",
    padding: "10px",
  },
  table: {},
  button: {
    border: "2px solid #F596C8",
    borderRadius: "40px",
    color: "white",
    background: "#F596C8",
    width: "50%",
    marginTop: "15px",
    "&:hover": {
      color: "#006F62",
      background: "white",
    },
   
  },
  tableHead: {
    background: "rgba(220,220,220, 0.5)",
  },
  header: {
    background: " #006F62",
    color: "white",
    padding: "10px",
    borderRadius: "20px",
    marginBottom: "10px",
  },
}));
