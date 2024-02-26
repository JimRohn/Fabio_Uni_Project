import { Box, Container, Typography } from "@mui/material";
import ImageCollage from "../components/ImageCollage";
import QuiltedImageList from "../components/ImageCollage";

const Tour = () => 

     <Container sx={{ width:800}}>
     <Typography marginTop={3} variant="h3" component="h1">welcome to the Tour Page</Typography>
     <Box marginTop={3} sx={{display:"flex" }} >
        <img src="https://picsum.photos/id/237/200/300
" alt="tour" height={365}  />
   <QuiltedImageList/>
     </Box>
     <Box>
<Typography variant="h4" component={"h2"} marginTop={1}>
About this ticket
</Typography>

<Typography variant="paragraph" component={"p"}>
lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc nec lacinia tincidunt, nunc nunc.
lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc nec lacinia tincidunt, nunc nunc.
lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc nec lacinia tincidunt, nunc nunc.
</Typography>



     </Box>
  
     </Container>
      



export default Tour;