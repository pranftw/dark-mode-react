import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../App'

const Text = ({content}) => {
    const color = useContext(ThemeContext)['theme_settings']['colors']
    return (
        <h1 style={{color:color['color_0']}}>
            {content}
        </h1>
    )
}

export default Text