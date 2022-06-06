import * as React from 'react';
import Box from '@mui/material/Box';
import {createTheme, IconButton} from "@mui/material";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import { Typography } from '@mui/material';
import {ThemeProvider} from "@emotion/react";
import RectangleOutlinedIcon from '@mui/icons-material/RectangleOutlined';
import CallMadeIcon from '@mui/icons-material/CallMade';

export default function VerticalTabs() {
    const theme = createTheme();

    theme.typography.h3 = {
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.4rem',
        },
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}
                 mt={10}
                 ml={15}
            >
                <IconButton
                    color={"secondary"}
                    onClick={() => handleChange}
                >
                    <AccessibilityIcon
                        style={{fontSize: 60, color: 'black'}}
                    />
                </IconButton>
                <ThemeProvider theme={theme}>
                    <Typography
                        variant="h5"
                        color={"black"}
                        ml={1.5}
                    >
                        Role
                    </Typography>
                </ThemeProvider>
            </Box>

            <Box
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                mt={10}
                ml={12}
            >
                <Box
                ml={3}
                >
                    <IconButton
                        color={"secondary"}
                        onClick={() => handleChange}>
                        <CloudQueueIcon
                            style={{fontSize: 60, color: 'black'}}
                        />
                    </IconButton>
                </Box>
                <ThemeProvider theme={theme}>
                    <Typography
                        variant="h5"
                        color={"black"}
                    >
                        Quality goal
                    </Typography>
                </ThemeProvider>
            </Box>

            <Box
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                mt={10}
                ml={10}
            >
                <Box
                    ml={5}
                >
                    <IconButton
                        color={"secondary"}
                        onClick={() => handleChange}

                    >
                        <RectangleOutlinedIcon
                            style={{fontSize: 60, color: 'black'}}
                        />
                    </IconButton>
                </Box>
                <ThemeProvider theme={theme}>
                    <Typography
                        variant="h5"
                        color={"black"}
                    >
                        Functional goal
                    </Typography>
                </ThemeProvider>
            </Box>

            <Box
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                mt={10}
                ml={9}
            >
                <Box
                    ml={5.5}
                >
                    <IconButton
                        color={"secondary"}
                        onClick={() => handleChange}

                    >
                        <CallMadeIcon
                            style={{fontSize: 60, color: 'black'}}
                        />
                    </IconButton>
                </Box>
                <ThemeProvider theme={theme}>
                    <Typography
                        variant="h5"
                        color={"black"}
                        ml={3}
                    >
                        Connection
                    </Typography>
                </ThemeProvider>
            </Box>
        </Box>
    );
}
