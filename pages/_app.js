import '../styles/global.scss'
import '../src/styles/app.scss'
import ReduxWrapper from "../component/ReduxWrapper";

function FinanceApp({ Component, pageProps }) {
  return (
    <ReduxWrapper>
      <Component {...pageProps} />
    </ReduxWrapper>
  )
}

export default FinanceApp
