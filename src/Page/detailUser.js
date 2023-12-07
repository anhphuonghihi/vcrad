import { useEffect, useState } from 'react';
import Ima from './empty.png';
import { useParams } from 'react-router-dom';
import './detailUser.css';
import axios from 'axios';
function DetailUser() {
    const [user, setUser] = useState([]);
    const { user_id } = useParams();
    useEffect(() => {
        const api = async () => {
            const res = await axios.get(`https://api-business-card.onrender.com/user/${user_id}`, {
                headers: { 'x-api-key': 'z8j1jklsdmnfoiflksadnm23kszfhru38437823jhk12mn393u232' },
            });
            const dataUsers = res.data.metadata.user;
            setUser(dataUsers);
        };
        api();
    }, []);
    // console.log(user);

    return (
        <div className="App">
            <div className="container">
                <div className="background"></div>
                <div className="background__img"></div>
                <div className="logo">
                    <img src={Ima} alt="" />
                </div>
                <div className="contact">
                    <h2 className="contact__name" id="contact__name">
                        {user === undefined ? '' : user?.user_name}
                        {/* {console.log(user===undefined?'':user.user_name)} */}
                    </h2>
                    <span className="contact__job_position" id="contact__job_position">
                        {' '}
                        {user === undefined ? '' : user.user_position}{' '}
                    </span>
                    <div className="contact__company" id="contact__cty">
                        {' '}
                        {user === undefined ? '' : user.user_company}{' '}
                    </div>
                </div>
                <div className="contact__bottom">
                    {user?.user_phone && (
                        <div className="contact__bottom__box">
                            <div className="contact__bottom__box--icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="19"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                >
                                    <path
                                        d="M18.313 19C16.1494 18.9715 14.0186 18.4668 12.072 17.522C9.87317 16.4806 7.87575 15.0588 6.17198 13.322C4.43519 11.6183 3.01331 9.62084 1.97198 7.42201C1.03022 5.47705 0.527684 3.34879 0.499982 1.188C0.495642 1.031 0.523476 0.874791 0.581777 0.728955C0.640077 0.583118 0.727606 0.450779 0.838979 0.340039C0.949719 0.228666 1.08208 0.141137 1.22792 0.0828364C1.37375 0.0245361 1.52998 -0.00335196 1.68698 0.000988248H5.38098C5.49893 -0.00060566 5.61596 0.0220486 5.72484 0.0674555C5.83371 0.112862 5.93212 0.180096 6.01398 0.265026C6.19377 0.448081 6.3212 0.675967 6.38299 0.924999L7.09398 4.24104C7.13103 4.46721 7.1273 4.69813 7.08298 4.92299C7.04175 5.12064 6.94334 5.30181 6.79998 5.44398L4.16698 8.10304C4.60759 8.85233 5.0921 9.57492 5.61798 10.267C6.13325 10.9412 6.6978 11.5763 7.30698 12.167C7.94883 12.8266 8.63728 13.4392 9.36699 14C10.0816 14.5501 10.8405 15.0401 11.636 15.465L14.143 12.879C14.3059 12.692 14.5174 12.5535 14.754 12.479C14.9743 12.4094 15.2076 12.3913 15.436 12.426L18.576 13.112C18.8353 13.1793 19.0665 13.3274 19.236 13.535C19.4066 13.7325 19.5004 13.9849 19.5 14.246V17.809C19.5043 17.966 19.4765 18.1222 19.4182 18.2681C19.3599 18.4139 19.2723 18.5463 19.161 18.657C19.0506 18.7691 18.9184 18.8574 18.7725 18.9164C18.6267 18.9754 18.4703 19.0038 18.313 19ZM3.37698 6.65004L5.51398 4.48603L4.90698 1.58601H2.08298C2.12554 2.37406 2.24477 3.15611 2.43898 3.92103C2.68062 4.85346 2.99488 5.76584 3.37698 6.65004ZM13.115 16.229C13.8704 16.5752 14.6569 16.849 15.464 17.047C16.2676 17.2519 17.0897 17.3755 17.918 17.416V14.592L15.2 14.038L13.115 16.229Z"
                                        fill="#BEBEBE"
                                    />
                                </svg>
                            </div>
                            <div className="contact__bottom__box--text">
                                <div className="contact__bottom__box--title">Điện thoại</div>
                                <div className="contact__bottom__box--content contact__phone" id="contact__phone">
                                    {user === undefined ? '' : user?.user_phone}
                                </div>
                            </div>
                        </div>
                    )}
                    {user?.user_zalo && (
                        <div className="contact__bottom__box">
                            <div className="contact__bottom__box--icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="19"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                >
                                    <path
                                        d="M18.313 19C16.1494 18.9715 14.0186 18.4668 12.072 17.522C9.87317 16.4806 7.87575 15.0588 6.17198 13.322C4.43519 11.6183 3.01331 9.62084 1.97198 7.42201C1.03022 5.47705 0.527684 3.34879 0.499982 1.188C0.495642 1.031 0.523476 0.874791 0.581777 0.728955C0.640077 0.583118 0.727606 0.450779 0.838979 0.340039C0.949719 0.228666 1.08208 0.141137 1.22792 0.0828364C1.37375 0.0245361 1.52998 -0.00335196 1.68698 0.000988248H5.38098C5.49893 -0.00060566 5.61596 0.0220486 5.72484 0.0674555C5.83371 0.112862 5.93212 0.180096 6.01398 0.265026C6.19377 0.448081 6.3212 0.675967 6.38299 0.924999L7.09398 4.24104C7.13103 4.46721 7.1273 4.69813 7.08298 4.92299C7.04175 5.12064 6.94334 5.30181 6.79998 5.44398L4.16698 8.10304C4.60759 8.85233 5.0921 9.57492 5.61798 10.267C6.13325 10.9412 6.6978 11.5763 7.30698 12.167C7.94883 12.8266 8.63728 13.4392 9.36699 14C10.0816 14.5501 10.8405 15.0401 11.636 15.465L14.143 12.879C14.3059 12.692 14.5174 12.5535 14.754 12.479C14.9743 12.4094 15.2076 12.3913 15.436 12.426L18.576 13.112C18.8353 13.1793 19.0665 13.3274 19.236 13.535C19.4066 13.7325 19.5004 13.9849 19.5 14.246V17.809C19.5043 17.966 19.4765 18.1222 19.4182 18.2681C19.3599 18.4139 19.2723 18.5463 19.161 18.657C19.0506 18.7691 18.9184 18.8574 18.7725 18.9164C18.6267 18.9754 18.4703 19.0038 18.313 19ZM3.37698 6.65004L5.51398 4.48603L4.90698 1.58601H2.08298C2.12554 2.37406 2.24477 3.15611 2.43898 3.92103C2.68062 4.85346 2.99488 5.76584 3.37698 6.65004ZM13.115 16.229C13.8704 16.5752 14.6569 16.849 15.464 17.047C16.2676 17.2519 17.0897 17.3755 17.918 17.416V14.592L15.2 14.038L13.115 16.229Z"
                                        fill="#BEBEBE"
                                    />
                                </svg>
                            </div>
                            <div className="contact__bottom__box--text">
                                <div className="contact__bottom__box--title">Zalo</div>
                                <div className="contact__bottom__box--content contact__phone" id="contact__phone">
                                    <a
                                        href={'https://zalo.me/' + (user === undefined ? '' : user.user_zalo)}
                                        target="_blank"
                                    >
                                        {user === undefined ? '' : user?.user_zalo}
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                    {user?.user_services && (
                        <div className="contact__bottom__box">
                            <div className="contact__bottom__box--icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="19"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                >
                                    <path
                                        d="M11.3 7.79401L7.588 4.08197L8.561 3.10901L11.3 5.87L16.6 0.596008L17.551 1.52399L11.3 7.79401ZM12.409 18.409L5.366 16.394V17.684H0.5V8.76599H7.494L13.266 10.939C13.6694 11.087 14.0253 11.3413 14.296 11.675C14.6011 12.0982 14.7493 12.6144 14.715 13.135H17.295C17.5922 13.1282 17.8875 13.1853 18.1607 13.3024C18.434 13.4196 18.679 13.594 18.879 13.814C19.3207 14.3192 19.5481 14.9768 19.513 15.647V16.236L12.409 18.409ZM1.861 16.327H3.989V10.127H1.858L1.861 16.327ZM12.318 17.006L18.112 15.24C18.0584 15.015 17.9402 14.8106 17.772 14.652C17.6364 14.5466 17.4687 14.4909 17.297 14.494H12.609C12.1886 14.4963 11.7687 14.4658 11.353 14.403C10.981 14.3459 10.6134 14.2626 10.253 14.154L8.42 13.588L8.92 12.275L10.572 12.818C10.9223 12.9325 11.282 13.0159 11.647 13.067C12.1845 13.1217 12.7248 13.1444 13.265 13.135C13.2654 12.953 13.2315 12.7724 13.165 12.603C13.1345 12.5205 13.0876 12.4449 13.0273 12.3809C12.967 12.3168 12.8945 12.2655 12.814 12.23L7.269 10.13H5.369V14.974L12.318 17.006Z"
                                        fill="#BEBEBE"
                                    />
                                </svg>
                            </div>
                            <div className="contact__bottom__box--text">
                                <div className="contact__bottom__box--title">Dịch vụ</div>
                                <div className="contact__bottom__box--content">
                                    {user === undefined ? '' : user?.user_services}
                                </div>
                            </div>
                        </div>
                    )}
                    {user?.user_address && (
                        <div className="contact__bottom__box">
                            <div className="contact__bottom__box--icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="19"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                >
                                    <path
                                        d="M0.901001 18.6V4.263H5.163V0H15.237V8.52502H19.501V18.6H11.571V14.338H8.831V18.6H0.901001ZM2.451 17.05H5.163V14.338H2.451V17.05ZM2.451 12.788H5.163V10.076H2.451V12.788ZM2.451 8.526H5.163V5.81403H2.451V8.526ZM6.713 12.788H9.425V10.076H6.713V12.788ZM6.713 8.526H9.425V5.81403H6.713V8.526ZM6.713 4.26398H9.425V1.552H6.713V4.26398ZM10.975 12.788H13.687V10.076H10.975V12.788ZM10.975 8.526H13.687V5.81403H10.975V8.526ZM10.975 4.26398H13.687V1.552H10.975V4.26398ZM15.237 17.051H17.949V14.339H15.237V17.051ZM15.237 12.789H17.949V10.077H15.237V12.789Z"
                                        fill="#BEBEBE"
                                    />
                                </svg>
                            </div>
                            <div className="contact__bottom__box--text">
                                <div className="contact__bottom__box--title">Địa chỉ công ty</div>
                                <div className="contact__bottom__box--content" id="contact__address_work">
                                    {user === undefined ? '' : user?.user_address}
                                </div>
                            </div>
                        </div>
                    )}
                    {user?.user_email && (
                        <div className="contact__bottom__box">
                            <div className="contact__bottom__box--icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="17"
                                    viewBox="0 0 20 17"
                                    fill="none"
                                >
                                    <path
                                        d="M1.92498 16.1001C1.73795 16.1011 1.5527 16.0637 1.38069 15.9903C1.20868 15.9168 1.05358 15.8089 0.924978 15.6731C0.78918 15.5444 0.681217 15.3893 0.60777 15.2173C0.534324 15.0453 0.496954 14.8601 0.497976 14.6731V2.32302C0.496954 2.13599 0.534324 1.95077 0.60777 1.77877C0.681217 1.60676 0.78918 1.45162 0.924978 1.32302C1.05358 1.18722 1.20868 1.07927 1.38069 1.00582C1.5527 0.932372 1.73795 0.894995 1.92498 0.896016H18.075C18.262 0.894995 18.4473 0.932372 18.6193 1.00582C18.7913 1.07927 18.9464 1.18722 19.075 1.32302C19.211 1.45154 19.3191 1.60664 19.3927 1.77865C19.4663 1.95066 19.5039 2.13592 19.503 2.32302V14.6731C19.5039 14.8602 19.4663 15.0454 19.3927 15.2174C19.3191 15.3894 19.211 15.5445 19.075 15.6731C18.9464 15.8089 18.7913 15.9168 18.6193 15.9903C18.4473 16.0637 18.262 16.1011 18.075 16.1001H1.92498ZM9.99997 8.92702L1.92498 3.62703V14.671H18.075V3.62703L9.99997 8.92702ZM9.99997 7.50203L17.98 2.32503H2.04397L9.99997 7.50203Z"
                                        fill="#BEBEBE"
                                    />
                                </svg>
                            </div>
                            <div className="contact__bottom__box--text">
                                <div className="contact__bottom__box--title">Email</div>
                                <div className="contact__bottom__box--content" id="contact__email">
                                    <a href={'mailto:' + (user === undefined ? '' : user.user_email)}>
                                        {user === undefined ? '' : user?.user_email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                    {user?.user_website && (
                        <div className="contact__bottom__box">
                            <div className="contact__bottom__box--icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                >
                                    <path
                                        d="M9.53297 18.534C8.31464 18.5435 7.10746 18.3014 5.98697 17.823C4.91662 17.368 3.94315 16.7125 3.11897 15.8919C2.29748 15.0666 1.64524 14.0886 1.19897 13.013C0.728329 11.8866 0.490231 10.6767 0.498971 9.45597C0.488779 8.24255 0.726996 7.03989 1.19897 5.92198C1.64919 4.85498 2.30112 3.88491 3.11897 3.06498C3.94021 2.24658 4.91481 1.59819 5.98697 1.15696C7.11098 0.6923 8.31673 0.457675 9.53297 0.466958C10.7491 0.457358 11.9549 0.691666 13.079 1.15598C14.1511 1.59721 15.1257 2.24554 15.947 3.06394C16.7648 3.88388 17.4167 4.85394 17.867 5.92094C18.3389 7.03885 18.5772 8.24152 18.567 9.45493C18.5757 10.6757 18.3376 11.8856 17.867 13.0119C17.4207 14.0876 16.7685 15.0656 15.947 15.891C15.1228 16.7116 14.1493 17.367 13.079 17.8219C11.9586 18.3007 10.7514 18.5432 9.53297 18.534ZM9.53297 17.224C10.0656 16.6739 10.5111 16.0456 10.854 15.3609C11.2413 14.5648 11.533 13.7256 11.723 12.8609H7.36497C7.55448 13.7033 7.83861 14.5215 8.21197 15.3C8.55199 16.0047 8.99743 16.6535 9.53297 17.224ZM7.61297 16.953C7.23016 16.3685 6.90497 15.7482 6.64197 15.1009C6.35191 14.3765 6.12506 13.6285 5.96397 12.865H2.57797C3.06584 13.8284 3.74141 14.6845 4.56497 15.383C5.48249 16.0793 6.51323 16.6106 7.61297 16.953ZM11.475 16.93C12.5376 16.5953 13.5293 16.0671 14.4 15.372C15.2594 14.6869 15.9702 13.8339 16.489 12.865H13.124C12.9469 13.618 12.7167 14.3575 12.435 15.078C12.1791 15.7263 11.8567 16.3468 11.475 16.93ZM2.12497 11.51H5.71597C5.67064 11.1033 5.6443 10.7366 5.63697 10.41C5.62964 10.0833 5.62597 9.76326 5.62597 9.44993C5.62597 9.07326 5.63364 8.73832 5.64897 8.44499C5.66431 8.15165 5.6943 7.82426 5.73897 7.46293H2.12597C2.02994 7.78072 1.95807 8.10532 1.91097 8.43394C1.87053 8.77105 1.85183 9.11041 1.85497 9.44993C1.85258 9.80074 1.87128 10.1514 1.91097 10.5C1.95517 10.8419 2.02607 11.1797 2.12497 11.51ZM7.11597 11.51H11.971C12.031 11.0433 12.0686 10.6633 12.084 10.37C12.0993 10.0766 12.107 9.7716 12.107 9.45493C12.107 9.1536 12.0993 8.86398 12.084 8.58598C12.0686 8.30798 12.0313 7.93496 11.972 7.46696H7.11697C7.05697 7.93363 7.0193 8.30627 7.00397 8.58494C6.98864 8.86361 6.98097 9.15329 6.98097 9.45396C6.98097 9.76996 6.98864 10.0749 7.00397 10.3689C7.0193 10.6629 7.05597 11.0433 7.11597 11.51ZM13.326 11.51H16.939C17.0373 11.183 17.1092 10.8485 17.154 10.51C17.1937 10.1614 17.2124 9.81075 17.21 9.45994C17.2131 9.12042 17.1944 8.78106 17.154 8.44395C17.1069 8.11533 17.035 7.79073 16.939 7.47294H13.35C13.3953 7.99961 13.4253 8.40228 13.44 8.68095C13.4546 8.95961 13.4623 9.21927 13.463 9.45994C13.463 9.79327 13.4516 10.1056 13.429 10.397C13.4063 10.6883 13.3723 11.0593 13.327 11.51H13.326ZM13.1 6.10996H16.488C16.014 5.09866 15.3148 4.2093 14.444 3.50999C13.5643 2.81047 12.5436 2.30965 11.452 2.04197C11.8339 2.60931 12.1556 3.21493 12.412 3.84898C12.7018 4.58391 12.9319 5.34101 13.1 6.11295V6.10996ZM7.36397 6.10996H11.745C11.576 5.30298 11.2946 4.5237 10.909 3.79496C10.5378 3.07899 10.0746 2.41466 9.53097 1.81895C9.01975 2.26354 8.6049 2.80808 8.31197 3.41898C7.90891 4.28383 7.59172 5.18613 7.36497 6.11295L7.36397 6.10996ZM2.57597 6.10996H5.98597C6.13127 5.36625 6.34277 4.63699 6.61797 3.93095C6.87987 3.27966 7.2051 2.65569 7.58897 2.06797C6.50988 2.32953 5.50057 2.82259 4.63097 3.51298C3.76561 4.21995 3.06498 5.10724 2.57797 6.11295L2.57597 6.10996Z"
                                        fill="#BEBEBE"
                                    />
                                </svg>
                            </div>
                            <div className="contact__bottom__box--text">
                                <div className="contact__bottom__box--title">Website</div>
                                <div className="contact__bottom__box--content" id="contact__url">
                                    {user === undefined ? '' : user?.user_website}
                                    {/* {console.log(user === undefined ? '' : user.user_website)} */}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DetailUser;