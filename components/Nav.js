import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'next/Link';

const Nav = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6">
                    <Button color="inherit" >
                        <Link href="/" >Portafolio</Link>
                    </Button>
                </Typography>
                <Typography variant="h6">
                    <Button color="inherit" >
                        <Link href="/technicalKnowledge" >Conocimientos tecnicos</Link>
                    </Button>
                </Typography>
                <Typography variant="h6">
                    <Button color="inherit" >
                        <Link href="/projects" >Proyectos</Link>
                    </Button>
                </Typography>
                <Typography variant="h6">
                    <Button color="inherit" >
                        <Link href="/contact" >Contactame</Link>
                    </Button>
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Nav;