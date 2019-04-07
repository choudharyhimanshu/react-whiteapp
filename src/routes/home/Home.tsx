import * as React from 'react';
import { Button, Container, Divider, Header, Placeholder } from 'semantic-ui-react';

export default class Home extends React.Component {

    render() {
        return(
            <Container className='pt-5'>
                <Header as='h1' size='huge' className='pt-2'>
                    Welcome, 007!
                </Header>
                <Divider className='pb-2'/>
                <Placeholder>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Paragraph>
                </Placeholder>
                <Button as='a' className='mt-2'>
                    Read More
                </Button>
            </Container>
        );
    }

}
