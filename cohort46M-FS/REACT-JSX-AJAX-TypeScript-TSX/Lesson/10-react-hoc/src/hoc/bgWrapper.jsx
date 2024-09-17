export const bgWrapper = WrappedComponent => props => {
    const bg = {
        backgroundColor: 'grey'
    }
    return (
        <div style={bg}>
            <WrappedComponent {...props} />
        </div>
    )
}