declare module '*.css' {
  const styles: { [className: string]: string }
  export default styles
}

interface Theme {
  font: string,
  heading: string,
  text: string,
  textDark: string,
  textLink: string,
  surface: string,
  surfaceSecondary: string,
  surfaceTertiary: string,
  surfaceQuartiary: string,
  gray: string,
  graySecondary: string,
  grayTertiary: string,
  shadowAll: string,
  shadowBottom: string,
  blurple: string,
  blurpleSecondary: string,
  green: string,
  red: string
}

interface Configuration {
  theme?: string | Theme,
  placement?: string,
  uploadLimit?: number,
  zIndex?: number
}