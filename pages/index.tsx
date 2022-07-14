import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import { StocksSearchField } from '../components/StocksSearchField';
import { useState } from 'react';

export default function Home() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      <div className='justify-center flex  pt-16'>
        <StocksSearchField
          placeholder='Search for a stock'
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </div>

      <div className='flex flex-col lg:flex-row lg:space-x-4 pb-24'>
        <div className='basis-2/3'>
          <Card>some content</Card>
        </div>
        <div className='basis-1/3 pt-10 lg:pt-0'>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
