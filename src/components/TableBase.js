import React from 'react'
import data from '../data.json'
import { Table,Title, Card, TableHead, TableBody, TableRow, TableHeaderCell, TableCell, Badge } from '@tremor/react'

const TableBase = () => {
  return (
    <Card>
      <Title>List of Data</Title>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Id</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell>Department</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((item) => (
              <TableRow key={item.id}>
                <TableCell> {item.id} </TableCell>
                <TableCell> {item.name} </TableCell>
                <TableCell> {item.role} </TableCell>
                <TableCell> {item.department} </TableCell>
                <TableCell> <Badge text={item.state} color={item.state === 'active' ? 'teal': 'red'}/> </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </Card>
  )
}

export default TableBase