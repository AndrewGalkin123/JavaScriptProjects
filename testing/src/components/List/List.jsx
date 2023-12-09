

const List = ({items = []}) => {
    if(!items.length) return null

    return(
        <ul>
            {
                items.map(item => <li key={item}>{item}</li>)
            }
        </ul>
    )
}

export default List