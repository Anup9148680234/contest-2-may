import React from 'react';

const TableRow = ({ data }) => {
console.log(data);
  const { name, id, image, symbol, current_price, total_volume ,ath_change_percentage, market_cap
 } = data;

  return (
    <tr>
      <td><img src={image} alt={name} style={{ width: '20px', height: '20px' }} /> {name}</td>
      <td className='symbol'>{symbol}</td>
      <td>${current_price}</td>
      <td>${total_volume.toLocaleString('en', {useGrouping:true})}</td>
      <td style={{color:{ath_change_percentage}>0?"green":"red"}}>{ath_change_percentage.toFixed(2)}%</td>
      <td>Mkt Cap: ${market_cap.toLocaleString('en', {useGrouping:true})}</td>
    </tr>
  );
};

export default TableRow;