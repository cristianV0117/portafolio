import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import CreateIcon from '@material-ui/icons/Create';
import StorageIcon from '@material-ui/icons/Storage';
import SettingsIcon from '@material-ui/icons/Settings';
import WorkIcon from '@material-ui/icons/Work';
import AccountTreeIcon from '@material-ui/icons/AccountTree';

export default function TechnicalKnowledge()
{  
    const [open, setOpen]             = React.useState(false)
    const [db, setOpenDb]             = React.useState(false)
    const [prom, setOpenProm]         = React.useState(false)
    const [settings, setOpenSettings] = React.useState(false)
    const [tree, setOpenTree]         = React.useState(false)

    const handleClick = () => {
        setOpen(!open)
    };

    const handleDbClick = () => {
        setOpenDb(!db)
    }

    const handlePromClick = () => {
        setOpenProm(!prom)
    }

    const handleSettingsClick = () => {
        setOpenSettings(!settings)
    }

    const handleTreeClick = () => {
        setOpenTree(!tree)
    }

    return (
        <>
            <br />
            <center>
            <Card className="card" >
                <CardContent>
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                Lista de conocimientos tecnicos
                            </ListSubheader>
                        }
                    >
                    <ListItem button  onClick={handlePromClick}>
                        <ListItemIcon>
                        <CreateIcon />
                        </ListItemIcon>
                        <ListItemText primary="Lenguajes de programacion" />
                        {prom ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={prom} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button>
                                <ListItemText primary="PHP" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="JAVASCRIPT" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="HTML" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="CSS" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="SQL" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="C#" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button onClick={handleDbClick}>
                        <ListItemIcon>
                        <StorageIcon />
                        </ListItemIcon>
                        <ListItemText primary="Bases de datos" />
                        {db ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={db} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button>
                                <ListItemText primary="MySQL" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="SQL Server" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button onClick={handleClick}>
                        <ListItemIcon>
                        <WorkIcon />
                        </ListItemIcon>
                        <ListItemText primary="Frameworks" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button>
                                <ListItemText primary="Laravel" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Symfony" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="React js" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Next js" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Netcore" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button onClick={handleSettingsClick}>
                        <ListItemIcon>
                        <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Herramientas de desarrollo" />
                        {settings ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={settings} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button>
                                <ListItemText primary="Xampp" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="GitHub" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="jQuery" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Bootstrap" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Git kraken" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Postman" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Visual studio" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Visual studio code" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button onClick={handleTreeClick}>
                        <ListItemIcon>
                        <AccountTreeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Arquitectura" />
                        {tree ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={tree} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button>
                                <ListItemText primary="MVC" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="FrontEnd Controller" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="POO" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="S.O.L.I.D" />
                            </ListItem>
                        </List>
                    </Collapse>
                    </List>
                </CardContent>
            </Card>
            </center>
            <style jsx>{`
                
                
            `}</style>
        </>
    )
}