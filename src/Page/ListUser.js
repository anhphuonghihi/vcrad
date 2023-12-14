import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
function ListUser() {
    const columns = [
        { id: 'user_id', name: 'Id' },
        { id: 'user_name', name: 'Họ tên' },
        { id: 'user_position', name: 'Chức vụ' },
        { id: 'user_company', name: 'Địa chỉ' },
        { id: 'user_phone', name: 'Số điện thoại' },
        { id: 'user_zalo', name: 'Zalo' },
        { id: 'user_services', name: 'Dịch vụ' },
        { id: 'user_address', name: 'Địa chỉ công ty' },
        { id: 'user_email', name: 'Email' },
        { id: 'user_website', name: 'Địa chỉ website' },
        { id: 'createdAt', name: 'Ngày tạo' },
        { id: 'updatedAt', name: 'Ngày sửa' },
    ];

    const handlechangepage = (event, newpage) => {
        pagechange(newpage);
    };
    const handleRowsPerPage = (event) => {
        rowperpagechange(+event.target.value);
        pagechange(0);
    };

    const [rows, rowchange] = useState([]);
    const [page, pagechange] = useState(0);
    const [rowperpage, rowperpagechange] = useState(5);
    useEffect(() => {
        const api = async () => {
            const res = await axios.get(`https://maacbookm3.com/businesscard/user/`, {
                headers: { 'x-api-key': 'z8j1jklsdmnfoiflksadnm23kszfhru38437823jhk12mn393u232' },
            });

            const dataUsers = res.data.metadata.users;
            rowchange(dataUsers);
        };
        api();
    }, []);
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>MUI Table</h1>

            <Paper sx={{ width: '90%', marginLeft: '5%' }}>
                <TableContainer sx={{ maxHeight: 450 }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell style={{ backgroundColor: 'black', color: 'white' }} key={column.id}>
                                        {column.name}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows &&
                                rows.slice(page * rowperpage, page * rowperpage + rowperpage).map((row, i) => {
                                    return (
                                        <TableRow key={i}>
                                            {columns &&
                                                columns.map((column, i) => {
                                                    let value = row[column.id];
                                                    return <TableCell key={value}>{value}</TableCell>;
                                                })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    rowsPerPage={rowperpage}
                    page={page}
                    count={rows?.length}
                    component="div"
                    onPageChange={handlechangepage}
                    onRowsPerPageChange={handleRowsPerPage}
                ></TablePagination>
            </Paper>
        </div>
    );
}
export default ListUser;
