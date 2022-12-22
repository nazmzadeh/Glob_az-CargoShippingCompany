import './Packages.scss';

export const Packages = () => {
  return (
    <div className="packages-main">
      <div className="cart-header">
        <span className="cart-label">Bağlamalar</span>
        <select className="packages-select" id="packages-select">
          <option value="paltar">Bütün Bağlamalar (0)</option>
          <option value="palto">Xarici Anbardadır (0)</option>
          <option value="yarimpalto">Yoldadır (0)</option>
          <option value="buruncek">Gömrükdədir (0)</option>
          <option value="buruncek">Yerli Anbardadır (0)</option>
          <option value="buruncek">Təhvil Verildi (0)</option>
        </select>
      </div>
      <div className="cart-content">
        <span className="cart-text">Hazırda səbətinizdə heç bir məhsul yoxdur.</span>
      </div>
    </div>
  );
};
