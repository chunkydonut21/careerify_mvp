import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { SearchForm } from "./SearchForm";
import { DataDisplay } from "./DataDisplay";

const App = () => {
  return (
    <Router>
      {/* AppBar Component */}
      <AppBar position="static">
        <Toolbar>
          {/* IconButton with MenuIcon */}
          {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}

          {/* Title of the App */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} href="/">
            Careerify
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<SearchForm />} />
        <Route path="/user-profile" element={<DataDisplay />} />
      </Routes>
    </Router>
  );
};

export default App;
