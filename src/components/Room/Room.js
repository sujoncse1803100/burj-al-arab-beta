import * as React from 'react';
import './Room.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import WcIcon from '@mui/icons-material/Wc';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const Room = ({ room }) => {

    const history = useHistory()
    const handleBook = (bedType) => {
        history.push(`/book/${bedType}`);
    }

    return (
        <Card sx={{ maxWidth: 345 }} >

            <CardHeader
                avatar={
                    <Avatar className={{ backgroundColor: red[500] }}>
                        {room.avatar}
                    </Avatar>
                }

                title={room.title}
            />

            <CardMedia
                component="img"
                height="140"
                image={room.imgUrl}
                alt="green iguana"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {room.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <LocalHotelIcon />: {room.bed}
                </IconButton>
                <IconButton aria-label="share">
                    <WcIcon />: {room.capacity}
                </IconButton>
                <IconButton aria-label="price">
                    <AttachMoneyIcon />: {room.price}
                </IconButton>
                <Button
                    onClick={() => handleBook(room.bedType)}
                    variant="contained"
                    className="bookButton"
                    color="success"
                >
                    Book
                </Button>
            </CardActions>
        </Card>

    );
};

export default Room;