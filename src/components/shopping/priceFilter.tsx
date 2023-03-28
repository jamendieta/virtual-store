import { Box, Slider, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

function PriceFilter(props: any) {
    const [value, setValue] = useState([0, 0]);
    const [max, setMax] = useState(0);
    const [min, setMin] = useState(0);

    useEffect(() => {
        debugger;
        setValue([props.minimalPrice, props.maximunPrice]);
        setMin(props.minimalPrice);
        setMax(props.maximunPrice);
        console.log(props);
    }, [props])

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ px: 2, py: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
                Minimal price: ${value[0]}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Maximun price: ${value[1]}
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                min={min}
                max={max}
                step={1}
                sx={{ mb: 2 }}
            />
        </Box>
    );
}

export default PriceFilter;