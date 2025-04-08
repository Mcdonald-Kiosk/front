/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from 'react';
import {
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

// 🎨 커스텀 애니메이션 선 컴포넌트 (SVG path 직접 그림)
function CustomAnimatedLine({ points, stroke, strokeWidth }) {
    const pathRef = useRef(null);

    // SVG path 문자열 생성 (M x,y L x,y ...)
    const pathD = points.reduce((acc, point, index) => {
        const command = index === 0 ? 'M' : 'L';
        return `${acc} ${command}${point.x},${point.y}`;
    }, '');

    useEffect(() => {
        const length = pathRef.current?.getTotalLength?.() ?? 0;

        // keyframes 직접 생성
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes draw-line {
                from {
                stroke-dashoffset: ${length};
                }
                to {
                stroke-dashoffset: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // 애니메이션 적용
        if (pathRef.current) {
            pathRef.current.style.strokeDasharray = length;
            pathRef.current.style.strokeDashoffset = length;
            pathRef.current.style.animation = `draw-line 1.2s ease-out 1.5s forwards`;
        }
        }, []);

    return (
        <path
        ref={pathRef}
        d={pathD}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill="none"
        />
    );
}

// 메인 차트 컴포넌트
function AdminSalesChart({
    sales,
    month,
    keyName,
    dataKey,
    barColor,
    lineColor,
}) {
  // 월 기준 정렬
    const sortedSales = [...sales].sort((a, b) => {
        const aDate = new Date(2024, a[month] - 1); // month는 0-based
        const bDate = new Date(2024, b[month] - 1);
        return aDate - bDate;
    });

    return (
        <ResponsiveContainer width="100%" height="90%">
            <ComposedChart data={sortedSales}>
                <XAxis dataKey={month} tick={{ fontSize: 11 }} />
                <YAxis
                    width={100}
                    tickCount={7}
                    type="number"
                    domain={[0, 'auto']}
                    allowDecimals={false}
                    tick={{ fontSize: 11 }}
                />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />

                <Bar
                    dataKey={dataKey}
                    barSize={20}
                    name={keyName}
                    fill={barColor}
                    animationDuration={1200}
                    animationEasing="ease-in-out"
                />

                <Line
                    type="linear"
                    dataKey={dataKey}
                    stroke={lineColor}
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    isAnimationActive={false}
                    shape={(props) => (
                        <CustomAnimatedLine
                        points={props.points}
                        stroke={lineColor}
                        strokeWidth={2}
                        />
                    )}
                />
            </ComposedChart>
        </ResponsiveContainer>
    );
}

export default AdminSalesChart;
