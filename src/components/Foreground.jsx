import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null)
    const data = [{
        desc: 'This is the Description of the card.You migth like the description',
        filesize: '.9mb',
        close: false,
        tag: { isOpen: true, tagTitle: 'Download now', tagColor: "blue" }
    },
    {
        desc: 'This is the Description of the card.You migth like the description',
        filesize: '.9mb',
        close: true,
        tag: { isOpen: false, tagTitle: 'Download now', tagColor: "blue" }
    },
    {
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        filesize: '.9mb',
        close: false,
        tag: { isOpen: true, tagTitle: 'Download Now', tagColor: "green" }
    },
    ];

    return (

        <div ref={ref} className='fixed top-0 left-0 w-full h-screen z-[3] flex flex-wrap gap-10 py-5 px-5'>
            {data.map((item, index) => (
                <Card data={item} reference={ref} />

            ))}
        </div>

    )
}

export default Foreground