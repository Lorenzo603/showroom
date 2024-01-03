'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';

export default function HamburgerMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (anchor) => {
        setAnchorEl(null);
        if (anchor !== "") {
            scrollTo(anchor);
        }
    };

    function scrollTo(hash) {
        location.hash = "";
        location.hash = "#" + hash;
    }

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Image
                    src="/img/hamburger.svg"
                    width={40}
                    height={40}
                    alt="Menu open"
                    className="hamburger-image"
                />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose("")}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => handleClose("home")}>Home</MenuItem>
                <MenuItem onClick={() => handleClose("about")}>About</MenuItem>
                <MenuItem onClick={() => handleClose("projects")}>Projects</MenuItem>
            </Menu>
        </div>
    );
}