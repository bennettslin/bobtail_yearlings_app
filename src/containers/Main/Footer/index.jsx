import React from 'react'
import cx from 'classnames'
import Flex from '../../../components/Flex'
import MailingList from '../../../components/MailingList'
import './style'

const MainFooter = () => (
    <Flex
        {...{
            className: cx(
                'MainFooter',
            ),
        }}
    >
        <MailingList />
    </Flex>
)

export default MainFooter
