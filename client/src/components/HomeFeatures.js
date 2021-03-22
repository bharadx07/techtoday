import React from 'react'
import { Icon} from '@iconify/react';
import websiteIcon from '@iconify/icons-el/website';
import cursorHandClickLine from '@iconify/icons-clarity/cursor-hand-click-line';

function HomeFeatures() {
    return (
        <div className="home-features">
            <h1>Features</h1>
            <section>
            <Icon icon={cursorHandClickLine} style={{color: '#cb4745', fontSize: '100px'}} className="icon"/>
                <div>
                    <h1>Once Click Away</h1>
                    <p>Though you can view quick snippets, and bits of information regarding current news, and jobs, you are allways one click way from seeing the entire story</p>
                </div>
            </section>
            <section>
            <Icon icon={websiteIcon} style={{color: '#cb4745', fontSize: '55px'}} className="icon"/>
                <div>
                    <h1>Clean User Interface</h1>
                    <p>TechToday has a clean User Interace that allows you to find the information you need without trouble or confusion</p>
                </div>
            </section>
        </div>
    )
}

export default HomeFeatures
