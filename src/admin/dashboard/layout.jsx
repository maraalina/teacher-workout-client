import React from 'react'
import PropTypes from 'prop-types'
import * as Admin from 'admin/layout'
import * as Material from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({ wrapper: { paddingTop: '33px' } })

export const Layout = ({ children }) => <Admin.Layout>
  <Material.Grid container className={useStyles().wrapper} direction={'column'} spacing={3}>
    {children}
  </Material.Grid>
</Admin.Layout>

Layout.propTypes = { children: PropTypes.node.isRequired }
