// import React, { useEffect } from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
// import { useQueryClient } from '@tanstack/react-query';

// function MainRoute(props) {
//     const navigate = useNavigate();
//     const queryClient = useQueryClient();
//     const queryState = queryClient.getQueryState(["userMeQuery"]);

//     useEffect(() => {
//         if(queryState.status === "error") {
//             navigate("/auth/login");
//         }
//     }, [queryState]);

//     return queryState.status === "success" &&
//         <>
//             <Routes>
//                 <Route path="/*" element={<NotFoundPage />} />
//             </Routes>
//         </>
// }

// export default MainRoute;