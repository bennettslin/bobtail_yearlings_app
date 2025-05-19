import React from 'react'
import cx from 'classnames'
import HeaderButton from '../HeaderButton'
import {
    BAND_PAGE,
    CONTACT_PAGE,
    LINKS_PAGE,
} from '../../../../constants/pages'
import './style'

const Menu = () => (
    <div
        {...{
            className: cx(
                'Menu',
            ),
        }}
    >
        <HeaderButton {...{ pagePath: BAND_PAGE }}>
            Band
        </HeaderButton>
        <HeaderButton {...{ pagePath: CONTACT_PAGE }}>
            Contact
        </HeaderButton>
        <HeaderButton {...{ pagePath: LINKS_PAGE }}>
            Links
        </HeaderButton>
    </div>
)

export default Menu
