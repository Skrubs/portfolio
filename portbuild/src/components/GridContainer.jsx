import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Card from "./Card.jsx";
import officialPhoto from '../assets/officialPhoto.jpg';
import { LoremIpsum } from 'react-lorem-ipsum';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={5}>
                <Grid xs={6}>
                    <Item>
                        <img style={{borderRadius: 20}} src={officialPhoto} alt="Photos"></img>
                        <LoremIpsum p={5}/>
                    </Item>
                </Grid>
                <Grid xs={4}>
                    <Item><Card/></Item>
                </Grid>
                <Grid xs={4}>
                    <Item><Card/></Item>
                </Grid>
                <Grid xs={6}>
                    <h6>Name: {props.name}</h6>
                    <Item><Card/></Item>
                </Grid>
            </Grid>
        </Box>
    );
}
