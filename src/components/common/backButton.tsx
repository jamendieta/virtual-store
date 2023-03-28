import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function BackButton() {
    const navigate = useNavigate();

    function handleGoBack() {
        navigate(-1);
    }
    return (
        <ArrowBackIcon onClick={handleGoBack} style={{cursor:'pointer'}}/>
    );
}


export default BackButton;