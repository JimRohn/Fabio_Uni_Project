import { Container, Grid, Typography } from "@mui/material";
import TourCard from "../components/CourseCard";
import PrimarySearchAppBar from "../components/SearchAppBar";
import courses from "../data.json";
import { ReactDOM } from "react";
import React from "react";
import Box from "@mui/material/Box";
import CourseCard from "../components/CourseCard";


const Learning = () => (
  <Box   component="main" marginLeft={'500'}
  sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, }}>


 
        {" "}
        {/*The Container component centres the content horizontally */}
        {courses.map((course) => (
          <>
        
            <Typography
              variant="h4"
              component="h2"
              marginTop={3}
              marginBottom={3}
            >
              Top {course.name} Tours
            </Typography>
            <Grid container spacing={4}>
              {course.course_list.map((course, index) => 
                <CourseCard  course={course} key={index} />
              )}
            </Grid>
          </>
        ))}
    </Box>
);
export default Learning;