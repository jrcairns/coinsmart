
import { QueryClientProvider } from 'react-query';
import { queryClient } from './api';
import ConverterContainer from './components/Converter/ConverterContainer';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex bg-gray-100 px-4 items-center">
        <ConverterContainer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
