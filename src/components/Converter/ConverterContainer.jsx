import { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { queries, API_KEYS } from '../../api';

import { CURRENCIES } from '../../constants/currencies';
import CurrencySelect from '../CurrencyControls/CurrencySelect'
import CurrencyAmount from '../CurrencyControls/CurrencyAmount'
import ResultsLabel from '../Results/ResultsLabel'
import ResultsList from '../Results/ResultsList'
import ResultsLoader from '../Results/ResultsLoader'

const ConverterContainer = () => {
    const [selected, setSelected] = useState(CURRENCIES[0])
    const [results, setResults] = useState(null)
    const [amount, setAmount] = useState(1)

    const handleCurrencyChange = e => {
        setSelected(e.target.value)
    }

    const handleAmountChange = e => {
        setAmount(e.target.value)
    }

    const { data, isFetching } = useQuery([API_KEYS.COMPARE, {
        params: {
            fsym: selected,
            tsyms: CURRENCIES.filter(currency => currency !== selected).join(',')
        }
    }], queries.getCurrencyData);

    useEffect(() => {
        setResults(data)
    }, [data, selected])
    return (
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-xl mx-auto w-full">
            <div className="grid grid-cols-2 gap-4">
                <CurrencySelect onChange={handleCurrencyChange} selected={selected} currencies={CURRENCIES} />
                <CurrencyAmount onChange={handleAmountChange} amount={amount} />
            </div>
            <div>
                <div className="mt-8">
                    <ResultsLabel selected={selected} amount={amount} />
                    <ResultsLoader isFetching={isFetching}>
                        <ResultsList results={results} amount={amount} />
                    </ResultsLoader>
                </div>
            </div>
        </div>
    )
}

export default ConverterContainer