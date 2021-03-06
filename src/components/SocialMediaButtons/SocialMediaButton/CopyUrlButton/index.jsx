import React, { useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import ReactTooltip from 'react-tooltip'
import SocialMediaButton from '../'
import Svg from '../../../Svg'
import copyUrl from '../../../../assets/svgs/copyUrl'
import copyUrlCopied from '../../../../assets/svgs/copyUrlCopied'
import { mapSelectedPage } from '../../../../redux/page/selector'
import { getEncodedUrl } from '../../../../constants/pages'
import './style'

const TOOLTIP_TEXT = 'link copied!'

const CopyUrlButton = () => {
    const
        buttonRef = useRef(),
        copiedUrlRef = useRef(),
        selectedPage = useSelector(mapSelectedPage),
        [isCopied, setIsCopied] = useState(false),
        [copyTimeoutId, setCopyTimeoutId] = useState(-1)

    copiedUrlRef.current = isCopied

    const resetCopiedUrlKey = () => {
        if (copiedUrlRef.current) {
            setIsCopied(false)
        }
    }

    const handleButtonClick = () => {
        navigator.clipboard.writeText(getEncodedUrl(selectedPage))

        clearTimeout(copyTimeoutId)
        setIsCopied(true)

        setCopyTimeoutId(setTimeout(
            resetCopiedUrlKey,
            1500,
        ))
    }

    useEffect(() => {
        if (isCopied) {
            ReactTooltip.show(buttonRef.current)
        } else {
            ReactTooltip.hide(buttonRef.current)
        }
    }, [isCopied])

    return (
        <SocialMediaButton
            isTooltipSuccess
            {...{
                ref: buttonRef,
                className: cx(
                    'CopyUrlButton',
                ),
                ...isCopied && {
                    tooltipId: selectedPage,
                    tooltipText: TOOLTIP_TEXT,
                },
                handleButtonClick,
                handleTooltipHide: resetCopiedUrlKey,
            }}
        >
            <Svg
                {...{
                    src: isCopied ? copyUrlCopied : copyUrl,
                }}
            />
        </SocialMediaButton>
    )
}

export default CopyUrlButton
