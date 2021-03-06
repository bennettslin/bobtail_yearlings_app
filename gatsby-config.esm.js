import { GA_ACCOUNT } from './src/constants/analytics'
import {
    getFaviconFileName,
    getS3BucketName,
} from './src/utils/server'

export default {
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: GA_ACCOUNT,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Bobtail Yearlings`,
                short_name: `Bobtail Yearlings`,
                description: 'Website for the band Bobtail Yearlings',
                start_url: '/',
                background_color: '#e6e6ad',
                theme_color: '#b38e6b',
                display: 'standalone',
                icon: `src/assets/favicon/${getFaviconFileName()}.png`,
            },
        },
        `gatsby-plugin-postcss`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-remove-trailing-slashes`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: getS3BucketName(),
            },
        },
    ],
}
