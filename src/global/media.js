import {css} from "styled-components"

export const LARGE_DESKTOP = 1200
export const DESKTOP = 992
export const TABLET = 768
export const PHONE_LANDSCAPE = 576
export const PHONE = 376


const sizes = {
  largeDesktop: `${LARGE_DESKTOP - 1}px`,
  desktop: `${DESKTOP - 1}px`,
  tablet: `${TABLET - 1}px`,
  phoneLandscape: `${PHONE_LANDSCAPE - 1}px`,
  phone: `${PHONE - 1}px`
}


const minWidthsizes = {
  largeDesktop: `${LARGE_DESKTOP}px`,
  desktop: `${DESKTOP}px`,
  tablet: `${TABLET}px`,
  phoneLandscape: `${PHONE_LANDSCAPE}px`,
  phone: `${PHONE}px`
}


/** Match bootstrap's media queries, they work mobile first */
export const minWidthMedia = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${minWidthsizes[label]}) {
      ${css(...args)}
    }
  `
  return acc
}, {})


// Iterate through the sizes and create a media template
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}) {
      ${css(...args)}
    }
  `
  return acc
}, {})
