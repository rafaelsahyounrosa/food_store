import styled from 'styled-components'
import { cores } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 32px;
  column-gap: 32px;
  margin-bottom: 120px;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.83);
    z-index: -1;
  }

  &.active {
    display: flex;
  }
`

export const ModalContent = styled.div`
  width: 1024px;
  height: 344px;
  background-color: ${cores.vermelho};
  padding: 32px;
  color: ${cores.amareloClaroFundo};
  position: relative;
`
export const ModalContainer = styled.div`
  display: flex;
  gap: 24px;

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  div h4 {
    font-size: 18px;
    color: ${cores.branca};
    margin-bottom: 16px;
  }

  div p,
  div span {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${cores.branca};
    margin-bottom: 16px;
  }

  div button {
    padding: 4px 7px;
    border: none;
    cursor: pointer;
    display: block;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    margin-top: 16px;
    background-color: ${cores.amareloMedio};
    color: ${cores.vermelho};
  }
`

export const Close = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
`
