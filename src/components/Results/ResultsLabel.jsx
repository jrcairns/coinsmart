const ResultsLabel = ({ amount, selected }) => {
    return (
        <div className="text-4xl font-bold">
            <p className="text-4xl font-bold">{amount} {selected}</p>
            <p>=</p>
        </div>

    )
}

export default ResultsLabel