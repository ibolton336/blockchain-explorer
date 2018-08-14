import * as React from "react";
import { Button, Card, Icon, Input } from "semantic-ui-react";
import "./TransactionView.css"
export class TransactionView extends React.Component {
    render() {
        const { transaction} = this.props;
        return (
            <div className="block-card-container">
                <Card className="block-card">
                    <Card.Content>
                        <Card.Header>Index: {transaction.tx_index}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Hash: {transaction.hash}</span>
                        </Card.Meta>
                        <Card.Description>
                            <div>Height: {transaction.block_height}</div>
                            <div>Weight: {transaction.weight}</div>
                            <div>Size: {transaction.size}</div>
                            <div>Time: {transaction.time}</div>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

