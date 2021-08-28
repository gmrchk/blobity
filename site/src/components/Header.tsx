import React from 'react';
import styled from 'styled-components';
import github from '../images/github.svg';

const Wrapper = styled.header`
    display: block;
    position: fixed;
    text-align: center;
    width: 100%;
    padding: 20px;
    z-index: 10;
`;

const Holder = styled.nav`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ListItem = styled.li`
    display: inline-block;
    margin: 0 0 0 20px;
`;

const Link = styled.a`
    display: block;

    img {
        display: block;
    }
`;

export const Header = () => {
    return (
        <Wrapper>
            <Holder>
                <div></div>
                <List>
                    <ListItem>
                        <Link href="#installation">Installation</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="#customize">Customize</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="#pricing">Pricing</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="#faq">FAQ</Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href="https://github.com/gmrchk/blobity"
                            data-blobity-radius="20"
                            data-blobity-magnetic="false"
                        >
                            <img src={github} alt="Github" />
                        </Link>
                    </ListItem>
                </List>
            </Holder>
        </Wrapper>
    );
};
