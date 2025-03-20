/**@jsxImportSource @emotion/react */
import * as s from "./style";

function ImageModal({ isOpen, onClose, images, onSelect }) {
    if (!isOpen) return null;

    return (
        <div css={s.modalOverlay} onClick={onClose}>
            <div css={s.modalContent} onClick={(e) => e.stopPropagation()}>
                <button css={s.closeButton} onClick={onClose}>X</button>
                <h3>이미지를 선택하세요</h3>
                <div css={s.imageGrid}>
                    {images.length > 0 ? (
                        images.map((img, index) => (
                            <img 
                                key={index} 
                                src={img} 
                                alt="메뉴 이미지" 
                                css={s.modalImage} 
                                onClick={() => onSelect(img)}
                            />
                        ))
                    ) : (
                        <p>이미지가 없습니다.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ImageModal;