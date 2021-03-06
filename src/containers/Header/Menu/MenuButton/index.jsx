import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../../../components/Button'
import './style'

const MenuButton = ({ pageLink, children }) => (
    <Button
        {...{
            className: cx(
                'MenuButton',
                'Rancho',
            ),
            pageLink,
        }}
    >
        {children}
    </Button>
)

MenuButton.propTypes = {
    pageLink: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
}

export default MenuButton
