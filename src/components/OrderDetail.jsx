import React , { useState } from 'react';
import {Form} from 'react-bootstrap';

const OrderDetail = (props) => {
    // チェック状態持たせる
    const [isCleared, setClearedStatus] = useState(false);
    const facilities = props.facilities;
    const order = props.order;
    const filter = props.filter;

    /**
     * クリア済み依頼へのスタイル適用
     */
    const cleared = () => {
        return (isCleared ? 'cud-gray' : '') + ' ';
    }
    /**
     * フィルター条件に一致しないものを非表示にする
     */
    const hiddenFilter = () => {
        /**
         * クリア済み依頼を非表示
         */
        const hiddenCleared = () => {
            return ((filter.hiddenCleared && isCleared) ) ;
        };

        /**
         * 数量重視フィルターで非表示対象に合致したか
         */
        const hiddenByAmountFilter = () => {
            if (filter.amount === false) {
                return false;
            }
            return order.amount === 0
        };

        /**
         * 安全性重視フィルターで非表示対象に合致したか
         */
        const hiddenBySafetyFilter = () => {
            if (filter.safety === false) {
                return false;
            }
            return order.safety === 0
        };

        /**
         * 速度重視フィルターで非表示対象に合致したか
         */
        const hiddenBySpeedFilter = () => {
            if (filter.speed === false) {
                return false;
            }
            return order.speed === 0
        };

        /**
         * 受注拠点フィルターで非表示対象に合致したか
         */
        const hiddenByfromFilter = () => {
            if (filter.from === "0") {
                return false;
            }
            return (filter.from !== String(order.from));
        };

        /**
         * 配達先拠点フィルターで非表示対象に合致したか
         */
        const hiddenByToFilter = () => {
            if (filter.to === "0") {
                return false;
            }
            return (filter.to !== String(order.to));
        };
        return (hiddenByAmountFilter() || hiddenBySafetyFilter() || hiddenBySpeedFilter() || hiddenByfromFilter() || hiddenByToFilter() || hiddenCleared()) ? 'd-none ' : ' ';
    }

    return (
        <tr className={(cleared()) +  (hiddenFilter())} data-id={order.id} data-amount={order.amount} data-safety={order.safety} data-speed={order.speed}>
            <td><Form.Check name="cleared" onChange={(e)=>setClearedStatus(e.target.checked)}/></td>
            <td className="orderId">{order.id}</td>
            <td className="orderName text-left">{order.name}</td>
            <td className="faciliryName text-left from">{facilities[order.from].name}</td>
            <td className="faciliryName text-left from">{facilities[order.to].name}</td>
            <td>{order.max_likes}</td>
        </tr>
    );
}
export default OrderDetail;
