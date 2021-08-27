const CurrencySelect = ({ currencies, onChange, selected }) => {
    return (
        <div>
            <label className="block font-semibold text-sm mb-1">Currency</label>
            <select className="rounded-md w-full" value={selected} onChange={onChange}>
                {currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}
            </select>
        </div>
    )
}

export default CurrencySelect