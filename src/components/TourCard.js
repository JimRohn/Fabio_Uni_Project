import { AccessTime } from "@mui/icons-material";
import { Grid, Paper, Typography, Box, Rating, Container } from "@mui/material";

const TourCard = ({tour}) => {
  return (
    
    <Grid item xs={4} >
      <Paper elevation={3} variant="elevation">
        <img src={tour.image} alt="tour" className="img" />
        <Box padding={1}>
          
          <Typography variant="subtitle1" component="h2">
            {tour.name}
          </Typography>
        </Box>
        <Box padding={1} sx={{display:"flex"}} >
        <AccessTime sx={{width:"12.5"}}/>
            <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.duration} hours
            </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"} padding={3}>

            <Rating name="read-only" value={4.5}  precision={0.5}readOnly />
            <Typography variant="subtitle2" component="p" marginLeft={1}/>
                {tour.rating}
                <Typography />
                <Typography variant="subtitle2" component="p" marginLeft={1.5}/>
400 reviews
                <Typography />

        </Box>
        
      </Paper>
    </Grid>
  

    );

};
export default TourCard;
