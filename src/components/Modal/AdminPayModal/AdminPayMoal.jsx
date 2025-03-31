/**@jsxImportSource @emotion/react */
import axios from 'axios';
import * as s from './style';
import React, { useEffect, useState } from 'react';
0
function AdminPayMoal({ payData }) {
    const [ pressTime, setPressTime ] = useState(null); //버튼 눌린 시간 상태
    const [ reasons, setReasons ] = useState(""); //결제 취소 사유 상태
    const [ pressMessage, setPressMessage ] = useState("3초이상 꾹 눌러주세요")
    
    const handleReasonInputOnChange = (e) => { //text 저장
        setReasons(e.target.value);
    }
    console.log(reasons);

    const handleButtonDown = () => {
        setPressTime(Date.now());
    };

    useEffect(() => {
        let interval;
        if (pressTime) {
            interval = setInterval(() =>{
                const currentTime = Date.now();
                const timeDifference = currentTime - pressTime;
                const seconds = Math.floor(timeDifference / 1000);
                if(timeDifference < 3000) {
                    setPressMessage(3 - seconds + "초 남았습니다")
                } else {
                    handleCancelClick(timeDifference);
                    setPressMessage("결제가 취소되었습니다");
                    clearInterval(interval);
                }
            }, 1000);

            return () => {
                handleCancelClick(Date.now() - pressTime);
                clearInterval(interval);
            }
        }
    }, [pressTime])


    // 결제 취소
    // post
    // /payments/{paymentId}/cancel
    //console.log(payData);
    const handleCancelClick = async (timeDifference) => {

        if(timeDifference < 3000) {
            setPressMessage("3초 간 누르지 않았습니다");
            console.log(timeDifference);
            return;
        }

        setPressMessage("결제가 취소되었습니다");

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
                    <div>{payData.totalAmount} 원</div>
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
                <div>
                    <div><label htmlFor='reasonInput'>결제 취소</label></div>
                    <div>
                        <textarea id="reasonInput" type="text" 
                            value={reasons} onChange={handleReasonInputOnChange}
                            placeholder='취소 사유를 적어주세요' 
                            css={s.inputText}/>
                    </div>
                </div>
            </div>
            <div css={s.footer}>
                <div>{pressMessage}</div>
                <button onClick={handleCancelOnClick} onMouseDown={handleButtonDown} disabled={reasons === ""}>결제취소</button>
            </div>

        </div>
    );
}

export default AdminPayMoal;