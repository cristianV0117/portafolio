const Footer = () => {

    const currentYear = () => {
        return new Date().getFullYear()
    }

    return (
        <>
            
            <footer id="footer" >
                <hr/>
                <center><h4>Derechos reservados &copy; Cristian camilo vasquez osorio {currentYear()}</h4></center>
            </footer>
        </>
    )

}

export default Footer