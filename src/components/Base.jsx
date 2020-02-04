import React from 'react';
import {Col, Container, Jumbotron, Row} from 'react-bootstrap';
import Filter from './Filter.jsx';
import OrderList from './OrderList'
import facilities from '../data/facilities';
import orderList from '../data/orderList';
import storageApi from '../api/storage';

class Base extends React.Component
{
  constructor(props) {
    super(props);
    const store = new storageApi();
    this.state = {
      // 絞り込み条件
      filter: {
        from: "0",
        to: "0",
        amount: false,
        safety: false,
        speed: false,
        hiddenCleared: false,
      },
      cleared: store.load()
    };
  }

  /**
   * フォームデータ更新似合わせてstateも更新
   * @param {Event} e
   */
  updateFormData = (e) => {
    const name = e.target.name;
    const filter = this.state.filter;

    filter[name] = e.target.type === 'checkbox' ? e.target.checked:e.target.value;
    this.setState({filter: filter});
  }

  /**
   * フィルター条件の初期化
   */
  resetFilter = () => {
    const filter = {
      from: "0",
      to: "0",
      amount: false,
      safety: false,
      speed: false,
      hiddenCleared: false,
    };
    // フォームアイテムの初期化
    Object.keys(filter).map((value) => {
      const element = document.querySelector("[name="+value+"]");
      (element.type === 'checkbox') ? element.checked = filter[value] : element.value = filter[value];
      return null;
    });
    this.setState({filter: filter});
  }

  /**
   * 依頼クリア状態をstateに保存
   * @param
   */
  saveClearedStatus = (orderId, checked) => {
    const store = new storageApi();
    const index = (this.state.cleared.indexOf(orderId));

    if (checked && (index === -1)) { // チェックをつけたとき
      // stateに保存
      const after = this.state.cleared.concat([orderId]);
      this.setState({cleared: after}, () =>{store.save(this.state.cleared);});
    } else if(!checked && (index !== -1)) { // チェックを外した
      const after = this.state.cleared;
      after.splice(index, 1);
      this.setState({cleared: after}, () =>{store.save(this.state.cleared);});
    }
  }

    render() {
      return (
      <Container>
        <Row>
          <Col>
            <Jumbotron className="text-center cud-light-sky-blue ">
              <h1>配達依存症診断リスト</h1>
              <p>
                  配達リストは全部達成しなければ気がすまないそんなサム達へ
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <Filter facilities={facilities.data} filtered={this.state.filter} onChange={this.updateFormData.bind(this)} resetFilter={this.resetFilter.bind(this)}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <OrderList order={orderList.data} facilities={facilities.data} filter={this.state.filter} cleared={this.state.cleared} saveClearedStatus={this.saveClearedStatus.bind(this)}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Base;