import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const tasks = (props) => {
    return (
        <div>
            <h1><center>Tareas</center></h1>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Code</TableCell>
                        <TableCell>Name</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        props.tasks.map(task => (
                            <TableRow>
                                <TableCell>{task.id}</TableCell>
                                <TableCell>{task.code}</TableCell>
                                <TableCell>{task.name}</TableCell>
                            </TableRow>

                        ))
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

tasks.getInitialProps = async ctx => {
    const index = await fetch('http://127.0.0.1:8000/api/tareas')
    const data  = await index.json()
    return {
        tasks: data
    }
}

export default tasks;