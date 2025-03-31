// src/atoms/disabledCategories.js
import { atom } from 'recoil';

export const disabledCategoriesState = atom({
  key: 'disabledCategoriesState',  // atom 고유 ID
  default: [],  // 기본값은 빈 배열로 설정
});
