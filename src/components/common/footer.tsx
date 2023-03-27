import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Virtual Store
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel
                        tristique lacus. Sed eget mauris risus. Donec luctus, dolor vel
                        faucibus sollicitudin, nibh augue bibendum quam, in suscipit est
                        lacus quis ligula.
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Links
                    </Typography>
                    <ul>
                        <li>
                            <Typography variant="body2" color="text.secondary">
                                home
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body2" color="text.secondary">
                                Categories
                            </Typography>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Contact
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Calle Falsa 123, Springfield
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Tel: (555) 555-5555
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Email: info@virtualstore.com
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant="body2" color="text.secondary" align="center">
                &copy; {new Date().getFullYear()} Virtual Store. Todos los derechos reservados.
            </Typography>
        </Box>
    );
};

export default Footer;
