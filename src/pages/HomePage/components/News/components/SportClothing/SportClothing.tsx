import '../NewsText.scss';
import { Link } from 'react-router-dom';
import { News } from '../../News';
import Title from '../../../../../../components/TitleofSection/Title';

export const SportClothing = () => {
  return (
    <section id="newstext">
      <div className="myContainer">
        <div className="title">
          <Title value="TRENDYOLDAN İDMAN GEYİMLƏRİNİN SİFARİŞİ" isWhite={false} />
        </div>
        <div className="news-content">
          <p>
            Sağlam qalmaq və günə yüksək əhvali-ruhiyyə ilə başlamaq üçün idmanla məşğul olmaq lazımdır. Hər
            hansı idman növü ilə məşğul olmasaq belə, gündə ən az 5 dəqiqəlik idman hərəkətlərini etmək gümrah
            olmağımızı təmin edəcəkdir. İdmanı həyatımızın bir parçasına çevirmək sağlam bədənə və ruha sahib
            olmaq deməkdir. Çünki idman bədənimizin həm formada, həm də sağlam qalmasına kömək edir. Sağlam
            bədən isə öz növbəsində ruhumuzun gənc qalmasına şərait yaradır.{' '}
          </p>
          <p>
            Qədim Yunan və Roma imperatorluqlarında idman oyunları təşkil olunurdu. Bu gün də bu ənənə davam
            etməkdədir. Hətta musiqi kimi idmanın da insanlığa sülh gətirdiyinə inanılır. Məsələn, II Dünya
            müharibəsində futbol oyunlarının keçirilməsi səbəbindən qısa müddət də olsa atəşkəs elan
            olunmuşdur.
          </p>
          <pre> </pre>
          <p className="bold">Bəs düzgün idman geyimini necə seçməliyik?</p>
          <pre> </pre>
          <p>
            İdmanı, idman geyimləri və alətləri olmadan təsəvvür etmək qeyri-mümkündür. İdman geyimlərinin
            çoxfunksiyalı və rahat olması vacib şərtdir. Bu səbəbdən də, idman geyimi seçərkən görünüşdən çox,
            rahatlığa önəm verilməlidir. İdman geyimləri az tərlədən və parçalanmağa qarşı davamlı olmalıdır.
            Belə geyimlər üçün ən yaxşı material sintetikadır. Çünki sintetik geyim qırışmır, suyu özünə
            çəkərək bədənin quruluğunu təmin edir. İdman geyimləri üçün ən dəbli rənglər isə qara, ağ, mavi və
            qırmızıdır. Araşdırmalar da onu göstərir ki, bu rənglər motivasiyaverici özəllik daşımaqdadır.
            İdman geyimlərinin çeşidləri çox olsa da, önəmli olan düzgün seçim etməkdir.
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
