import {createContext, useContext} from 'react';

// 서버 환경: { done: false, promises: [] }
const PreloadContext = createContext(null);
export default PreloadContext;

export const Preloader = ({resolve}) => {
    const preloadContext = useContext(PreloadContext);
    if (!preloadContext) return null; // context 값이 유효하지 않으면 null
    if (preloadContext.done) return null; // 이미 작업이 끝나면 null
    
    // promises 배열에 프로미스 등록
    // resolve 함수가 프로미스를 반환하지 않아도 프로미스 취급을 위해
    // Promise.resolve 함수 사용
    preloadContext.promises.push(Promise.resolve(resolve()));
    return null;
};