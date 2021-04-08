import React from 'react'

import { 
    headerBanner,
    headerBanner__content
 } from './SiteBanner.module.css'

const SiteBanner = () => (
    <div className={headerBanner} role="banner">
        <div className={headerBanner__content}>
            <h1>Super Save Slot</h1>
            <div role="decoration">
                <div>Yes</div>
                <div>No</div>
            </div>
        </div>
    </div>
)

export default SiteBanner
