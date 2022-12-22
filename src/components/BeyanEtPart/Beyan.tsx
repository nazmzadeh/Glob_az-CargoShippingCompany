import './Beyan.scss';
import turkey from './turkey.svg';

export const Beyan = () => {
  return (
    <div className="beyan-main">
      <div className="beyan-div">
        <div className="beyan-title">
          <span>Bəyannamə əlavə et</span>
        </div>
        <div className="beyan-country">
          <div className="beyan-country-item">
            <img src={turkey} alt="turkey" />
            <span>Türkiyə</span>
          </div>
        </div>
        <form className="beyan-form">
          <div className="beyan-row1">
            <div className="row-inputs">
              <label htmlFor="trackingId">Tracking ID</label>
              <input type="text" id="trackingId" />
            </div>
            <div className="row-inputs">
              <label htmlFor="shopName">Mağazanın adı</label>
              <input type="text" id="shopName" />
            </div>
          </div>
          <div className="beyan-row2">
            <span>Faylları sürüşdürərək çərçivənin içina atın</span>
            <label
              htmlFor="filePicker"
              style={{
                background: '#77bd9b',
                padding: '10px 25px',
                color: '#ffffff',
                borderRadius: '5px',
                width: '180px',
                height: '45px',
              }}
            >
              İnvoys əlavə edin
              <input id="filePicker" style={{ visibility: 'hidden' }} type={'file'} />
            </label>
            <span style={{ textAlign: 'center' }}>
              Maksimum 3 fayl (.pdf .docx .jpg .png) yükləmək imkanınız var
            </span>
          </div>
          <div className="beyan-row3">
            <div className="row-inputs">
              <label htmlFor="beyan-category">Kateqoriya</label>
              <select className="beyan-select" id="beyan-category">
                <option>Kateqoriya seçin</option>
                <option value="paltar">Paltar,Geyim</option>
                <option value="palto">Palto</option>
                <option value="yarimpalto">Yarımpalto</option>
                <option value="buruncek">Bürüncək</option>
              </select>
            </div>
            <div className="row-inputs">
              <label htmlFor="invoys-q">İnvoys qiyməti</label>
              <input type="text" />
            </div>
            <div className="row-inputs">
              <label htmlFor="currency">İnvoys məzzənə</label>
              <select className="beyan-select" id="currency">
                <option value="try">TRY</option>
                <option value="usd">USD</option>
                <option value="euro">EURO</option>
              </select>
            </div>
          </div>
          <textarea className="beyan-note" placeholder="Qeyd" />
          <div className="form-button-div">
            <button className="beyan-form-button">İnvoys yüklə</button>
          </div>
        </form>
      </div>
    </div>
  );
};
