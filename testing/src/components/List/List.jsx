

const List = ({items = []}) => {
    if(!items.length) return null

    return(
        <ul className="list">
            {
                items.map(item => <li key={item}>{item}</li>)
            }
        </ul>
    )
}

export default List