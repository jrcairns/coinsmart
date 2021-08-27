const Loader = ({ isFetching, children }) => {
    return isFetching ? (
        <div className="text-center py-12">
            <span className="font-medium text-lg">Loading ...</span>
        </div>
    ) : (
        children || null
    )
}

export default Loader