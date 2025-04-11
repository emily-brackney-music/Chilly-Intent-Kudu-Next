import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Hero1 from '../components/hero1'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Chilly Intent Kudu</title>
          <meta property="og:title" content="Chilly Intent Kudu" />
        </Head>
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-container2">
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <div className="home-buttons1"></div>
            </div>
            <nav className="home-links1">
              <span>Home</span>
              <Link href="/teaching-resources">
                <a className="home-link">Teaching Resources</a>
              </Link>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="home-logo"
                />
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links2">
                <span className="home-text11">About</span>
                <span className="home-text12">Features</span>
                <span className="home-text13">Pricing</span>
                <span className="home-text14">Team</span>
                <span className="home-text15">Blog</span>
              </nav>
              <div className="home-buttons2">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon16">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon18">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-container3">
          <span className="home-text16">Mrs. Brackney&apos;s Music Room</span>
        </div>
        <Hero1
          content1={
            <Fragment>
              <span className="home-text17">
                <span>
                  Emily Brackney recently completed her 25th year in Lewisville
                  ISD in Texas, where she is the lead elementary music
                  specialist. She has taught the past 21 years at Forest Vista
                  Elementary in Flower Mound, where she teaches Pre-Kindergarten
                  through 5th grade students and directs the Forest Vista Chimes
                  and Choir, a 2020 Texas Music Educators Association Elementary
                  Invited Choir. She has presented sessions at both the TMEA and
                  Texas Choral Directors Association conventions. Mrs. Brackney
                  has served as both an assistant director and lead coordinator
                  of the LISD Fifth Grade Honor Choir. She has twice been named
                  Teacher of the Year: at FVE in 2008 and at Southridge
                  Elementary in 2004. She has been awarded both the PTA Lifetime
                  Membership and PTA Extended Service Award. A graduate of
                  Baylor University, Mrs. Brackney was named Outstanding Student
                  in the School of Music and Outstanding Choral Musician and was
                  the first recipient of the Barbara Bennett Award for Music
                  Education at Baylor. She also holds a Master of Music
                  Education degree with a minor in special education from the
                  University of North Texas. While at UNT, she was Assistant
                  Director of the UNT Early Childhood Music Program and received
                  her Level 1 Koday certification. She is also certified in
                  First Steps in Music. Mrs. Brackney is the author Actively
                  Ringing!, a book of lessons for integrating handbells and
                  handchimes in the upper elementary classroom. She co-directs
                  the children’s choirs and Bell Blast at St. Andrew Methodist
                  Church in Plano. Emily and her husband, Doug, are the proud
                  parents of Joshua and Andrew, who are both involved in music
                  at their schools.
                </span>
                <br></br>
                <br></br>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text21">About Emily Brackney</span>
            </Fragment>
          }
        ></Hero1>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 5px;
            flex-direction: column;
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: space-between;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .home-buttons1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-links1 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link {
            margin-left: var(--dl-layout-space-twounits);
            text-decoration: none;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon10 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .home-logo {
            height: 2rem;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon12 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .home-links2 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text11 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text12 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text13 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text14 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text15 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-buttons2 {
            width: 100%;
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login {
            margin-right: var(--dl-layout-space-twounits);
          }
          .home-icon14 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .home-icon16 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .home-icon18 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .home-container3 {
            width: 1067px;
            height: 224px;
            display: flex;
            align-items: center;
            background-size: cover;
            justify-content: center;
            background-image: url('/music%20background%20(1)-1100w.jpg');
            background-position: center;
          }
          .home-text16 {
            color: #000000;
            font-size: 55px;
            box-shadow: 5px 5px 10px 0px #000000;
            font-style: normal;
            font-weight: 800;
            text-transform: capitalize;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
            font-family: 'Poppins';
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-text11 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-text12 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-text13 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-text14 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-text15 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              padding: var(--dl-layout-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
