import React from 'react'
import RootElement from './src/components/RootElement';
import Layout from './src/components/Layout/Layout';

export const wrapRootElement = ({element}) => (
  <RootElement>
    {element}
  </RootElement>
  )

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}