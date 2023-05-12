import { ThemeProvider } from 'styled-components';

import Text from "@/components/atoms/Text"

import { GlobalStyles } from '@/global';
import { selectTheme } from '@/global/theme'
import Button from '@/components/molecules/button';
import Icon from '@/components/atoms/icon';

export default function Home() {
  const theme = selectTheme({
    color: 'default',
    font: 'default',
  });
  return (
    <><ThemeProvider theme={theme}>
      <Text type="H1" color='ACCENTED'>Headline</Text>
      <Text type="H2" color='ACCENTED_DARK'>Headline</Text>
      <Text type="H3">Headline</Text>
      <Text type="H4">Headline</Text>
      <Text type="H5" color='ERROR'>Headline</Text>
      <Text type="H6" color='ACCENTED_DARK'>Headline</Text>
      <Text type="Subtitle 1" color='PRIMARY'>Subtitle 1</Text>
      <Text type="Subtitle 2" color='PRIMARY_DARK'>Subtitle 2</Text>
      <Text type="Body 1" color='BACKGROUND'>Body 1</Text>
      <Text type="Body 2" color='ACCENTED_DARK'>Body 2</Text>
      <Text type="BUTTON" color='ACCENTED'>BUTTON</Text>
      <GlobalStyles />
      <Button size='large' ><Icon name={'github'} size={'large'} color={'white'} /></Button>
    </ThemeProvider></>
  )
}
