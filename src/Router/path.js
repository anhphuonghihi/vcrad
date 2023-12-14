import DetailUser from '../Page/detailUser';
import ListUser from '../Page/ListUser';
import Notfound from '../Page/notFound';

const paths = [
    { path: '/list/admin', page: ListUser },
    { path: '/:user_id', page: DetailUser },
];
export { paths };
