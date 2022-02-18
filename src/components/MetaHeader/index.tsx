import Head from 'next/head';
import { FunctionComponent } from 'react';

interface MetaHeaderProps {
    title: string;
    description: string;
    image: string;
    // type: string;
    url: string;
    canonical?: string;
    keywords?: string;
}
const MetaHeader: FunctionComponent<MetaHeaderProps> = (props: MetaHeaderProps) => {
    const { title, description, image, url, canonical, keywords } = props;

    return (
        <Head>
            {/* <!-- Primary Meta Tags --> */}
            <title>{title}</title>
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <meta name='title' content={title} />
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords || ''} />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property='og:type' content='website' />
            <meta property='og:url' content={url} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:image' content={image} />

            {/* <!-- Twitter --> */}
            <meta property='twitter:card' content='summary_large_image' />
            <meta property='twitter:url' content={url} />
            <meta property='twitter:title' content={title} />
            <meta property='twitter:description' content={description} />
            <meta property='twitter:image' content={image} />
            {canonical && <link rel='canonical' href={canonical} />}
        </Head>
    );
};

export default MetaHeader;
