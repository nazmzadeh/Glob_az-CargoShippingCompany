import './Tariffs.scss'
import { Shops } from './components/TariffsPart/TariffsPart'

export const Tariffs = () => {
  return (
    <>
      <div className="container">
        <div className="breadcrumb">
          <ul>
            <li>
              <a href="/" title="">
                Ana səhifə
              </a>
            </li>
            <li>
              <a href="" title="">
                Tariflər
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Shops />
    </>
  )
}
