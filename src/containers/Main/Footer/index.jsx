import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import { CSSTransition } from 'react-transition-group'
import Flex from '../../../components/Flex'
import MailingList from '../../../components/MailingList'
import StyledFrame from '../StyledFrame'
import YearlingsBobtailUpsell from './YearlingsBobtailUpsell'
import './style'

const MainFooter = () => {
    const [didMount, setDidMount] = useState(false)

    useEffect(() => {
        setTimeout(() => setDidMount(true), 0)
    }, [])

    return (
        <CSSTransition
            appear
            {...{
                in: didMount,
                timeout: 200,
                classNames: {
                    enterDone: 'shown',
                },
            }}
        >
            <StyledFrame
                {...{
                    className: cx(
                        'hidden',
                    ),
                }}
            >
                <Flex
                    {...{
                        className: cx(
                            'MainFooter',
                        ),
                        justifyContent: 'spaceBetween',
                        alignItems: 'normal',
                        gap: 'sm',
                    }}
                >
                    <Flex
                        {...{
                            className: cx(
                                'MainFooter__social',
                            ),
                            flexDirection: 'column',
                            justifyContent: 'spaceEvenly',
                            flexGrow: 1,
                            gap: 'sm',
                        }}
                    >
                        <MailingList />
                    </Flex>
                    <YearlingsBobtailUpsell />
                </Flex>
            </StyledFrame>
        </CSSTransition>
    )
}

export default MainFooter
