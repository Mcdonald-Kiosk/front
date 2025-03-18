/**@jsxImportSource @emotion/react */
import { QueryClient, useQueryClient } from '@tanstack/react-query';
import ValidInput from '../../../components/ValidInput/ValidInput';
import * as s from './style';
import { useState, useEffect } from "react";
import { Checkbox } from '@mui/material';

function App() {
    const [menus, setMenus] = useState([]);
    const [menuName, setMenuName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [sequence, setSequence] = useState("");
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [inputValue, setInputValidInput] = useState({
        menuName: "",
        category: "",
        price: "",
        description: "",
        sequence: "",
    });
    const queryClient = useQueryClient();
    const menuImgData = queryClient.getQueryData(["userMeQuery"]);

    useEffect(() => {
        fetchMenus();
    }, []);

    const fetchMenus = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/menus");
            const data = await response.json();
            setMenus(data);
        } catch (error) {
            console.error("메뉴 불러오기 실패:", error);
        }
    };

    const handleMenuSelect = (e) => {
        const selectedId = e.target.value;
        const menu = menus.find((m) => m.id.toString() === selectedId);
        setSelectedMenu(menu);
        if (menu) {
            setMenuName(menu.menuName);
            setCategory(menu.category);
            setPrice(menu.price);
            setDescription(menu.description);
            setSequence(menu.sequence);
        }
    };



    const handleInputProductInfoOnChange = (e) => {
        const {name, value} = e.target;
        if (!name) return;

        setInputValidInput(prev => ({
            ...prev,
            [name]: value,
        }));
        console.log(inputValue);
    }

    const addMenu = async () => {
        const newMenu = { menuName, category, price: Number(price), description, sequence }; // 추가 
        try {
            await fetch("http://localhost:8080/api/menus", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newMenu),
            });
            fetchMenus();
        } catch (error) {
            console.error("메뉴 추가 실패:", error);
        }
    };

    const updateMenu = async () => {
        if (!selectedMenu) return alert("수정할 메뉴를 선택하세요.");
        const updatedMenu = { id: selectedMenu.id, menuName, category, price: Number(price), description };
        try {
            await fetch(`http://localhost:8080/api/menus/${selectedMenu.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedMenu),
            });
            fetchMenus();
        } catch (error) {
            console.error("메뉴 수정 실패:", error);
        }
    };

    const deleteMenu = async () => {
        if (!selectedMenu) return alert("삭제할 메뉴를 선택하세요.");
        try {
            await fetch(`http://localhost:8080/api/menus/${selectedMenu.id}`, { method: "DELETE" });
            setSelectedMenu(null);
            setMenuName("");
            setCategory("");
            setPrice("");
            setDescription("");
            setSequence("");
            fetchMenus();
        } catch (error) {
            console.error("메뉴 삭제 실패:", error);
        }
    };

    return (
        <div css={s.container}>
            {/* 선택 */}
            <div css={s.dropdownContainer}>
                <select onChange={handleMenuSelect} css={s.dropdown}>
                    <option value="">메뉴를 선택해주세요</option>
                    {menus.length > 0 ? (
                        menus.map((menu) => (
                            <option key={menu.id} value={menu.id}>
                                {menu.menuName}
                            </option>
                        ))
                    ) : (
                        <option>메뉴가 없습니다</option>
                    )}
                </select>
            </div>

            {/* 상품 정보 */}
            <div css={s.productContainer}>
                {/* 이미지 */}
                <div css={s.imageCon}>
                    <div css={s.imageBox}>
                        <img src={`http://localhost:8080/image/menu/${menuImgData?.data.profileImg}`} alt="" />
                    </div>
                        <h6>단품 또는 M사이즈</h6>
                    <div css={s.imageBox}>
                        <img src={`http://localhost:8080/image/menu/${menuImgData?.data.profileImg}`} alt="" />
                    </div>
                        <h6>세트 또는 L사이즈</h6>
                </div>
                {/* 입력 */}
                <div css={s.inputGroup}>
                    <div>
                        <label css={s.label}>상품명</label>
                        <input type="text" 
                            css={s.input} 
                            name={"menuName"}
                            value={inputValue.menuName} 
                            onChange={handleInputProductInfoOnChange} 
                        />
                        
                    </div>
                    <div>
                        <label css={s.label}>카테고리</label>
                        <input type="text" 
                            css={s.input} 
                            name={"category"}
                            value={inputValue.category} 
                            onChange={handleInputProductInfoOnChange} 
                        />
                    </div>
                    <div>
                        <label css={s.label}>상품 정보</label>
                        <textarea 
                            value={inputValue.description} 
                            css={s.textArea} 
                            name={"description"}
                            onChange={handleInputProductInfoOnChange} 
                        />
                    </div>
                    <div>
                        <label css={s.label}>단품 또는 M 사이즈 가격</label>
                        <input type="number" 
                            css={s.input} 
                            name={"price"}
                            value={inputValue.price} 
                            onChange={handleInputProductInfoOnChange} 
                        />
                    </div>
                    <div>
                        <label css={s.label}>세트 또는 L 사이즈 가격</label>
                        <input type="number" 
                            css={s.input} 
                            name={"price"}
                            value={inputValue.price} 
                            onChange={handleInputProductInfoOnChange} 
                        />
                    </div>
                    <div>
                        <label css={s.label}>노출 여부</label>
                        <Checkbox
                            // onChange={handle}
                            defaultChecked
                            size='medium'
                            color='success'

                        />
                    </div>

                    {/* 버튼 그룹 */}
                    <div css={s.buttonGroup}>
                        <button onClick={addMenu} css={s.button}>추가</button>
                        <button onClick={updateMenu} css={s.button}>수정</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
