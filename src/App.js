import { Link, Outlet } from "react-router-dom";
import "./style.css";
import { TextField } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import SampleTable from './sampleTable.json';

import { Container, fontSize } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";


import Box from "@mui/material/Box";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import FormControlLabel from '@mui/material/FormControlLabel';

export function App() {
  return (
    <div>
      <Nav />
      <div>
        <Outlet />
      </div>

    </div>

  );
}

export function Nav() {
  return (
    <>
      {/* <AppBar className="AppBar">
        <Link to="/" element={<App />}></Link>
        <ul>
          <li><Link to="/Task1" element={<Task1 />} style={{ color: "aliceblue", fontSize: "24px" }}>Task1</Link></li>
          <li> <Link to="/Task2" element={<Task2 />} style={{ color: "aliceblue", fontSize: "24px" }}>Task2</Link></li>
          <li><Link to="/Task3" element={<Task3 />} style={{ color: "aliceblue", fontSize: "24px" }}>Task3</Link></li>
          <li><Link to="/Task4" element={<Task4 />} style={{ color: "aliceblue", fontSize: "24px" }}>Task4</Link></li>
          <li><Link to="/Task5" element={<Task5 />} style={{ color: "aliceblue", fontSize: "24px" }}>Task5</Link></li>
        </ul>
      </AppBar> */}
    </>
  )
}
export function Task1() {

  return (
    <><p> This is Task1</p>
      <div><TableContainer>
        <TableHead><TableRow>
          <TableCell>User Id</TableCell>
          <TableCell>User Name</TableCell>
          <TableCell>User Email</TableCell>
          <TableCell>User Gender</TableCell>
          <TableCell>User Mobile</TableCell>
        </TableRow></TableHead>
        <TableBody>
          {SampleTable.map((item, id) => (
            <TableRow>
              <TableCell >{item.id}</TableCell>
              <TableCell >{item.name}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.gender}</TableCell>
              <TableCell align="right">{item.mobile}</TableCell>
            </TableRow>,
            <TableRow>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.gender}</TableCell>
              <TableCell align="right">{item.mobile}</TableCell>
            </TableRow>,
            <TableRow>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.gender}</TableCell>
              <TableCell align="right">{item.mobile}</TableCell>
            </TableRow>,
            <TableRow>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.gender}</TableCell>
              <TableCell align="right">{item.mobile}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer></div>
    </>
  )
}

export function Task5() {
  return (

    <><p> this is Task5</p>

    </>

  )
}
export function Task4() {
  return (

    <p> this is Task4</p>

  )
}
export function Task3() {
  return (

    <p> this is Task3</p>

  )
}

export function Task2() {
  return (

    <>
      {/* <Container maxWidth="md"> */}

      {/* <Typography align="center" variant="h2">Login Form</Typography> */}

      <Grid container spacing={2}>
        <Grid item md={6} sm={12}>
          <Typography variant="h6">Login Form</Typography>
        </Grid>
        <Grid item md={6} sm={12}>
          <Typography variant="h6">Login Form</Typography>
        </Grid>

      </Grid>
      {/* <Grid item xs={12} sm={6} lg={6} md={6}  >
            <Typography variant="h6">Login Form</Typography>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={6} md={6} >
            <Typography variant="h6">Login Form</Typography>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} >
            <Typography variant="h6">Login Form</Typography>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} >
            <Typography variant="h6">Login Form</Typography>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="shipping address-line2"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Login Form</Typography>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} >
            <Typography variant="h6">Login Form</Typography>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} >
            <Typography variant="h6">Login Form</Typography>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} >
            <Typography variant="h6">Login Form</Typography>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>

          </Grid> */}
      {/* </Grid> */}
      {/* </Container> */}

    </>
  );
}


export default App;

