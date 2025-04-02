/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import useMenuData from "../../../hooks/menu/getMenuHooks";
import { useMenuInfoList } from "../../../hooks/menu/getMenuInfoHook";

function AdminProductInfo() {
    const { data: menus = [] } = useMenuData();
    const [selectedMenuId, setSelectedMenuId] = useState(null);
    const { data: menuInfoList = [] } = useMenuInfoList(selectedMenuId);
    const [selectedMenu, setSelectedMenu] = useState(null);

    useEffect(() => {
        if (menus.length > 0) {
            setSelectedMenuId(menus[0].menuId);
        }
    }, [menus]);

    useEffect(() => {
        if (selectedMenuId) {
            const found = menus.find((m) => m.menuId === selectedMenuId);
            setSelectedMenu(found || null);
        }
    }, [selectedMenuId, menus]);

    const NUTRITION_STANDARD = {
        sugars: 100,
        protein: 55,
        saturatedFat: 15,
        sodium: 2000,
    };

    const calculatePercentage = (value, standard) => {
        if (!value || !standard) return "-";
        return `${Math.round((value / standard) * 100)}%`;
    };

    const handleSubmit = () => {
        alert("추가 기능 준비 중!");
    };

    const handleUpdate = () => {
        alert("수정 기능 준비 중!");
    };

    return (
        <div css={s.container}>
            {/* 이미지 & input */}
            <div css={s.productContainer}>
                <div css={s.imageCon}>
                    <label css={s.imageBox}>
                        {selectedMenu?.singleImg ? (
                            <img src={selectedMenu.singleImg} alt={selectedMenu.menuName} />
                        ) : (
                            <span>이미지 없음</span>
                        )}
                    </label>
                </div>
                <div css={s.menuGroup}>
                    {/* 드롭다운 */}
                    <div css={s.dropdownContainer}>
                        <label css={s.label}>메뉴</label>
                        <select
                            css={s.dropdown}
                            value={selectedMenuId || ""}
                            onChange={(e) => setSelectedMenuId(Number(e.target.value))}
                        >
                            {menus.map((menu) => (
                                <option key={menu.menuId} value={menu.menuId}>
                                    {menu.menuName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label css={s.label}>상품명</label>
                        <input
                            type="text"
                            css={s.input}
                            value={selectedMenu?.menuName || ""}
                            readOnly
                        />
                    </div>
                    <div>
                        <label css={s.label}>원산지</label>
                        <input
                            type="text"
                            css={s.input}
                            value={menuInfoList[0]?.menuOrigin || ""}
                            readOnly
                        />
                    </div>
                    {/* 버튼 */}
                    <div css={s.buttonGroup}>
                        <button css={s.button} onClick={handleSubmit}>
                            추가
                        </button>
                        <button css={s.button} onClick={handleUpdate}>
                            수정
                        </button>
                    </div>
                </div>
            </div>

            {/* 영양정보 */}
            {menuInfoList.length > 0 && (
                <>
                    {/* M사이즈 */}
                    {menuInfoList
                        .filter((info) => info.size === "M")
                        .map((info) => (
                            <table css={s.table} key={`M-${info.menuInfoId}`}>
                                <caption css={s.caption}>M 사이즈 영양정보</caption>
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
                                        <td css={s.td}>{info.weight || "-"}</td>
                                        <td css={s.td}>{info.volume || "-"}</td>
                                        <td css={s.td}>{info.calories || "-"}</td>
                                        <td css={s.td}>{info.sugars || "-"}</td>
                                        <td css={s.td}>{info.protein || "-"}</td>
                                        <td css={s.td}>{info.saturatedFat || "-"}</td>
                                        <td css={s.td}>{info.sodium || "-"}</td>
                                        <td css={s.td}>{info.caffeine || "-"}</td>
                                    </tr>
                                    <tr css={s.evenRow}>
                                        <td css={s.td}>영양소 기준치</td>
                                        <td css={s.td}>-</td>
                                        <td css={s.td}>-</td>
                                        <td css={s.td}>-</td>
                                        <td css={s.td}>
                                            {calculatePercentage(info.sugars, NUTRITION_STANDARD.sugars)}
                                        </td>
                                        <td css={s.td}>
                                            {calculatePercentage(info.protein, NUTRITION_STANDARD.protein)}
                                        </td>
                                        <td css={s.td}>
                                            {calculatePercentage(info.saturatedFat, NUTRITION_STANDARD.saturatedFat)}
                                        </td>
                                        <td css={s.td}>
                                            {calculatePercentage(info.sodium, NUTRITION_STANDARD.sodium)}
                                        </td>
                                        <td css={s.td}>-</td>
                                    </tr>
                                </tbody>
                            </table>
                        ))}

                    {/* L사이즈 */}
                    {menuInfoList
                        .filter((info) => info.size === "L")
                        .map((info) => (
                            <table css={s.table} key={`L-${info.menuInfoId}`}>
                                <caption css={s.caption}>L 사이즈 영양정보</caption>
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
                                        <td css={s.td}>{info.weight || "-"}</td>
                                        <td css={s.td}>{info.volume || "-"}</td>
                                        <td css={s.td}>{info.calories || "-"}</td>
                                        <td css={s.td}>{info.sugars || "-"}</td>
                                        <td css={s.td}>{info.protein || "-"}</td>
                                        <td css={s.td}>{info.saturatedFat || "-"}</td>
                                        <td css={s.td}>{info.sodium || "-"}</td>
                                        <td css={s.td}>{info.caffeine || "-"}</td>
                                    </tr>
                                    <tr css={s.evenRow}>
                                        <td css={s.td}>영양소 기준치</td>
                                        <td css={s.td}>-</td>
                                        <td css={s.td}>-</td>
                                        <td css={s.td}>-</td>
                                        <td css={s.td}>
                                            {calculatePercentage(info.sugars, NUTRITION_STANDARD.sugars)}
                                        </td>
                                        <td css={s.td}>
                                            {calculatePercentage(info.protein, NUTRITION_STANDARD.protein)}
                                        </td>
                                        <td css={s.td}>
                                            {calculatePercentage(info.saturatedFat, NUTRITION_STANDARD.saturatedFat)}
                                        </td>
                                        <td css={s.td}>
                                            {calculatePercentage(info.sodium, NUTRITION_STANDARD.sodium)}
                                        </td>
                                        <td css={s.td}>-</td>
                                    </tr>
                                </tbody>
                            </table>
                        ))}
                </>
            )}
        </div>
    );
}

export default AdminProductInfo;
