/**@jsxImportSource @emotion/react */
import * as s from './style';
import React, { useState } from 'react';

function AdminPayMoal({ payData }) {

    const [ reasons, setReasons ] = useState();


    // 결제 취소
    // post
    // /payments/{paymentId}/cancel
    console.log(payData);
    const handleCancelClick = async () => {
        try {
            const jwtResponse = await axios.post("https://api.portone.io/login/api-secret", {
                "apiSecret": import.meta.env.VITE_PORTONE_API_KEY,
            });
            const accessToken = jwtResponse.data.accessToken;

            await axios.post(
                `https://api.portone.io/payments/${payData.uuid}/cancel`, 
                {
                    storeId: import.meta.env.VITE_PORTONE_STOREID,
                    reason: {reasons},
                }, 
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            );
            alert("취소완료")
        }  catch(error) {
            console.log(error);
        }
    }


    return (
        <div css={s.container}>
            <div css={s.head}>
                <div>
                    <div>주문번호</div>
                    <div>{payData.orderId}</div>
                </div>
                <div>
                    <div>결제 금액</div>
                    <div>{payData.totalAmount}</div>
                </div>
                <div>
                    <div>결제시간</div>
                    <div>{payData.time}</div>
                </div>
            </div>
            <div css={s.body}>
                <div>
                    <div>주문내역</div>
                    <div>{payData.orderName}</div>
                </div>
                <div>결제취소 사유</div>
            </div>
            <div css={s.footer}>
                <button onClick={handleCancelClick}>결제취소</button>
            </div>

        </div>
    );
}

export default AdminPayMoal;