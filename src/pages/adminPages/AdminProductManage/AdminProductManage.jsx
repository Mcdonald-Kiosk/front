/**@jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import { Checkbox } from "@mui/material";
import { useAddMenuMutation, useDeleteMenuMutation } from "../../../mutations/menuMutation";
import ImageModal from "../AdminMenuImagine/AdminMenuImagine";
import { useMenuDetail } from "../../../hooks/menu/menuManageHooks";
import useMenuData from "../../../hooks/menu/menuManageHooks";

function App() {
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [imageList, setImageList] = useState([]);  // ✅ DB에서 불러온 이미지 리스트
    const [selectedImageType, setSelectedImageType] = useState(""); // ✅ "single" 또는 "set" 저장

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

    // ✅ 첫 번째 메뉴를 자동으로 선택 (초기 selectedMenu가 null일 경우)
    useEffect(() => {
        if (!selectedMenu && menus && menus.length > 0) {
            setSelectedMenu(menus[0].menuId);
        }
    }, [menus]); 
    

    // ✅ menuDetail이 정상적으로 존재할 경우에만 formData 업데이트
    useEffect(() => {
        if (!menuDetail || typeof menuDetail !== "object") {
            console.warn("⚠️ [useEffect] 메뉴 데이터가 올바르지 않습니다.", menuDetail);
            return;
        }
    
        console.log("🔥 [useEffect] 불러온 메뉴 정보: ", menuDetail);
    
        setFormData({
            menuName: menuDetail.menuName || "",
            menuCategory: menuDetail.menuCategory || "",
            menuSequence: menuDetail.menuSequence || 0,
            isExposure: menuDetail.isExposure ?? 1,
            singleImg: menuDetail.singleImg || null,
            setImg: menuDetail.setImg || null,
            prices: Array.isArray(menuDetail.menuPrice)  // ✅ 여기!
                ? menuDetail.menuPrice.map(price => ({
                    size: price.size,
                    price: price.menuPrice || "",
                    discountPrice: price.discountPrice || ""
                }))
                : [],
        });
    }, [menuDetail]);

    // ✅ 이미지 클릭 시 모달 오픈
    const handleOpenModal = (type) => {
        setSelectedImageType(type);
        setModalOpen(true);
    };

    // ✅ 사용자가 이미지를 선택하면 반영
    const handleSelectImage = (imgUrl) => {
        setFormData(prev => ({
            ...prev,
            [selectedImageType === "single" ? "singleImg" : "setImg"]: imgUrl
        }));
        setModalOpen(false);
    };



    // ✅ input 변경 핸들러
    const handleInputValueOnChange = (e) => {
        const { name, value, type, checked } = e.target;
    
        // 노출 여부 (checkbox)
        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                [name]: checked ? 1 : 0,
            }));
            return;
        }
    
        // 가격 (M / L)
        if (name === "M" || name === "L") {
            setFormData((prev) => ({
                ...prev,
                prices: prev.prices.map((p) =>
                    p.size === name ? { ...p, price: value } : p
                ),
            }));
            return;
        }
    
        // 일반 텍스트
        setFormData((prev) => ({
            ...prev,
            [name]: value,
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
                <select onChange={(e) => setSelectedMenu(Number(e.target.value))} css={s.dropdown}>
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
                     {/* ✅ 이미지 선택 */}
                <div css={s.imageCon}>
                    <label css={s.imageBox} onClick={() => handleOpenModal("single")}>
                        {formData.singleImg ? (
                            <img src={formData.singleImg} alt="Single" />
                        ) : (
                            <span>단품 또는 M사이즈</span>
                        )}
                    </label>
                    <label css={s.imageBox} onClick={() => handleOpenModal("set")}>
                        {formData.setImg ? (
                            <img src={formData.setImg} alt="Set" />
                        ) : (
                            <span>세트 또는 L사이즈</span>
                        )}
                    </label>
                </div>
            </div>
            {/* ✅ 모달 추가 */}
            <ImageModal isOpen={modalOpen} onClose={() => setModalOpen(false)} images={imageList} onSelect={handleSelectImage} />
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
                            name="M" 
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
                            name="L" 
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
