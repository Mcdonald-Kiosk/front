/**@jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import { Checkbox } from "@mui/material";
import { useAddMenuMutation, useDeleteMenuMutation } from "../../../mutations/menuMutation";
import useMenuData, { useMenuDetail } from "../../../hooks/menu/getMenuHooks";

function App() {
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        menuName: "",
        menuCategory: "",
        menuSequence: "",
        isExposure: 1,
        singleImg: null,
        setImg: null,
        prices: [
            { size: "M", price: "", discountPrice: "" },
            { size: "L", price: "", discountPrice: "" }
        ],
    });

    // ✅ React Query Hooks
    const { data: menus, error, isLoading } = useMenuData();  // 메뉴 목록
    const { data: menuDetail } = useMenuDetail(selectedMenu); // 선택한 메뉴 상세 정보
    const addMenuMutation = useAddMenuMutation();
    const deleteMenuMutation = useDeleteMenuMutation();

    // ✅ 메뉴 선택 시 input에 자동 입력 + 비활성화
    useEffect(() => {
        if (menus && menus.length > 0 && !selectedMenu) {
            setSelectedMenu(menus[0].menuId);
        }
    }, [menus]);

    // ✅ 메뉴 선택 시 input에 자동 입력 + 비활성화
    useEffect(() => {
        if (!menuDetail || !Array.isArray(menuDetail) || menuDetail.length === 0) {
            console.error("❌ [useEffect] 메뉴 데이터가 유효하지 않음: ", menuDetail);
            return;
        }
    
        console.log("🔥 [useEffect] 불러온 메뉴 정보: ", menuDetail[0]);
    
        setFormData({
            menuName: menuDetail[0]?.menuName || "",
            menuCategory: menuDetail[0]?.menuCategory || "",
            menuSequence: menuDetail[0]?.menuSequence || 0,
            isExposure: menuDetail[0]?.isExposure || 1,
            singleImg: menuDetail[0]?.singleImg || null,
            setImg: menuDetail[0]?.setImg || null,
            prices: menuDetail[0]?.menuPrices
                ? menuDetail[0].menuPrices.map(price => ({
                    size: price.size,
                    price: price.menuPrice || "",
                    discountPrice: price.discountPrice || ""
                }))
                : [],
        });
    }, [menuDetail]);

    // ✅ input 변경 핸들러
    const handleInputValueOnChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => {
            if (type === "checkbox") {
                return { ...prev, [name]: checked ? 1 : 0 };
            }

            if (name === "singlePrice" || name === "setPrice") {
                return {
                    ...prev,
                    prices: prev.prices.map((p) =>
                        p.size === (name === "singlePrice" ? "M" : "L") ? { ...p, price: value } : p
                    ),
                };
            }

            return { ...prev, [name]: value };
        });
    };

    // ✅ 이미지 업로드
    const handleImageUpload = (e, type) => {
        const file = e.target.files[0];
        setFormData(prev => ({
            ...prev,
            [type === "single" ? "singleImg" : "setImg"]: file
        }));
    };

    // ✅ 메뉴 추가
    const handleSubmitMenuOnClick = async () => {
        try {
            await addMenuMutation.mutateAsync(formData);
            alert("메뉴가 추가되었습니다.");
        } catch (error) {
            console.error("메뉴 추가 실패:", error);
            alert("메뉴 추가 중 오류 발생!");
        }
    };

    // ✅ 메뉴 삭제
    const handleDeleteMenuOnClick = async () => {
        if (!selectedMenu) return alert("삭제할 메뉴를 선택하세요.");

        try {
            await deleteMenuMutation.mutateAsync(selectedMenu);
            alert("메뉴가 삭제되었습니다.");
        } catch (error) {
            console.error("메뉴 삭제 실패:", error);
            alert("메뉴 삭제 중 오류 발생!");
        }
    };

    return (
        <div css={s.container}>
            {/* ✅ 메뉴 선택 드롭다운 */}
            <div css={s.dropdownContainer}>
                <select onChange={(e) => setSelectedMenu(e.target.value)} css={s.dropdown}>
                    <option value="">메뉴를 선택해주세요</option>
                    {!isLoading && menus?.length > 0 ? (
                        menus.map((menu) => (
                            <option key={menu.menuId} value={menu.menuId}>
                                {menu.menuName}
                            </option>
                        ))
                    ) : (
                        <option>메뉴가 없습니다</option>
                    )}
                </select>
            </div>

            {/* ✅ 상품 정보 입력 */}
            <div css={s.productContainer}>
                {/* ✅ 이미지 업로드 */}
                <div css={s.imageCon}>
                    <label css={s.imageBox}>
                        <input type="file" onChange={(e) => handleImageUpload(e, "single")} hidden />
                        {formData.singleImg ? (
                            typeof formData.singleImg === "string" ? (
                                <img src={formData.singleImg} alt="Single" />
                            ) : (
                                <img src={URL.createObjectURL(formData.singleImg)} alt="Single" />
                            )
                        ) : (
                            <span>단품 또는 M사이즈</span>
                        )}
                    </label>
                    <label css={s.imageBox}>
                        <input type="file" onChange={(e) => handleImageUpload(e, "set")} hidden />
                        {formData.setImg ? (
                            typeof formData.setImg === "string" ? (
                                <img src={formData.setImg} alt="Set" />
                            ) : (
                                <img src={URL.createObjectURL(formData.setImg)} alt="Set" />
                            )
                        ) : (
                            <span>세트 또는 L사이즈</span>
                        )}
                    </label>
                </div>

                {/* ✅ 입력 필드 */}
                <div css={s.inputGroup}>
                    <div>
                        <label css={s.label}>상품명</label>
                        <input 
                            type="text" 
                            css={s.input} 
                            name="menuName" 
                            value={formData.menuName}  
                            onChange={handleInputValueOnChange} 
                            disabled={selectedMenu !== null}
                        />
                    </div>
                    <div>
                        <label css={s.label}>카테고리</label>
                        <input 
                            type="text" 
                            css={s.input} 
                            name="menuCategory" 
                            value={formData.menuCategory}  
                            onChange={handleInputValueOnChange} 
                            disabled={selectedMenu !== null} 
                        />
                    </div>
                    <div>
                        <label css={s.label}>상품 우선 순위</label>
                        <input 
                            type="number" 
                            css={s.input} 
                            name="menuSequence" 
                            value={formData.menuSequence}  
                            onChange={handleInputValueOnChange} 
                            disabled={selectedMenu !== null} 
                        />
                    </div>
                    <div>
                        <label css={s.label}>노출 여부</label>
                        <Checkbox 
                            name="isExposure" 
                            checked={formData.isExposure === 1} 
                            onChange={handleInputValueOnChange} 
                            disabled={!isEditing} 
                        />
                    </div>
                    <div>
                        <label css={s.label}>단품/M 사이즈 가격</label>
                        <input 
                            type="number" 
                            name="singlePrice" 
                            value={formData.prices.find(p => p.size === "M")?.price || ""} 
                            onChange={handleInputValueOnChange} 
                            css={s.input} 
                            disabled={selectedMenu !== null}  // ✅ 메뉴 선택 시 input 비활성화
                        />
                    </div>
                    <div>
                        <label css={s.label}>세트/L 사이즈 가격</label>
                        <input 
                            type="number" 
                            css={s.input} 
                            name="setPrice" 
                            value={formData.prices.find(p => p.size === "L")?.price || ""} 
                            onChange={handleInputValueOnChange} 
                            disabled={selectedMenu !== null}  // ✅ 메뉴 선택 시 input 비활성화
                        />
                    </div>
                </div>
            </div>

            {/* ✅ 버튼 그룹 */}
            <div css={s.buttonGroup}>
                <button onClick={() => setIsEditing(true)} css={s.button}>편집</button> 
                <button onClick={handleSubmitMenuOnClick} css={s.button} disabled={!isEditing}>추가</button>
                <button onClick={handleDeleteMenuOnClick} css={s.button}>삭제</button>
            </div>
        </div>
    );
}

export default App;
