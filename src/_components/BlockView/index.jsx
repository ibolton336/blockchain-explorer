import * as React from "react";
import { Button, Card, Icon, Input } from "semantic-ui-react";
import "./BlockView.css"
export class BlockView extends React.Component {
    render() {
        const { block } = this.props;
        return (
            <div className="block-card-container">
                <Card className="block-card">
                    <Card.Content>
                        <Card.Header>Block index: {block.block_index}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Hash: {block.hash}</span>
                        </Card.Meta>
                        <Card.Description>
                            <div>Height: {block.height}</div>
                            <div>Time: {block.time}</div>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        {block.txIndexes ?
                            <a>
                                <Icon name='server' />

                                {block.txIndexes.length} Transactions
                            </a>

                            : null}
                        {block.tx ?
                            <a>
                                <Icon name='server' />

                                {block.tx.length} Transactions
                            </a>

                            : null}

                    </Card.Content>
                </Card>
            </div>
        )
    }
}

