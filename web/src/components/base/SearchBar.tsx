import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TextFieldBox from './TextFieldBox';

export default function SearchBar() {
    return <TextFieldBox label="Search" icon={<SearchOutlinedIcon />} />;
}