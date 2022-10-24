import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
  } from '@chakra-ui/react'


import classes from './verified_traffic.module.scss'

const VerifiedTraffic = () => {


    const data = [
        {
            ip_destination:'98.10.0.25',
            port:'8080',
            time:'23.01.00',
            user_agent:'Google',
            size:64,
            class:'Мессанджер',
            name:'Telegram',
            statys:100,
        },
        {
            ip_destination:'102.255.10.31',
            port:'8080',
            time:'23.01.00',
            user_agent:'WhatsApp',
            size:64,
            class:'Мессанджер',
            name:'Telegram',
            statys:100,
        },
    ]


    return (
        <section className={classes.task1}>

            <h2 className='title'>Результаты <b>проверенного</b> сетевого трафика</h2>

            <TableContainer>
                <Table size='lg'>
                    <Thead>
                        <Tr>
                            <Th>IP Destination</Th>
                            <Th>Time</Th>
                            <Th>Size</Th>
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
                                    <Th>{ item.size } byte</Th>
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

export default VerifiedTraffic