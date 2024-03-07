import * as React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActions,
    Button,
    CardActionArea,
} from '@mui/material';
import JA17 from '../images/JA17.jpg';

export default function ActionAreaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={JA17}
                    alt="JA"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Josh Allen
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        He is undoubtedly the best QB in the NFL, and a national treasure.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}