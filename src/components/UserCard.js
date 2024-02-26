// UserCard.js
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

export default function UserCard({ user }) { // Accept user prop
  console.log(user);
    return (
    <Card
      variant="outlined"
      sx={{
        width: 320,
        overflow: 'auto',
        resize: 'horizontal',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Avatar src={user.avatar} size="lg" /> {/* Use dynamic data */}
        {/* Removed AvatarGroup for simplicity, add it back if needed with dynamic data */}
      </Box>
      <CardContent>
        <Typography level="title-lg">{user.name}</Typography> {/* Use dynamic data */}
        <Typography level="body-sm">
          {user.description} {/* Use dynamic data */}
        </Typography>
      </CardContent>
      <CardActions buttonFlex="0 1 120px">
        <IconButton variant="outlined" color="neutral" sx={{ mr: 'auto' }}>
          <FavoriteBorder />
        </IconButton>
        <Button variant="outlined" color="neutral">
          View
        </Button>
        <Button variant="solid" color="primary">
          Join
        </Button>
      </CardActions>
    </Card>
  );
}
