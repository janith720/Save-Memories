import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(3),
    backgroundColor: "#F7F9F9",
    boxShadow: "none",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
    padding: "10px",
    borderRadius: "30px",
    fontSize: "15px",
    fontWeight: "bold",
    boxShadow: "none",
  },
}));
