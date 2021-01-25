import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const SkeletonLittle = (props) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={160}
    viewBox="0 0 300 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <Rect x="1" y="0" rx="5" ry="5" width="144" height="87" /> 
    <Rect x="148" y="10" rx="0" ry="0" width="149" height="12" /> 
    <Rect x="148" y="26" rx="0" ry="0" width="89" height="9" /> 
    <Rect x="1" y="93" rx="5" ry="5" width="144" height="87" /> 
    <Rect x="148" y="99" rx="0" ry="0" width="149" height="12" /> 
    <Rect x="148" y="116" rx="0" ry="0" width="89" height="9" />
  </ContentLoader>
)

export default SkeletonLittle

