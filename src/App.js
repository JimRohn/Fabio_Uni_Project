import "./App.css";
import{BrowserRouter,Routes,Route} from "react-router-dom";
import React from "react";
import SearchAppBar from "./components/SearchAppBar";
import Tour from "./pages/Tour";
import  Home  from "./pages/Home";
import DataGridDemo from "./components/UserListGrid";
import UserProfile from "./pages/UserProfile";
import PermanentDrawerLeft from "./components/NavBar";
import NavBar from "./components/NavBar";
import {  Box, Container, CssBaseline, Toolbar, } from "@mui/material";
import AppBarSimple from "./components/AppBarSimple";
import { TestPage } from "./pages/TestPage";

function App() {
  const drawerWidth = 240;


  
  return (

    
    <BrowserRouter>


   <SearchAppBar />
   <PermanentDrawerLeft />




    

    


      <Box component="main" sx={{ flexGrow: 1, p: 3, width: `calc(100% - ${drawerWidth}px)`, marginLeft: `${drawerWidth}px` }}>
        <Toolbar /> {/* This pushes content down below AppBar */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/users" element={<DataGridDemo />} />
          <Route path="/user-profile/:id" element={<UserProfile />} />
          <Route path="/test-page" element={<TestPage />} />
          <Route path="/tours" element={<Tour />} />
          {/* ... other routes */}
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;