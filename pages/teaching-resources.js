import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar2 from '../components/navbar2'
import NotFound1 from '../components/not-found1'

const TeachingResources = (props) => {
  return (
    <>
      <div className="teaching-resources-container">
        <Head>
          <title>Teaching-Resources - Chilly Intent Kudu</title>
          <meta
            property="og:title"
            content="Teaching-Resources - Chilly Intent Kudu"
          />
        </Head>
        <Navbar2
          link1={
            <Fragment>
              <span className="teaching-resources-text1">Home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="teaching-resources-text2">
                Teaching Resources
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="teaching-resources-text3">Blog</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="teaching-resources-text4">Contact</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="teaching-resources-text5">Legal</span>
            </Fragment>
          }
          link1Url="/"
          link2Url="/teaching-resources"
          rootClassName="navbar2root-class-name"
        ></Navbar2>
        <NotFound1
          text={
            <Fragment>
              <span className="teaching-resources-text6">Coming Soon</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="teaching-resources-text7">
                This section of the website is still under development.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="teaching-resources-text8">
                Teaching Resources
              </span>
            </Fragment>
          }
        ></NotFound1>
      </div>
      <style jsx>
        {`
          .teaching-resources-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .teaching-resources-text1 {
            display: inline-block;
          }
          .teaching-resources-text2 {
            display: inline-block;
          }
          .teaching-resources-text3 {
            display: inline-block;
          }
          .teaching-resources-text4 {
            display: inline-block;
          }
          .teaching-resources-text5 {
            display: inline-block;
          }
          .teaching-resources-text6 {
            display: inline-block;
            font-size: 28px;
          }
          .teaching-resources-text7 {
            display: inline-block;
          }
          .teaching-resources-text8 {
            display: inline-block;
            font-family: 'Poppins';
          }
        `}
      </style>
    </>
  )
}

export default TeachingResources
