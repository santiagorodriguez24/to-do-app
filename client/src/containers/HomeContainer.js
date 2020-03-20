import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import { Jumbotron, Container, Row, Button } from 'reactstrap';

class HomeContainer extends Component {

    handleOnClick = () => {
        this.props.history.push('/todos');
    }

    render() {
        return (
            <AppFrame
                header={'Home'}
                body={
                    <div className='home-container'>
                        <Jumbotron fluid>
                            <Container fluid>
                                <h1 className="display-5">Welcome to the To Do App!</h1>
                                <p className="lead">Here you can create, edit and follow the progress status of pending tasks</p>
                                <hr className="my-4" />
                                <Row>
                                    <Button
                                        color="secondary"
                                        size="lg"
                                        block
                                        onClick={this.handleOnClick}
                                    >
                                        {'See the list of tasks.'}
                                    </Button>
                                </Row>
                            </Container>
                        </Jumbotron>
                    </div>
                }
            />
        );
    }
}

export default withRouter(HomeContainer);