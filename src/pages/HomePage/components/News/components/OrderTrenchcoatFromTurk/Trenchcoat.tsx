import '../NewsText.scss';
import { Link } from 'react-router-dom';
import { News } from '../../News';
import Title from '../../../../../../components/TitleofSection/Title';

export const Trenchcoat = () => {
  return (
    <section id="newstext">
      <div className="myContainer">
        <div className="title">
          <Title value="TÜRKİYƏDƏN TRENÇKOT SİFARİŞİ" isWhite={false} />
        </div>
        <div className="news-content">
          <p>
            Zövqlü və zərif görünməyin ən asan yollarından biri də trençkot modelləri ilə kombin etməkdir.
            Trençkotlar uzun müddətdir ki, dəbdən düşməyən üst geyimlərindəndir. Bu səbəbdən də zövq sahibi
            insanlar payız və yaz fəsillərində trençkotlara üstünlük verməkdədir.{' '}
          </p>
          <p>
            Bildiyiniz kimi trençkot modelləri daha çox suyadavamlı parçalardan hazırlanır. Bu səbəblə yağışlı
            və sərin havalarda palto növləri yerinə, daha yüngül və nazik quruluşa malik olan trençkotlara
            üstünlük verilə bilər. Həmçinin, trençkotlar rahatlıqla sport və klassik üslubda kombinlənə bilir.
            Bu da geyimdə zövqsüzlük riskini azaldır və vaxta qənaəti təmin edir. Bütün bu xüsusiyyətlər bir
            araya gəldikdə, trençkotların niyə bu qədər məşhur olduğunu və istifadə edildiyini daha aydın başa
            düşmək mümkündür.
          </p>
          <pre> </pre>
          <p className="bold">Bəs zövqümüzə uyğun trençkotları haradan əldə edək?</p>
          <pre> </pre>
          <p>
            Türkiyənin onlayn alış-veriş saytlarından{' '}
            <span className="bold">Stradivarius, Mango, Bershka, Zara</span> kimi brendlərə məxsus
            trençkotların sifarişi mümkündür. Hər rəngdə keyfiyyətli trençkotları bu markalardan Glob.az
            vasitəsilə sifariş edə bilərsiniz.
          </p>
          <pre> </pre>
          <p className="bold">Sürətli və sərfəli karqo - Glob.az!</p>
          <pre> </pre>
          <p>
            Glob.az - yarandığı gündən etibarən ölkənin ən sürətli fəaliyyət göstərən və ən çox müştəri
            məmnuniyyətinə sahib karqo şirkətidir. Hər zaman müştərilərinin məmnuniyyətini, büdcəsini və
            vaxtını düşünən Glob.az karqo şirkəti, müxtəlif imkanları ilə fərqliliklər yaratmışdır.
            <Link to="/tarifler"> 0.70 USD</Link>-dən başlayan tarifləri Türkiyədən edilən sifarişləri sərfəli
            edir. İstər vebsayt, istərsə də mobil tətbiq vasitəsilə sifarişlərinizi etibarlı şəkildə həyata
            keçirə bilərsiniz.
          </p>
          <p>
            Siz də payızın gəlişini Glob.az ilə hiss edin! Qeyd etdiyimiz trençkotların Türkiyənin onlayn
            alış-veriş saytlarından sifarişini Glob.az vasitəsilə edərək, vaxtınıza və büdcənizə qənaət edin.
          </p>
          <p>
            Elə isə, vaxt itirmədən <span className="bold"> Glob.az</span> saytından{' '}
            <Link to="/sign-up"> qeydiyyatdan keçərək</Link> , Türkiyədən onlayn alış-verişin dadını çıxarın!
          </p>
        </div>
      </div>
    </section>
  );
};
