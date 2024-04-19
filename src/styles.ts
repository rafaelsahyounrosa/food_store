import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  preta: '#111',
  cinza: '#333',
  cinzaClaro: '#A3A3A3',
  verde: '#10AC84',
  vermelho: '#E66767',
  amareloClaroFundo: '#FFF8F2',
  amareloMedio: '#FFEBD9'
}
export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body{
    background-color: ${cores.amareloClaroFundo};
    color: ${cores.branca};
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
