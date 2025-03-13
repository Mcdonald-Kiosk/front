import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import { useQueryClient } from '@tanstack/react-query';
// import LoginPage from '../../pages/LoginPage/LoginPage';
// import OAuth2LoginPage from '../../pages/OAuth2LoginPage/OAuth2LoginPage';
// import JoinPage from '../../pages/JoinPage/JoinPage';
import SelectMenu from '../../pages/userPages/SelectMenu/SelectMenu';
import OrderPage from '../../pages/userPages/OrderPage/OrderPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import { selectedLanguageState } from '../../atoms/selectedLanguage/selectedLanguage';
import { useRecoilValue } from "recoil";


function UserRoute(props) {
    // const navigate = useNavigate();

    // const queryClient = useQueryClient();
    // const queryState = queryClient.getQueryState(["userMeQuery"]);

    // useEffect(() => {
    //     if(queryState.status === "success") {
    //         navigate("/");
    //     }
    // }, [queryState]);

    // return queryState.status === "error" &&       일단은 밑에걸로 임시

    const selectedLanguage = useRecoilValue(selectedLanguageState); // 전역 상태 가져오기

    return (
        <Routes>
            {/* <Route path="/login" element={<LoginPage />} />
            <Route path='/login/oauth2' element={<OAuth2LoginPage />} />
            <Route path="/join" element={<JoinPage />} /> */}

            <Route path="/menu/*" element={<SelectMenu />} />
            <Route path="/order/*" element={<OrderPage />} />
            
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default UserRoute;