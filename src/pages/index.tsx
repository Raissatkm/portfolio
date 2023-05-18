import { ThemeProvider } from 'styled-components';

import Text from "@/components/atoms/Text"

import { GlobalStyles } from '@/global';
import { selectTheme } from '@/global/theme'
import Navbar from '@/components/organisms/Navbar';

export default function Home() {
  const theme = selectTheme({
    color: 'default',
    font: 'default',
  });
  return (
      <ThemeProvider theme={theme}>
        <div style={{ backgroundColor: '#000', width: 2000, height: 2000 }}>

          <Navbar AboutButtonProps={{
            label: 'Sobre',
            onClick: () => {},
          }} ContactButtonProps={{
            label: 'Contato',
            onClick: () => {},
          }} ProjectButtonProps={{
            label: 'Projeto',
            onClick: () => {},
          }} ResumeButtonProps={{
            label: 'Resumo',
            onClick: () => {},
          }}/>
        </div>
        <GlobalStyles />
      </ThemeProvider>
  )
}
