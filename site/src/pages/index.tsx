import React from 'react';
import { useBlobity } from '../../../lib';
import './styles.css';
import { Helmet } from 'react-helmet';
import { Header } from '../components/Header';
import { Section } from '../components/Section';
import { Title } from '../components/Title';
import { Headline, Text } from '../components/Text';
import { Layout, Half } from '../components/Layout';
import { Button, Link } from '../components/Button';
import { Code, htmlCustomExample, reactExample } from '../components/Code';

export default () => {
    useBlobity({
        licenseKey: 'gmrchk',
        focusableElementsOffsetX: 5,
        focusableElementsOffsetY: 5,
        color: '#666666',
        dotColor: '#ff33dd',
        invert: false,
        focusableElements: 'a, button, [data-blobity-tooltip]',
        font: "'Montserrat','Source Sans Pro',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
        fontSize: 14,
        fontWeight: 400,
        opacity: 1,
        // zIndex: 10, mnhkjhk
        fontColor: '#ffffff',
    });

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Blobity | Level up your cursor game</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
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
            <Header />
            <Section hero>
                <Title>Blobity</Title>
                <Text>
                    Cursor is at the heart of interaction with the web. <br />{' '}
                    Take it to the next level.
                </Text>
            </Section>
            <Section id="customize">
                <Layout>
                    <Half>
                        <Headline>Customizable for every use case</Headline>
                        <Text>
                            Every website is different and so, Blobity has a
                            wide list of option to customize its behaviour. You
                            can find the full list of option in{' '}
                            <Link href="https://github.com/gmrchk/blobity#readme">
                                developer documentation
                            </Link>
                            , or submit a request for new one through{' '}
                            <Link href="https://github.com/gmrchk/blobity">
                                GitHub issues
                            </Link>{' '}
                            or at{' '}
                            <Link href="mailto:support@gmrchk.com">
                                support@gmrchk.com
                            </Link>
                            .
                        </Text>
                        <Button href="https://github.com/gmrchk/blobity#readme">
                            Developer documentation
                        </Button>
                    </Half>
                    <Half>
                        <Text>options here</Text>
                    </Half>
                </Layout>
            </Section>
            <Section id="installation">
                <Headline>Ridiculously easy to integrate</Headline>
                <Layout>
                    <Half>
                        <Code language="html">{htmlCustomExample}</Code>
                        <Text small>
                            or create instance manually to provide custom
                            options
                        </Text>
                        <Code language="html">{htmlCustomExample}</Code>
                    </Half>
                    <Half>
                        <Code language="jsx">{reactExample}</Code>
                    </Half>
                </Layout>
            </Section>
            <Section id="optimization">
                <Headline>Optimized AF</Headline>
                <Text>
                    Blobity is using all kinds of optimization techniques under
                    the hood, including making use of{' '}
                    <strong>HTML5 canvas</strong> for all it's rendering, or
                    scheduling frames though{' '}
                    <strong>requestAnimationFrame</strong>.
                </Text>
                <Text>
                    Fair to say, it should never get in the way of any of your
                    own code on the main thread.
                </Text>
            </Section>
            <Section id="pricing">
                <Headline>Pricing</Headline>
                <Text>
                    The pricing is simple - license is purchased per project, no
                    matter it's purpose or size. You can purchase unlimited
                    licenses.
                </Text>
                <Text>
                    One license can be used for one website / application,
                    regardless of the size or the team working on the project.
                    You are granted a license to use the SOFTWARE as the basis
                    of one application, so long as that application is owned and
                    operated by you, the LICENSEE, or is owned and operated by
                    clients of LICENSEE.
                </Text>
                <Text>
                    <Link href="https://github.com/sponsors/gmrchk">
                        GitHub sponsors of gmrchk
                    </Link>{' '}
                    can use this product without limits for as long as the
                    sponsorship is active.
                </Text>
                <Text>
                    For any special use case, please, contact{' '}
                    <Link href="mailto:support@gmrchk.com">
                        support@gmrchk.com
                    </Link>
                    .
                </Text>
            </Section>
            <Section id="faq">
                <Headline>FAQ</Headline>
            </Section>
        </div>
    );
};
