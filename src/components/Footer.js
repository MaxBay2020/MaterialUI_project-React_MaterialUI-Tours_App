import React from 'react';
import BottomNavigation from "@mui/material/BottomNavigation";
import Paper from "@mui/material/Paper";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BasicModal from "./BasicModal";

const Footer = () => {
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation>
                <BasicModal />
            </BottomNavigation>
        </Paper>
    );
};

export default Footer;
