import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Title } from '../components/Title';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { InlineCode } from '../components/Code';
import { Head } from '../components/Head';
import useBlobity from '../../../lib/useBlobity';
import { initiaBlobityOptions } from './index';

const NotFoundPage = () => {
    useBlobity(initiaBlobityOptions);

    return (
        <div>
            <Head title={'404 | Page not found | Blobity'} />
            <Section hero notFound>
                <Title small>Page not found</Title>
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
