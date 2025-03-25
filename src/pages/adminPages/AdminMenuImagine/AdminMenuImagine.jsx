/** @jsxImportSource @emotion/react */
import { useState, useMemo } from "react";
import * as s from "./style";

function ImageModal({ isOpen, onClose, images, onSelect, categories }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedUrl, setSelectedUrl] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("전체");

    const filteredImages = useMemo(() => {
        if (selectedCategory === "전체") return images;
        return images.filter(img => img.category === selectedCategory);
    }, [images, selectedCategory]);

    const imagesPerPage = 20;
    const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
    const startIndex = (currentPage - 1) * imagesPerPage;
    const currentImages = filteredImages.slice(startIndex, startIndex + imagesPerPage);

    if (!isOpen) return null;

    const handleImgOnClick = (img) => {
        setSelectedUrl(img);
        onSelect(img);
        onClose();
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        setCurrentPage(1); // 필터 바뀌면 페이지 초기화
    };

    return (
        <div css={s.modalOverlay} onClick={onClose}>
            <div css={s.modalContent} onClick={(e) => e.stopPropagation()}>
                <button css={s.closeButton} onClick={onClose}>X</button>
                
                <div css={s.headerRow}>
                    <h3 css={s.label}>이미지를 선택하세요</h3>
                    <select css={s.select} value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="전체">전체</option>
                        {categories.map((category, idx) => (
                            <option key={idx} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                <div css={s.imageGrid}>
                    {currentImages.length > 0 ? (
                        currentImages.map((img, idx) => (
                            <div key={idx} css={s.imageBox}>
                                <img
                                    src={img.url}
                                    alt={img.name}
                                    css={[
                                        s.modalImage,
                                        selectedUrl === img.url && s.selectedImage
                                    ]}
                                    onClick={() => handleImgOnClick(img.url)}
                                />
                                <p css={s.imageLabel}>{img.name}</p>
                            </div>
                        ))
                    ) : (
                        <p>이미지가 없습니다.</p>
                    )}
                </div>

                <div css={s.pagination}>
                    <button onClick={handlePrev} disabled={currentPage === 1}>◀ 이전</button>
                    <span>{currentPage} / {totalPages}</span>
                    <button onClick={handleNext} disabled={currentPage === totalPages}>다음 ▶</button>
                </div>
            </div>
        </div>
    );
}

export default ImageModal;
