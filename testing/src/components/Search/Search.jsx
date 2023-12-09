

const Search = ({ value, onChange, children='Search', placeholder='search...'}) => {
    return(
        <label>
            {children}
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </label>
    )
}

export default Search