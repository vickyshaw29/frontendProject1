import { Box, Button, Container, makeStyles, Tab, Tabs, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import img1 from '../img/1.svg'
import img2 from '../img/2.svg'
import img3 from '../img/3.svg'
import img4 from '../img/4.svg'
import React, { Fragment } from 'react'
import Paper from '@material-ui/core/Paper';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    breadPaper: {
        ...theme.background,
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(166.5),
            height: theme.spacing(16),
        },



    },
    root: {
        flexGrow: 10,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 480,
        marginLeft: "10rem",
        marginRight: "10rem",
        // marginBottom: "10rem"
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        color: "#fff"
    },
    heading: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        fontFamily: "Raleway",
        fontSize: "1.5rem",
        color: "#fff",
        marginLeft: "6rem",
        letterSpacing: "2px"
    },
    img: {
        width: "75vh",
        marginLeft: "4rem",
        marginBottom: "auto"

    },
    footer: {
        fontFamily: "Raleway",
        fontSize: "3rem",
        marginLeft: ".8em",

    },
    btn: {
        display: "flex",
        marginLeft: "55em",
    },
    btn2: {
        display: "flex",
        marginLeft: "45em",
        marginTop: "-2.3rem"
    }
}));

function Menu() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Fragment>
            <div className={classes.heading}>
                <div className={classes.root}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}
                    >
                        <Tab className={classes.tab} label={`Build your own People analytics`} {...a11yProps(0)} />
                        <Tab classname={classes.tab} label="Track Goals" {...a11yProps(1)} />
                        <Tab classname={classes.tab} label={`Keep track of Your ${"\n"} 1:1 culture`} {...a11yProps(2)} />
                        <Tab classname={classes.tab} label="Understand EngageMent" {...a11yProps(3)} />
                    </Tabs>
                    <div>
                        <Typography className={classes.title}>
                            Avoid blind spots to drive better results
                    </Typography>
                        <TabPanel value={value} index={0}>
                            <img className={classes.img} src={img1} />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <img className={classes.img} src={img2} />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <img className={classes.img} src={img3} />
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <img className={classes.img} src={img4} />
                        </TabPanel></div>
                    <div>
                        {/* <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        <i className="fa fa-arrow-left" aria-hidden="true"></i> */}
                    </div>
                </div>
                <Button onClick={(index) => setValue(index => index + 1)} className={classes.btn} variant="contained" color="primary" >
                <ArrowRightAltIcon/>
                        </Button>
                <Button onClick={(index)=>setValue(index=>index-1)} className={classes.btn2} variant="contained" color="secondary">
                    <ArrowBackIcon />
                        </Button>
            </div>
            <Box component="span" m={1} style={{ backgroundColor: "#c0c0c0" }}>
                <Typography className={classes.footer}>
                    EngageMent And Performance But Specially For Remote Teams
                   </Typography>
            </Box>
        </Fragment>
    );
}

export default Menu
