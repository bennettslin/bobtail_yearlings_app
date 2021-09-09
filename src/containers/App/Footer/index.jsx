import React from 'react'
import cx from 'classnames'
import './style'

const AppFooter = () => (
    <div
        {...{
            className: cx(
                'AppFooter',
            ),
        }}
    >
        {`© ${new Date().getFullYear()} Dogies Almondine Records`}
    </div>
)

export default AppFooter
