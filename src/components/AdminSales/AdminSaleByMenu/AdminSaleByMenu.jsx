/**@jsxImportSource @emotion/react */
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as s from './style';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useMutation } from '@tanstack/react-query';
import { getPaymentsRequest } from '../../../apis/AdminApi/AdminSalesApi';
import PageModal from '../../Modal/PageModal/PageModal';
import { MenuItem, Select } from '@mui/material';
import ToggleSwitch from '../../ToggleSwitch/ToggleSwitch';
import AdminSalesChart from '../AdminSalesChart/AdminSalesChart';
import { salesModeState } from '../../../atoms/salesModeState/salesModeState';

function AdminSaleByMenu({ menuList }) {
    const [salesByMenu, setSalesByMenu] = useState([]);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [yearOptions, setYearOptions] = useState([]);
    const [year, setYear] = useState("");
    const [searchParams] = useSearchParams();
    const [salesMode, setSalesMode] = useRecoilState(salesModeState);
    const navigate = useNavigate();

    // 메뉴 설정
    useEffect(() => {
        const menuIdFromParams = parseInt(searchParams.get("menuId"));
        const menu = menuList.find(menu => menu.menuId === menuIdFromParams);
        setSelectedMenu(menu || null);
    }, [menuList, searchParams]);

    const portOneMutation = useMutation({
        mutationKey: ["portOneSales"],
        mutationFn: getPaymentsRequest,
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            const rawData = response.data.items;
            const validData = rawData.filter(item =>
                !['CANCELLED', 'FAILED', 'READY'].includes(item.status)
            );

            const processed = validData.map(item => {
                const paidAt = new Date(item.paidAt);
                const year = paidAt.getFullYear();
                const month = paidAt.getMonth() + 1;

                return item.products.map(product => ({
                    name: product.name,
                    menuId:product.menuId,
                    quantity: product.quantity,
                    price: product.amount,
                    year,
                    month
                }));
            }).flat();

            const grouped = {};

            processed.forEach(({ name, quantity, price, year, month }) => {
                const names = name.split(',').map(n => n.trim());
            
                names.forEach(n => {
                    const match = menuList.find(menu =>
                        menu.menuName === n || menu.menuNameEng === n
                    );
            
                    if (!match) {
                        return;
                    }
            
                    const key = `${match.menuId}-${year}-${month}`;
                    if (!grouped[key]) {
                        grouped[key] = {
                            menuId: match.menuId,
                            menuName: match.menuName,
                            year,
                            month,
                            totalSales: 0,
                            totalCount: 0
                        };
                    }
                    grouped[key].totalSales += quantity * price;
                    grouped[key].totalCount += quantity;
                });
            });
            const result = Object.values(grouped);
            setSalesByMenu(result);

            // 연도 설정
            const uniqueYears = [...new Set(result.map(item => item.year))];
            const options = uniqueYears.map(y => ({ label: y, value: y }));
            setYearOptions(options);

            if (options.length > 0) setYear(options[0].value);
        },
        onError: (error) => {
            console.log("salesQuery", error);
        }
    });

    useEffect(() => {
        portOneMutation.mutate();
    }, []);

    const handleonClickCancel = () => navigate("/admin/main/sale");

    const handleYearOptionsOnChange = (e) => setYear(e.target.value);

    const filteredSalesByMenu = selectedMenu
        ? salesByMenu.filter(
            item => item.menuName === selectedMenu.menuName && item.year === year
        )
        : [];

    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>메뉴 매출 조회</div>
                </div>
                <div css={s.main}>
                    <div css={s.chartLayout}>
                        <div css={s.toggleSwitchLayout}>
                            <div css={s.toggleSwitch}>
                                <div>총 매출</div>
                                <ToggleSwitch
                                    width={50}
                                    height={25}
                                    onColor={"#ff7300"}
                                    offColor={"#8abdf3"}
                                    state={"sales"}
                                    checked={salesMode}
                                />
                                <div>총 주문 수</div>
                            </div>
                            <Select
                                value={year || "연도 선택"}
                                onChange={handleYearOptionsOnChange}
                                style={{ width: "14rem", fontSize: "1.4rem" }}
                            >
                                <MenuItem value="연도 선택">
                                    <em>연도 선택</em>
                                </MenuItem>
                                {yearOptions.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                        <div css={s.chartBox}>
                            <AdminSalesChart
                                sales={filteredSalesByMenu}
                                month={"month"}
                                keyName={salesMode ? "총 주문 수" : "총 매출"}
                                dataKey={salesMode ? "totalCount" : "totalSales"}
                                barColor={salesMode ? "#ff7300" : "#8abdf3"}
                                lineColor={salesMode ? "#8abdf3" : "#ff7300"}
                            />
                        </div>
                    </div>
                </div>
                {selectedMenu && (
                    <div css={s.menuInfo}>
                        <div css={s.imgBox}>
                            <img src={selectedMenu.singleImg || 'default-image-url'} alt="menuImg" />
                        </div>
                        <div css={s.infoBox}>
                            <div>{selectedMenu.menuName}</div>
                            <div>{selectedMenu.menuCategory}</div>
                            <div>{selectedMenu.menuPrice?.[0]?.menuPrice
                                ? `${selectedMenu.menuPrice[0].menuPrice}원`
                                : '가격 정보 없음'}</div>
                            <div>Menu ID: {selectedMenu.menuId}</div>
                            <div>Discount Price: {selectedMenu.menuPrice?.[0]?.discountPrice
                                ? `${selectedMenu.menuPrice[0].discountPrice}원`
                                : '할인 가격 정보 없음'}</div>
                        </div>
                    </div>
                )}
                <div css={s.buttonLayout}>
                    <button css={s.cancel} onClick={handleonClickCancel}>
                        닫기
                    </button>
                </div>
            </div>
        </PageModal>
    );
}

export default AdminSaleByMenu;
