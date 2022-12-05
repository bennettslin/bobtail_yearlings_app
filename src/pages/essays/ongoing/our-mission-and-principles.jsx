import React from 'react'
import Page from '../../../containers/Page'
import { pagesMap } from '../../../content/essays/ongoing'

const id = 'our-mission-and-principles'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            body: `
*Updated November 2022*

### The band mission

**The Bobtail Yearlings are an interdependent band— *not* an indie one! We're here to lead the interdependence revolution by demonstrating the possibilities for craftsmanship and innovation exclusively offered by interdependence.**

### Our guiding principles

##### Interdependence

Blah

##### Emotional intelligence

Blah

##### Member compensation

Blah

##### Member responsibilities

Blah

##### Future growth

Blah
    `,
        }}
    />
)

export default Component