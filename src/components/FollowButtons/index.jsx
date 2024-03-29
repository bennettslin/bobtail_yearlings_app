import React from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import './style'

const FollowButtons = () => (
    <Flex
        {...{
            className: cx(
                'FollowButtons',
            ),
            flexDirection: 'column',
            alignItems: 'normal',
        }}
    >
        <label>Follow the Bobtail Yearlings:</label>
        <Flex
            {...{
                className: cx(
                    'FollowButtons__buttons',
                ),
                justifyContent: 'normal',
            }}
        >
        </Flex>
    </Flex>
)

export default FollowButtons
