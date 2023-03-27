import { Box, Slider, Typography } from '@mui/material';
import { useState } from 'react';

function PriceFilter() {
    const [value, setValue] = useState([20, 80]);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ px: 2, py: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
                Minimal price: ${value[0]}
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                min={0}
                max={100}
                step={1}
                sx={{ mb: 2 }}
            />
            <Typography variant="subtitle1" gutterBottom>
                Maximun price: ${value[1]}
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                min={0}
                max={100}
                step={1}
                sx={{ mb: 2 }}
            />
        </Box>
    );
}

export default PriceFilter;