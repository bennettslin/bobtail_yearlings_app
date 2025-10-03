import React, { Fragment, useContext } from 'react'
import cx from 'classnames'
import PageConfigContext from '../../../contexts/PageConfig'
import ContactEmail from '../../../components/ContactEmail'
import Markdown from '../../../components/Markdown'
import Heading from '../../../components/Heading'
import Flex from '../../../components/Flex'
import { getHeaderFromDate } from '../../../utils/format/dates'
import './style'

const Body = () => {
    const {
        pageHeading,
        titleHeading,
        title,
        date,
        body,
        showContactEmail,
    } = useContext(PageConfigContext)

    const pageTitle = pageHeading || titleHeading || title

    return (
        <Flex
            {...{
                className: cx(
                    'Body',
                ),
                flexDirection: 'column',
                justifyContent: 'normal',
                alignItems: 'normal',
                gap: 'lg',
            }}
        >
            <Flex
                {...{
                    flexDirection: 'column',
                    alignItems: 'normal',
                    gap: 'sm',
                }}
            >
                {pageTitle && (
                    <Markdown>
                        {`# ${pageTitle}`}
                    </Markdown>
                )}
                <Heading {...{ level: 5 }}>
                    {getHeaderFromDate(date)}
                </Heading>
            </Flex>
            {body && (
                (Array.isArray(body) ? body : [body])
                    .map((child, index) => (
                        typeof child === 'string' ? (
                            <Markdown {...{ key: index, fontSize: 'md' }}>
                                {child}
                            </Markdown>
                        ) : <Fragment {...{ key: index }}>
                            {child}
                        </Fragment>
                    ))
            )}
            {showContactEmail && (
                <ContactEmail />
            )}
        </Flex>
    )
}

export default Body
