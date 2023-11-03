const ItemListContainer = ({greeting}) => {
    const greetingStyle = {
        textAlign: 'center',
        fontSize: '60px',
        color: 'black',
        paddingTop: '90px',
    }
    return(
        <div style={greetingStyle}>
            {greeting}
        </div>
    )
}

export default ItemListContainer;