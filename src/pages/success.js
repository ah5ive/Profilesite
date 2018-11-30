import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Thank You</h1>
    <p>Your submission has been received</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
