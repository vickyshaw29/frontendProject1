import { AppBar, fade, InputBase, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { Fragment, useState } from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from './Menu'

// import SearchIcon from '@material-ui/icons/Search'
const useStyles = makeStyles(theme => ({
    root: {
        ...theme,
        fontSize: "1.6em",

    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
    },
    shift: {
        display: "flex",
        marginLeft: "auto"
    },
    tabContainer: {
        marginLeft: "auto",

    },
    tab: {
        ...theme.typography.fontFamily,
        fontFamily: "Raleway",
        fontWeight: "700",
        fontSize: "1rem",
        textTransform: "none",
        minWidth: 10,
        marginLeft: "25px"
    }
}))
function Header(props) {
    const [handleChange, sethandleChange] = useState("")
    const classes = useStyles()
    function ElevationScroll(props) {
        const { children } = props;
        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
        });

        return React.cloneElement(children, {
            elevation: trigger ? 4 : 0,
        });
    }

    return (
        <Fragment>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography className={classes.root} variant="h6">
                            Peoplebox.ai
                        </Typography>
                        <Tabs className={classes.tabContainer}>
                            <Tab className={classes.tab} label="Performance"></Tab>
                            <Tab className={classes.tab} label="EngageMent"></Tab>
                            <Tab className={classes.tab} label="CoffeeComment"></Tab>
                            <Tab className={classes.tab} label="Pricing"></Tab>
                            <Tab className={classes.tab} label="Resources"></Tab>
                            <Tab className={classes.tab} label="Login"></Tab>
                            <Tab className={classes.tab} label="Start Free Trial"></Tab>
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
            <Menu />
            
        </Fragment>
    )
}

export default Header
