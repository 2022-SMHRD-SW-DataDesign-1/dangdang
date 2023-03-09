








import DaumPostcode from 'react-daum-postcode';

// 다음 주소 API
const postCodeStyle = {
    width: '400px',
    height: '400px',
    display: modalState ? 'block' : 'none',
}; // 스타일 정의 code
<DaumPostcode
    style={postCodeStyle}
    onComplete={onCompletePost}
></DaumPostcode> // 컴포넌트 내에서 사용한 code
const onCompletePost = data => {
    setModalState(false);
    setInputAddressValue(data.address);
    setInputZipCodeValue(data.zonecode);
}; // onCompletePost 함수