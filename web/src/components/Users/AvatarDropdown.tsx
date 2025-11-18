import { Avatar, Box, Menu, MenuItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

interface AvatarDropdownProps {
    fullname: string;
    onLogout: () => void;
}

export default function AvatarDropdown(props: AvatarDropdownProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <IconButton onClick={handleClick}>
                <Avatar alt={props.fullname} />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={props.onLogout}>Logout</MenuItem>
            </Menu>
        </Box>
    )
}