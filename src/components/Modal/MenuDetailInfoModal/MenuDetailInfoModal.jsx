/**@jsxImportSource @emotion/react */
import * as s from './style';
import { useInfoMenuById } from '../../../queries/AdminQuery/AdminMenuBoardQuery';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedLanguageState } from '../../../atoms/selectedLanguage/selectedLanguage';

function MenuDetailInfoModal({ setOpen, menuId }) {
    //props에 기본적으로, 내가 대입한 값과 setOpen이 객체로서 같이 온다.
    //따라서 setOpen을 값을 넣지 않았어도, 기본적으로 존재한다.
    // console.log(menuId);
    // console.log(setOpen);
    // const selectedLanguage = useRecoilValue(selectedLanguageState);
    // console.log(selectedLanguage);

    const [ toggledSize, setToggledSize ] = useState(0); //스위치 상태
    const [ isSize, setIsSize ] = useState("M"); //사이즈 상태
    
    const getInfoMenuById = useInfoMenuById(menuId);  //아이디에 맞는 메뉴정보 불러오기
    const selectedSizeMenu = getInfoMenuById.data?.data[0].menuInfo.find(item => item.size === isSize); //사이즈에 맞는 영양정보

    const [selectedLanguage] = useRecoilState(selectedLanguageState); //언어 전역상태
    
    console.log(getInfoMenuById);
    console.log(selectedSizeMenu);

    useEffect( () => { //사이즈 바뀔때마다 재로딩
    }, [isSize]);

    //사이즈 변경 함수
    const sizeChangeSwitchOnClick = () => {
        setToggledSize(!toggledSize);
        setIsSize(isSize === "M" ? "L" : "M");
    }
    
    return (
        <div>
            <div css={s.modalhead}>
                <div>
                    {isSize === "M"
                                ? (<img src={getInfoMenuById.data?.data[0]?.singleImg} alt="" />) 
                                :  (<img src={getInfoMenuById.data?.data[0]?.setImg} alt="" />)
                    }
                </div>
                <div>
                    <div css={s.selectsize(toggledSize)}>
                        <div>
                            size : &nbsp; {selectedSizeMenu?.size}
                        </div>
                        {
                            getInfoMenuById.data?.data[0].menuPrice.length > 1
                            ?   <label>
                                    <input type="checkbox" 
                                        checked={toggledSize} 
                                        onChange={sizeChangeSwitchOnClick}
                                    />
                                    <span></span>
                                </label>
                            : null
                        }    
                    </div>
                    <div>{selectedLanguage === "한국어" ? getInfoMenuById.data?.data[0]?.menuName : getInfoMenuById.data?.data[0]?.menuNameEng}</div>
                </div>
            </div>
            <div css={s.modalbody}>
                <div css={s.text1}>{selectedLanguage === "한국어" ? "영양정보" : "nutritional information"}</div>
                <div css={s.bodyup}>
                    <div css={s.line(selectedLanguage)}>
                        <div>{selectedLanguage === "한국어" ? "영양소" : "nutrient"}</div>
                        <div>{selectedLanguage === "한국어" ? "함량" : "content"}</div>
                        <div>{selectedLanguage === "한국어" ? "영양소 기준치" : "nutrient threshold"}</div>
                    </div>
                    <div css={s.line}>
                        <div>{selectedLanguage === "한국어" ? "중량" : "weight"}(g)</div>
                        <div>{selectedSizeMenu?.weight === 0 ? '-' : `${selectedSizeMenu?.weight}g`}</div>
                        <div>-</div>
                    </div>
                    <div css={s.line}>
                        <div>{selectedLanguage === "한국어" ? "중량" : "weight"}(ml)</div>
                        <div>{selectedSizeMenu?.volume === 0 ? '-' : `${selectedSizeMenu?.volume}ml`}</div>
                        <div>-</div>
                    </div>
                    <div css={s.line}>
                        <div>{selectedLanguage === "한국어" ? "열량" : "calory"}</div>
                        <div>{selectedSizeMenu?.calories === 0 ? '-' : `${selectedSizeMenu?.calories}kcal`}</div>
                        <div>-</div>
                    </div>
                    <div css={s.line}>
                        <div>{selectedLanguage === "한국어" ? "당" : "sugar"}</div>
                        <div>{selectedSizeMenu?.sugars === 0 ? '-' : `${selectedSizeMenu?.sugars}g`}</div>
                        <div>{selectedSizeMenu?.sugars === 0 ? '-' : `${Math.round((selectedSizeMenu?.sugars / 100) * 100)}%`}</div>
                    </div>
                    <div css={s.line}>
                        <div>{selectedLanguage === "한국어" ? "단백질" : "protein"}</div>
                        <div>{selectedSizeMenu?.protein === 0 ? '-' : `${selectedSizeMenu?.protein}g`}</div>
                        <div>{selectedSizeMenu?.protein === 0 ? '-' : `${Math.round((selectedSizeMenu?.protein / 55) * 100)}%`}</div>
                    </div>
                    <div css={s.line}>
                        <div>{selectedLanguage === "한국어" ? "포화지방" : "saturated fat"}</div>
                        <div>{selectedSizeMenu?.saturatedFat === 0 ? '-' : `${selectedSizeMenu?.saturatedFat}g`}</div>
                        <div>{selectedSizeMenu?.saturatedFat === 0 ? '-' : `${Math.round((selectedSizeMenu?.saturatedFat / 54) * 100)}%`}</div>
                    </div>
                    <div css={s.line}>
                        <div>{selectedLanguage === "한국어" ? "나트륨" : "sodium"}</div>
                        <div>{selectedSizeMenu?.sodium === 0 ? '-' : `${selectedSizeMenu?.sodium}mg`}</div>
                        <div>{selectedSizeMenu?.sodium === 0 ? '-' : `${Math.round((selectedSizeMenu?.sodium / 2000) * 100)}%`}</div>
                    </div>
                    <div css={s.line}>
                        <div>{selectedLanguage === "한국어" ? "카페인" : "caffeine"}</div>
                        <div>{selectedSizeMenu?.caffeine === 0 ? '-' : `${selectedSizeMenu?.caffeine}mg`}</div>
                        <div>{selectedSizeMenu?.caffeine === 0 ? '-' : `${Math.round((selectedSizeMenu?.caffeine / 400) * 100)}%`}</div>
                    </div>
                </div>
            </div>
            <div css={s.bodydown}>
                <div css={s.text2}>{selectedLanguage === "한국어" ? "원산지" : "country of origin"} </div>
                <div css={s.origin}>
                    {
                        selectedSizeMenu?.menuOrigin === null ? (<div>---</div>) :
                        selectedSizeMenu?.menuOrigin?.split('/').map((item, index) => (<div key={index}>{item}</div>))
                    }
                </div>
            </div>
            <div css={s.footer}>
                <button onClick={() => setOpen(false)}>뒤로가기</button>
            </div>
        </div>
    );
}

export default MenuDetailInfoModal;