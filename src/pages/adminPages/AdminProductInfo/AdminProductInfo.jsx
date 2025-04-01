/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import useMenuData from "../../../hooks/menu/getMenuHooks";
import { useMenuInfo } from "../../../hooks/menu/getMenuInfoHook";

function AdminProductInfo() {
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const { data: menus = [], isLoading } = useMenuData();

    useEffect(() => {
        // 렌더링 될 때 첫 번째 메뉴 ID 자동 선택
        if (selectedMenu === null && menus.length > 0) {
            setSelectedMenu(menus[0].menuId);
        }
    }, [menus]);
    

    const handleSubmitMenuOnClick = async () => {
        
    };

    const handleUpdateMenuOnClick = async () => {
        
    };

    return (
        <div css={s.container}>
            <div css={s.dropdownContainer}>
                <select
                    onChange={(e) => setSelectedMenu(Number(e.target.value))}
                    css={s.dropdown}
                    value={selectedMenu || ""}
                >
                    <option value="">메뉴를 선택해주세요</option>
                    {!isLoading && menus.length > 0 ? (
                        menus
                            .filter((menu) => menu && menu.menuId)
                            .map((menu) => (
                                <option key={menu.menuId} value={menu.menuId}>
                                    {menu.menuName}
                                </option>
                            ))
                    ) : (
                        <option disabled>메뉴가 없습니다</option>
                    )}
                </select>
            </div>
            <div css={s.productContainer}>
                <div css={s.imageCon}>
                    <label css={s.imageBox}>
                        <img src="#" alt="Single_img" />
                        <span>메뉴</span>
                    </label>
                </div>

                {/* 입력 */}
                <div css={s.inputGroup}>
                    <div>
                        <label css={s.label}>상품명</label>
                        <input
                            type="text"
                            css={s.input}
                        />
                    </div>
                    <div>
                        <label css={s.label}>원산지</label>
                        <input
                            type="text"
                            css={s.input}
                        />
                    </div>
                    
                </div>
            </div>
            {/* 영양정보 테이블 */}
            <div>
                <table css={s.table}>
                    <caption css={s.caption}>영양정보</caption>
                    <thead>
                        <tr>
                            <th css={s.th}>영양소</th>
                            <th css={s.th}>중량(g)</th>
                            <th css={s.th}>용량(ml)</th>
                            <th css={s.th}>열량(kcal)</th>
                            <th css={s.th}>당(g)</th>
                            <th css={s.th}>단백질(g)</th>
                            <th css={s.th}>포화지방(g)</th>
                            <th css={s.th}>나트륨(mg)</th>
                            <th css={s.th}>카페인(mg)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td css={s.td}>함량</td>
                            <td css={s.td}>276</td>
                            <td css={s.td}>-</td>
                            <td css={s.td}>545</td>
                            <td css={s.td}>11</td>
                            <td css={s.td}>21</td>
                            <td css={s.td}>9</td>
                            <td css={s.td}>966</td>
                            <td css={s.td}>-</td>
                        </tr>
                        <tr css={s.evenRow}>
                            <td css={s.td}>영양소기준치</td>
                            <td css={s.td}>-</td>
                            <td css={s.td}>-</td>
                            <td css={s.td}>-</td>
                            <td css={s.td}>11%</td>
                            <td css={s.td}>39%</td>
                            <td css={s.td}>62%</td>
                            <td css={s.td}>48%</td>
                            <td css={s.td}>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div css={s.buttonGroup}>
                <button css={s.button}> 추가
                </button>

                <button css={s.button}> 수정
                </button>
            </div>
        </div>
    );
}

export default AdminProductInfo;
