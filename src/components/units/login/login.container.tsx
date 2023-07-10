import { useState } from "react";
import * as S from "./login.styles";
// import { Modal } from 'antd';

export default function Login(): JSX.Element {
  const [isTrue, setIsTrue] = useState(false);

  const handleModal = (): void => {
    setIsTrue((prev) => !prev);
  };

  return (
    <>
      <S.Wrapper>
        <button onClick={handleModal}>나와라 모달</button>
        {isTrue && (
          <S.ModalWrapper>
            <S.Modal>
              <S.Title>log in</S.Title>
              <button onClick={handleModal}>모달 닫기</button>
            </S.Modal>
          </S.ModalWrapper>
        )}
      </S.Wrapper>
    </>
  );
}
