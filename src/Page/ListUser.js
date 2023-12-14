import {
    Paper,
    TextField,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    Autocomplete,
    TableRow,
    Input,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
function loc_xoa_dau(str) {
    // Gộp nhiều dấu space thành 1 space
    str = str.replace(/\s+/g, ' ');
    // loại bỏ toàn bộ dấu space (nếu có) ở 2 đầu của chuỗi
    str = str.trim();
    // bắt đầu xóa dấu tiếng việt  trong chuỗi
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    str = str.replace(/Đ/g, 'D');
    return str;
}
function ListUser() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://maacbookm3.com/businesscard/user/`, {
                headers: { 'x-api-key': 'z8j1jklsdmnfoiflksadnm23kszfhru38437823jhk12mn393u232' },
            });
            setData(res.data.metadata.users);
        };
        if (query.length === 0 || query.length > 2) fetchData();
    }, [query]);
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
    console.log(data);
    return (
        <div style={{ textAlign: 'center' }}>
            <div className="app">
                <TextField
                    className="search"
                    placeholder="Tìm kiếm theo tên..."
                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
                />
                <Paper sx={{ width: '90%', marginLeft: '5%' }}>
                    <TableContainer sx={{ maxHeight: 600 }}>
                        <TableHead>
                            <TableRow>
                                {columns.map((item) => (
                                    <TableCell style={{ backgroundColor: 'black', color: 'white' }}>
                                        {item.name}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {data
                                .filter((item) => {
                                    return query.toLowerCase() === ''
                                        ? item
                                        : loc_xoa_dau(item.user_name).toLowerCase().includes(loc_xoa_dau(query));
                                })
                                .map((item) => (
                                    <TableRow key={item.user_id}>
                                        <TableCell>{item.user_id}</TableCell>
                                        <TableCell>{item.user_name}</TableCell>
                                        <TableCell>{item.user_position}</TableCell>
                                        <TableCell>{item.user_company}</TableCell>
                                        <TableCell>{item.user_phone}</TableCell>
                                        <TableCell>{item.user_zalo}</TableCell>
                                        <TableCell>{item.user_services}</TableCell>
                                        <TableCell>{item.user_address}</TableCell>
                                        <TableCell>{item.user_email}</TableCell>
                                        <TableCell>{item.user_website}</TableCell>
                                        <TableCell>{item.createdAt}</TableCell>
                                        <TableCell>{item.updatedAt}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </TableContainer>
                </Paper>
            </div>
        </div>
    );
}
export default ListUser;
