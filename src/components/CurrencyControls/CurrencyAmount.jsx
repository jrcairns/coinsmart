const CurrencyAmount = ({ onChange, amount }) => {
    return (
        <div>
            <label className="block font-semibold text-sm mb-1">Amount</label>
            <input className="rounded-md w-full" type="number" value={amount} onChange={onChange} />
        </div>
    )
}

export default CurrencyAmount