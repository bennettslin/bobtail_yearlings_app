import { getMapFromPageConfigs } from '../../../utils/pages/config'
import { ESSAYS_PAGE } from '../../../constants/pages'

export const pageConfigs = [
    {
        id: `the-case-for-yearlings-bobtail`,
        title: `The case for *Yearling's Bobtail*`,
        date: { year: 2023, month: 2 },
    },
    {
        id: `why-todays-music-is-worse`,
        title: `Why today's music is worse`,
        date: { year: 2023, month: 2 },
    },
]

export const pagesMap = getMapFromPageConfigs({
    topLevelPage: ESSAYS_PAGE,
    pageConfigs,
})