const ResultsList = ({ results, amount }) => {
    return (
        <div className="grid md:grid-cols-2 text-sm mt-4">
            {results && Object.keys(results).map((result) => (
                <div key={result}>
                    <span className="text-gray-500 mr-1 font-medium">{result}</span>
                    <span>{amount * results[result]}</span>
                </div>
            ))}
        </div>
    )
}

export default ResultsList