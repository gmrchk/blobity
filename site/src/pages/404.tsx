import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Title } from '../components/Title';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { InlineCode } from '../components/Code';
import { useBlobity } from '../../../lib';
import { initiaBlobityOptions } from './index';

const NotFoundPage = () => {
    useBlobity(initiaBlobityOptions);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>404 | Page not found | Blobity</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="shortcut icon" href="/icon.png" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    // @ts-ignore copied from Google Fonts 🤷‍
                    crossOrigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <Section hero>
                <Title small>Page missing</Title>
                <Text>
                    You know what that means. It was removed, or never even
                    existed. Maybe someone played a mean joke on you.
                </Text>
                <Text>
                    In any way, don't worry, we got your back. Since you're
                    here, you can use <InlineCode>gotlost</InlineCode> code at
                    the checkout for 10 % discount.
                </Text>
                <Button href="/">Go back home</Button>
            </Section>
        </div>
    );
};

export default NotFoundPage;
