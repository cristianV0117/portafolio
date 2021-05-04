import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image'
export default function Projects()
{
    const data = () => {
        return [
            {
                "key"  : 0,
                "title": "Sistema de humedad",
                "text" : "Sistema que verifica la humedad actual de 3 ciudades utilizando consumo de APIS",
                "tools": "PHP, HTML 5, CSS 3, JAVASCRIPT",
                "url"  : "https://app-humidity.herokuapp.com/index.php",
                "media": "/humedad.PNG"
            },
            {
                "key"  : 1,
                "title": "PQR",
                "text" : "Sistema integrado de PQR realizado para importante compañia de farmaceutica",
                "tools": "PHP, COMPOSER, NODE, HTML 5, CSS 3, JAVASCRIPT",
                "url"  : "https://ropsohn.zk.com.co/",
                "media": "/pqr.PNG"
            },
            {
                "key"  : 2,
                "title": "Proyecto Integrador",
                "text" : "Sistema donde se especifica caracteristicas de un mantenimiento de software y hardware",
                "tools": "PHP, HTML 5, CSS 3",
                "url"  : "https://proyectinte.herokuapp.com/home.php",
                "media": "/protectoIntegrador.PNG"
            },
            {
                "key"  : 3,
                "title": "Proyecto Integrador II",
                "text" : "Sistema con herramientas como, juego de ahorcados, ipconfig, etc...",
                "tools": "PHP, HTML 5, CSS 3, JAVASCRIPT",
                "url"  : "https://proyectointegradordos.herokuapp.com/index.php",
                "media": "/proyectoIntegradorDos.PNG"
            }
        ]
    }
    return (
        <>
            <center>
                <h3>Proyectos</h3>
            </center>
            {
                data().map(data => (
                    <Card key={data.key} className="card">
                        <Image
                            src={data.media}
                            width={1000}
                            height={300}
                        />
                        <CardContent>
                            <Typography color="textSecondary">
                                <h3>{data.title}</h3>
                            </Typography>
                            <Typography color="textSecondary">
                                <h5>{data.text}</h5>
                            </Typography>
                            <Typography color="textSecondary">
                                Herramietas
                                <h5>{data.tools}</h5>
                            </Typography>
                            <Typography variant="body2" component="p">
                                <Button variant="outlined" color="primary">
                                    <a href={data.url} >Ver sitio web</a>
                                </Button>
                            </Typography>
                        </CardContent>
                    </Card>
                ))
            }
            <style jsx>{`
                
            `}</style>
        </>
    )
}