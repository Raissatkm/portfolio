import { ThemeProvider } from 'styled-components';

import Text from "@/components/atoms/Text"

import { GlobalStyles } from '@/global';
import { selectTheme } from '@/global/theme'
import Button from '@/components/molecules/Button';

export default function Home() {
  const theme = selectTheme({
    color: 'default',
    font: 'default',
  });
  return (
    <><ThemeProvider theme={theme}>
      <Button onClick={() => {}} 
        size='small'
        IconProps={{
          color: 'green',
          name: 'github',
          size: 'small'
        }}
      />
      <GlobalStyles />
    </ThemeProvider></>
  )
}
