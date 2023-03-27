import { Box, Divider, Typography } from '@mui/material';
import PriceFilter from '../shopping/priceFilter';

function Sidebar() {
    return (
        <Box sx={{ width: 240 }}>
            <Typography variant="h6" sx={{ px: 2, py: 2 }}>
                price filter
            </Typography>
            <Divider />
            <PriceFilter />
        </Box>
    );
}

export default Sidebar;