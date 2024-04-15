import StockListHeader from './StockListHeader.js';
import StockListItem from './StockListItem.js';
import StockListTotals from './StockListTotals.js';
import { Table } from 'reactstrap';

function StockList(props) {
  
  const sortedStockList = props.data.sort((a,b) => a.name < b.name ? -1 : 1); 
  
  return (
    <Table>
      <thead>
        <StockListHeader />
      </thead>
      <tbody>
        {
          sortedStockList.map((stock, idx) => <StockListItem key={idx} stock={stock} /> )
        }
      </tbody>
      <tfoot>
        <StockListTotals stocks={props.data} />
      </tfoot>
    </Table>
  );
}

export default StockList;
