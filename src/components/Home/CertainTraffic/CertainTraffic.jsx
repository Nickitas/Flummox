import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
  } from '@chakra-ui/react'


import classes from './certain_traffic.module.scss'

const CertainTraffic = () => {


    const data = [
        {
            ip_destination:'190.80.80.12',
            port:'8080',
            time:'23.01.00',
            user_agent:'Instagram',
            size:64,
            class:'Соцсеть',
            name:'Telegram',
            statys:500,
        },
        {
            ip_destination:'192.21.0.45',
            port:'8080',
            time:'23.01.00',
            user_agent:'CS:GO',
            size:64,
            class:'Сетевая игра',
            name:'Telegram',
            statys:500,
        },
    ]

    return (
        <section className={classes.task1}>

            <h2 className='title'>Результаты <b>неопределенного</b> сетевого трафика</h2>

            <TableContainer>
                <Table size='lg'>
                    <Thead>
                        <Tr>
                            <Th>IP Destination</Th>
                            <Th>Time</Th>
                            <Th isNumeric>Size</Th>
                            <Th>User Agent</Th>
                            <Th>Class</Th>
                            <Th>Name</Th>
                            <Th>Stays</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            data.map((item, key) => (
                                <Tr key={key} className={item.statys == 100 ? 'good' : item.statys == 200 ? 'bad' : 'lost'}>
                                    <Th>{ item.ip_destination }:{ item.port }</Th>
                                    <Th>{ item.time }</Th>
                                    <Th isNumeric>{ item.size } byte</Th>
                                    <Th>{ item.user_agent }</Th>
                                    <Th>{ item.class }</Th>
                                    <Th>{ item.name }</Th>
                                    <Th>{ item.statys }</Th>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
                </TableContainer>
        </section>
    )
}

export default CertainTraffic