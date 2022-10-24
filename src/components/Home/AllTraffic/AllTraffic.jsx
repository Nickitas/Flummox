import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
  } from '@chakra-ui/react'


import classes from './all_traffic.module.scss'

const AllTraffic = () => {

    const data = [
        {
            ip_destination:'10.92.255.12',
            port:'8080',
            time:'23.01.00',
            user_agent:'YouTube',
            size:64,
            class:'Видео-хостинг',
            name:'Telegram',
            statys:200,
        },
        {
            ip_destination:'34.50.60.44',
            port:'8080',
            time:'23.01.00',
            user_agent:'Chrome',
            size:64,
            class:'Браузер',
            name:'Telegram',
            statys:200,
        },
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
            ip_destination:'10.255.10.10',
            port:'8080',
            time:'23.01.00',
            user_agent:'Firefox',
            size:64,
            class:'Браузер',
            name:'Telegram',
            statys:200,
        },
        {
            ip_destination:'110.10.240.20',
            port:'8080',
            time:'23.01.00',
            user_agent:'VK',
            size:64,
            class:'Соцсеть',
            name:'Telegram',
            statys:200,
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

            <h2 className='title'>Результаты <b>всего</b> сетевого трафика</h2>

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
                                    <Th isNumeric>{ item.size } size</Th>
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

export default AllTraffic