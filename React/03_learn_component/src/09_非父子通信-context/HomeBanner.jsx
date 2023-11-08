import React, { memo } from 'react'
import ThemeContext from './context/theme-context'

const HomeBanner = memo(() => {
  return (
    <div>
      <span>HomeBanner</span>
      <ThemeContext.Consumer>
        {
          value => {
            return <h2>{value.color}</h2>
          }
        }
      </ThemeContext.Consumer>
    </div>
  )
})

export default HomeBanner