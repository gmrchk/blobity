import React, { useMemo, useRef } from 'react';
import styled from 'styled-components';
import github from '../images/github.svg';
import { Button } from './Button';
import Scrl from 'scrl';

const Wrapper = styled.header`
    display: block;
    position: fixed;
    text-align: center;
    width: 100%;
    padding: 20px;
    z-index: 10;

    ${Button} {
        margin: 0 auto;
        padding: 10px 10px;
    }
`;

const Holder = styled.nav`
    max-width: 1440px;
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
    vertical-align: middle;
    height: 36px;
    line-height: 36px;

    &:last-child {
        margin: 0 0 0 40px;
    }
`;

const Link = styled.a`
    display: inline-block;
    line-height: 36px;
    height: 36px;
    vertical-align: middle;

    img {
        width: 36px;
        height: 36px;
        display: inline-block;
    }
`;

export const Header = () => {
    const scrl = useRef();

    const scrollTo = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        if (!scrl.current) {
            scrl.current = new Scrl();
        }

        // @ts-ignore
        history.replaceState(null, document.title, event.target.hash);

        // @ts-ignore
        scrl.current.scrollTo(
            // @ts-ignore
            document.getElementById(event.target.hash.replace('#', ''))
        );
    };

    return (
        <Wrapper>
            <Holder>
                <div></div>
                <List>
                    <ListItem>
                        <Link onClick={scrollTo} href="/#customize">
                            Customize
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link onClick={scrollTo} href="/#installation">
                            Installation
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link onClick={scrollTo} href="/#pricing">
                            Pricing
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link onClick={scrollTo} href="/#faq">
                            FAQ
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href="https://github.com/gmrchk/blobity"
                            data-blobity-radius="22"
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
