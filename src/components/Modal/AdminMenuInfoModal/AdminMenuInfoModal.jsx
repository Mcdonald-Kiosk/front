/**@jsxImportSource @emotion/react */
import { useInfoMenuById } from '../../../queries/AdminQuery/AdminMenuBoardQuery';
import * as s from './style';
import React from 'react';

function AdminMenuInfoModal({ menuId }) {
    const getInfoMenuById = useInfoMenuById();
    
    console.log(getInfoMenuById);
    return (
        <div>

        </div>
    );
}

export default AdminMenuInfoModal;