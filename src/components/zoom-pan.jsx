import React from 'react'
import ReactDOM from 'react-dom'
import { UncontrolledReactSVGPanZoom } from 'react-svg-pan-zoom'
import {
  ReactSvgPanZoomLoader,
  SvgLoaderSelectElement,
} from 'react-svg-pan-zoom-loader'

export const Viewer = () => (
  <ReactSvgPanZoomLoader
    src='\random_forest.svg'
    proxy={
      <>
        <SvgLoaderSelectElement
          selector='#maturetree'
          onClick={(e) => alert('Tree')}
        />
      </>
    }
    render={(content) => (
      <UncontrolledReactSVGPanZoom
        width={500}
        height={500}>
        <svg
          width={500}
          height={500}>
          {content}
        </svg>
      </UncontrolledReactSVGPanZoom>
    )}
  />
)
