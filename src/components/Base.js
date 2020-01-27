import React from 'react';
import {Col, Container, Jumbotron, Row} from 'react-bootstrap';
import Filter from './Filter.jsx';
import OrderList from './OrderList'
import facilities from '../data/facilities';
import orderList from '../data/orderList';
class Base extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            // 絞り込み条件
            filter: {
                from: "0",
                to: "0",
                maxLike: 0,
                amount: false,
                safety: false,
                speed: false,
                hiddenCleared: false,
            },
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
                        <Filter facilities={facilities.data} filtered={this.state.filter} onChange={this.updateFormData.bind(this)}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <OrderList order={orderList.data} facilities={facilities.data} filter={this.state.filter}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Base;