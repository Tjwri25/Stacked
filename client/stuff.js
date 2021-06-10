// import React, { useContext, useState, useEffect } from "react";
// import TextField from "@material-ui/core/TextField";
// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import API from "../../utils/API";
// import { useHistory } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import { Redirect } from "react-router-dom";

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     "& .MuiTextField-root": {
// //       margin: theme.spacing(1),
// //       width: "25ch",
// //     },
// //   },
// // }));

// export default function LoginForm() {
//   let history = useHistory();
//   const classes = useStyles();
//   const [formObject, setFormObject] = useState({});

//   useEffect(() => {}, []);

//   ///clean this up
//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormObject({
//       ...formObject,
//       [name]: value,
//       error: false,
//       errortext: false,
//       pass: false,
//       passtext: false,
//     });
//   }

//   function handleLogin(event) {
//     event.preventDefault();
//     API.checkUser(formObject.email).then((res) => {
//       if (res.data == null) {
//         setFormObject({
//           ...formObject,
//           error: true,
//           errortext: "Invalid Username or password",
//         });
//       if (validateUser(formObject.email, formObject.password) === true) {
//         API.saveUser({
//           first: formObject.first,
//           last: formObject.last,
//           email: formObject.email,
//           password: formObject.password,
//         })
//           .then((res) => {
//             let url = "/dashboard";
//             history.push(url);
//           })
//           .catch((err) => console.log(err));
//       }
//     });
//   }

//   function validateUser() {
//     return true;
//   }

//   const authContext = useContext(AuthContext);
//   const [signInSuccess, setSignInSuccess] = useState();
//   const [signInError, setSignInError] = useState();
//   const [redirectOnSignIn, setRedirectOnSignIn] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // eslint-disable-next-line no-unused-vars
//   const [remember, setRemember] = useState(false);

//   const submitCredentials = async (credentials) => {
//     try {
//       const url = "/api/auth";
//       const fetchResponse = await fetch(url, {
//         method: "POST", // *GET, POST, PUT, DELETE, etc.
//         mode: "cors", // no-cors, *cors, same-origin
//         cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: "same-origin", // include, *same-origin, omit
//         headers: {
//           "Content-Type": "application/json",
//           // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: "follow", // manual, *follow, error
//         referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify(credentials), // body data type must match "Content-Type" header
//       });

//       const data = await fetchResponse.json();
//       console.log(data);
//       authContext.setAuthState(data);
//       setSignInSuccess(data.message);
//       setSignInError(null);
//       setTimeout(() => {
//         setRedirectOnSignIn(true);
//       }, 700);
//     } catch (error) {
//       setSignInError(error.message);
//       setSignInSuccess(null);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     submitCredentials({ email, password });
//   };

//   return (
//     <>
//       {redirectOnSignIn && <Redirect to="/dashboard" />}
//       <form
//         className={classes.root}
//         noValidate
//         autoComplete="off"
//         onSubmit={handleSubmit}
//       >
//         <div>
//           <TextField
//             name="email"
//             label="Email Address"
//             onChange={(e) => setEmail(e.target.value.trim())}
//             error={formObject.error}
//             helperText={formObject.errortext}
//           />{" "}
//           <br />
//           <TextField
//             name="password"
//             label="Password"
//             onChange={(e) => setPassword(e.target.value.trim())}
//             type="password"
//             autoComplete="current-password"
//           />{" "}
//           <br />
//         </div>
//         <Button
//           type="submit"
//           variant="contained"
//           // disabled={!(formObject.email && formObject.password)}
//         >
//           Login
//         </Button>
//       </form>
//     </>
//   );
// }