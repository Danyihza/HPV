import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const Skeleton = (props) => (
  <ContentLoader 
    speed={0.5}
    width={280}
    height={220}
    viewBox="0 0 280 220"
    backgroundColor="#081d36"
    foregroundColor="#051221"
    style={{opacity: 0.5}}
    {...props}
  >
    <Rect x="6" y="192" rx="4" ry="4" width="254" height="5" /> 
    <Rect x="6" y="203" rx="3" ry="3" width="119" height="5" /> 
    <Rect x="3" y="4" rx="10" ry="10" width="270" height="183" />
  </ContentLoader>
)

export default Skeleton

