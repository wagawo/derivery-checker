import React  from 'react';
import { Table } from 'react-bootstrap';
import OrderDetail from './OrderDetail';

/**
 * 依頼リストコンポーネント
 * @param {*} props
 */
const OrderList = (props) => {
    /**
     * リスト生成.
     */
    const createTableRecord = () => {
      return props.order.map((row, index) => {
        return (
          <OrderDetail facilities={props.facilities} order={row} filter={props.filter} key={index} cleared={props.cleared} saveClearedStatus={props.saveClearedStatus}/>
        )
      })
    }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>id</th>
          <th>依頼名</th>
          <th>from</th>
          <th>to</th>
          <th>Max Like</th>
        </tr>
      </thead>
      <tbody>
        {createTableRecord()}
      </tbody>
    </Table>
  );
};
export default OrderList;
