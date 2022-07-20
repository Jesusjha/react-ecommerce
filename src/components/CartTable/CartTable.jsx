import { Table, User } from '@nextui-org/react'
import React from 'react'
import CounterBtn from '../CounterBtn/CounterBtn'

const CartTable = ({cart}) => {
  return (

    <Table>
					<Table.Header>
						<Table.Column>Prod.</Table.Column>
						<Table.Column>Name</Table.Column>
						<Table.Column>Price</Table.Column>
						<Table.Column>Actions</Table.Column>
					</Table.Header>
					<Table.Body>
						{cart.map((item, index) => {
							return (
								<Table.Row key={index} >
									<Table.Cell css={{width:'5%'}}>
										<User
											css={{padding:'$0'}}
											src={item.image}
										></User>
									</Table.Cell>
									<Table.Cell  css={{fontSize:'0.8rem', width:'50%', h:'2rem'}}>
										{item.title}
									</Table.Cell>
									<Table.Cell  css={{fontWeight:'$bold', width:'20%'}}>
										{item.price}.00€
									</Table.Cell>
									<Table.Cell  css={{fontWeight:'$bold', width:'25%'}}>
										<CounterBtn />
									</Table.Cell>
										
								</Table.Row>)})}
					</Table.Body>
				</Table>
  )
}


export default CartTable;