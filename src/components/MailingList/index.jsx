import React from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import MailingListAnchor from './Anchor'
import FinePrint from '../FinePrint'
import { getFormattedText } from '../../utils/format'
import './style'

const MailingList = () => (
    <Flex
        {...{
            className: cx(
                'MailingList',
            ),
            flexDirection: 'column',
        }}
    >
        <MailingListAnchor />
        <FinePrint>
            {getFormattedText(
                `to our mailing list!`,
            )}
        </FinePrint>
    </Flex>
)

export default MailingList
