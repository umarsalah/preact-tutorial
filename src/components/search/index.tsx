import { Input } from 'antd';

const SearchBar = ({ search, setSearch }) => {
    const handleChange = (e: any) => {
        setSearch(e.target.value)
    }

    return <Input
        placeholder="search todos"
        onChange={handleChange}
        value={search}
    />;
}

export default SearchBar;