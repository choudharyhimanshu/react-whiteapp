import * as React from 'react';
import { Link } from 'react-router-dom';
import { Container, Icon, Menu } from 'semantic-ui-react';

export default class Navbar extends React.Component {

    render() {
        return (
            <Menu fixed='top'>
                <Container>
                    <Link className='item' to='/'>Home</Link>
                    <Link className='item' to='/example'>Example</Link>
                    <Menu.Item position='right'>
                        <Icon name='user secret' className='mr-1'/> james.bond@007.com
                        <Icon name='sign-out' className='ml-2'/><a>Logout</a>
                    </Menu.Item>
                </Container>
            </Menu>
        );
    }

}