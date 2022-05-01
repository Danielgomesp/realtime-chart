import React, { useEffect, useState } from 'react';

import Chart from 'components/Chart';
import GlobalContainer from 'components/GlobalContainer';
import Header from 'components/Header';
import ProductList from 'components/ProductList';

import createChartData from 'helpers/createChartData';
import createChartDot from 'helpers/createChartDot';
import useWebSocket from 'hooks/useWebSocket';
import { chartLines } from 'config/constants/chartLines';
import { ChartData } from 'model';

function Home() {
  const [lastProductsReceived, setLastProductsReceived] = useState([]);
  const [chartData, setChartData] = useState<ChartData>([]);

  useWebSocket(setLastProductsReceived);

  useEffect(() => {
    const chartDot = createChartDot(lastProductsReceived);
    const result = createChartData(chartDot, chartData);
    setChartData(result);
  }, [lastProductsReceived]);

  return (
    <>
      <Header />
      <GlobalContainer>
        <ProductList products={lastProductsReceived} />
        <Chart chartData={chartData} chartLines={chartLines} />
      </GlobalContainer>
    </>
  );
}

export default Home;
