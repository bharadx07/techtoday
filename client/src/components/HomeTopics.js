import React from 'react'
import { Icon } from '@iconify/react';
import bxCodeAlt from '@iconify/icons-bx/bx-code-alt';
import hardwareChip from '@iconify/icons-ion/hardware-chip';
import businessIcon from '@iconify/icons-ion/business';
import financeIcon from '@iconify/icons-map/finance';
import { Link } from 'react-router-dom';

function HomeTopics() {
    return (
        <div className="info-topics">
            <h1>Topics</h1>
            <h3>Explore information in Tech, Business and Other Related Fields</h3>
            <section>
                <div>
                <Icon icon={bxCodeAlt} style={{color: '#cb4745', fontSize: '69px'}} />
                <h1>Software</h1>

                </div>
                <div>
                <Icon icon={hardwareChip} style={{color: '#cb4745', fontSize: '69px'}} />
                <h1>Hardware</h1>

                </div>
            </section>
            <section>
                <div>
                <Icon icon={financeIcon} style={{color: '#cb4745', fontSize: '69px'}} />
                <h1>Finance</h1>

                </div>
                <div>
                <Icon icon={businessIcon} style={{color: '#cb4745', fontSize: '69px'}} />
                <h1>Business</h1>

                </div>
            </section>
            <h2><Link to='/login'>View All Topics ⇾</Link></h2>
        </div>
    )
}

export default HomeTopics
