import './Faq.scss';
import chevron from './images/chevron-right.svg';
import Accordion from 'react-bootstrap/Accordion';

function AllCollapseExample() {
  return (
    <section id="faq">
      <div className="container">
        <div className="col-lg-12 col-md-12 col-xs-12">
          <ul className="first-list">
            <li>
              <a href="/">Ana səhifə</a>
            </li>
            <li>
              <img src={chevron} alt="/" />
            </li>
            <li className="second-li">
              <a href="/"> Faq</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-12 col-md-12 col-xs-12">
          <h1 className="section-title"> TEZ-TEZ VERİLƏN SUALLAR</h1>
        </div>
        <div className="col-lg-12 col-md-12 col-xs-12">
          <Accordion className="first-accor" defaultActiveKey="0">
            <Accordion.Item className="accor" eventKey="0">
              <Accordion.Header>Bizim üstünlüklərimiz</Accordion.Header>
              <Accordion.Body className="accor-body">
                "Mənim üçün Sifariş Et" xidməti.
                <br />
                Həftədə 6 dəfə reys Türkiyə anbarında yoxlama xidməti
                <br />
                Azərbaycandan İadə xidməti Qapıda ödəmə xidməti
                <br />
                Onlayn kuryer xidməti. Minimal çatdırılma
                <br />
                tarifləri $0.40 dən başlayan qiymətlər.
                <br />
                Sürətli çatdırılma xidməti. 20-den çox təhvil
                <br />
                məntəqələrimiz
                <br />
                6 Filial
                <br />
                Operativ müştəri xidmətləri.{' '}
              </Accordion.Body>
            </Accordion.Item>
            <br />

            <Accordion.Item className="accor" eventKey="1">
              <Accordion.Header>Çatdırılma haqqı hansı üsulla hesablanır?</Accordion.Header>
              <Accordion.Body className="accor-body">
                Beynəlxalq Hava Nəqliyyatı Assosiasiyasının (IATA) metrik standartlarına uyğun olaraq daşınan
                yüklərin çəkisi bağlamaların ölçülərindən asılı olaraq iki cür hesablana bilər:
                <br />
                1. Fiziki çəki - Bağlamanın qablaşdırılmış vəziyyətdə tərəzidə görünən çəkisidir;
                <br />
                2. Həcm çəkisi - Bağlamanın tərəflərinin (en, uzun, hündürlük) ölçüləri əsasında hesablanan
                çəkidir.
                <br />
                Hər iki göstərici hesablanır hansı daha çox olarsa, daşınma haqqı o çəki əsasında hesablanır.
                <br />
                Hər hansı bir uzunluq gösətiricisi 60 sm və 60 sm-dən artıq olan bağlamaların daşınma haqqı
                həm həcm çəkisi, həm də fiziki çəkisi hesablanacaq, hansı çəki göstəricisi daha çox olarsa,
                daşınma haqqı o çəki əsasında hesablanacaqdır.
                <br />
                Hesablanma qaydasını nəzərinizə çatdırırq.
                <br />
                <b> En(sm) x Uzunluq (sm) x Hündürlük (sm)/6000 = Həcm çəkisi (kq)</b>
                <br />
                <b>
                  {' '}
                  <i>Yekun hesablaşmalar USD/AZN məzənnəsinə müvafiq olaraq aparılır.</i>
                </b>
              </Accordion.Body>
            </Accordion.Item>
            <br />

            <Accordion.Item className="accor" eventKey="2">
              <Accordion.Header>Bağlamanın daşınma haqqının ödəmə üsulları</Accordion.Header>
              <Accordion.Body className="accor-body">
                Bağlamaların daşınma haqqı müştərinin istəyinə görə Glob.az saytından onlayn, ofisdə nağd və
                ya POS-terminal vasitəsi ilə həyata keçirilə bilər.
              </Accordion.Body>
            </Accordion.Item>
            <br />

            <Accordion.Item className="accor" eventKey="3">
              <Accordion.Header>Daşınması qadağan olan məhsullar</Accordion.Header>
              <Accordion.Body className="accor-body">
                Daşınması qadağan olan məhsullar:
                <br />
                <br />
                Mobil telefonlar.
                <br />
                <br />
                Maqnit tərkibli məhsullar.
                <br />
                <br />
                Müxtəlif növ batareyalar, powerbank-lar.
                <br />
                <br />
                Qida məhsulları.
                <br />
                <br />
                Çılçıraq və çərçivə ( Qablaşdırılması düzgün olmadıqda )
                <br />
                <br />
                Hər cür silah növləri, döyüş sursatı, hərbi təyinatlı hər cür əşyalar, partlayıcı maddələr,
                hərbi texnika.
                <br />
                <br />
                Partlayıcı, tezalışan və ya digər təhlükəli maddələr, eləcə də radioaktiv maddələr və onların
                hazırlanması texnologiyasına aid materiallar.
                <br />
                <br />
                Narkotik və psixotrop maddələr, onlardan istifadə üçün ləvazimat, həmçinin hazırlanması
                texnologiyasına aid materiallar.
                <br />
                <br />
                Pornoqrafik əşyalar, əxlaq pozğunluğunu, zorakılığını, terrorizmi təbliğ və reklam edən
                materiallar.
                <br />
                <br />
                Canlı heyvanlar.
                <br />
                <br />
                Bitki və toxumlar.
                <br />
                <br />
                Gizli kameralar, xüsusi məxfi rabitə vasitələri, onların şifrələri və istismarı haqqında
                ədəbiyyat.
                <br />
                <br />
                Müdafiə, Milli Təhlükəsizlik və Daxili İşlər Nazirliklərinin operativ istintaq fəaliyyəti üzrə
                informasiya sistemləri, sənədləri və arxivləri.
                <br />
                <br />
                Dövlət əhəmiyyətli sənədlər, ixtiralar, layihələr.
                <br />
                <br />
                Zinyət əşyaları, qiymətli metallar və qiymətli daşlar.
                <br />
                <br />
                Pul əskinasları, sikkələr.
                <br />
                <br />
                Akkumulyatorlar.
                <br />
                <br />
                Batareyalar.
                <br />
                <br />
                Dini kitablar (Qurani Kərim istisna olmaqla).
                <br />
                <br />
                Hover Board skuterlər.
                <br />
                <br />
                Hava nəqliyyatı vasitəsi ilə daşınması qadağan olunan əşyalar.
                <br />
                <br />
                Azərbaycan Respublikasının ərazisinə idxalı qadağan olunan əşyalar.
                <br />
                <br />
                Türkiyədən litium batareyalar və batareyalara sahib texnikalar.
                <br />
                <br />
                Türkiyədən sənət əsərləri, müxtəlif sənədlər.
              </Accordion.Body>
            </Accordion.Item>
            <br />

            <Accordion.Item className="accor" eventKey="4">
              <Accordion.Header>300 dollar limiti nədir?</Accordion.Header>
              <Accordion.Body className="accor-body">
                Azərbaycan Respublikasının qanunvericiliyinə əsasən 21 sentyabr 2020-ci il tarixindən etibarən
                fiziki şəxslər hər təqvim ayı ərzində ölkəyə ümumi dəyəri 300 ABŞ dolları ekvivalentindən
                artıq olmayan yük idxal edə bilər.
                <br />
                Bağlamanın ümumi dəyəri 300 ABŞ dollarından çox olduqda qanunvericiliyə uyğun olaraq gömrük
                rüsumu ödənilir.
                <br />
                300 ABŞ dolları limitinə əşyanın öz dəyəri və saxlanılan bağlamanın daşınma haqqı daxildir.
                <br />
                Bağlama təyin olunmuş limitin aşıldığı halda yalnız limiti keçmiş hissə üçün gömrük rüsumu
                hesablanacaqdır.
                <br />
                Bağlamanın BCT-də saxlanılması zamanı ilk gün 15 AZN, sonrakı hər gün üçün 2 AZN (1 avro)
                saxlanma haqqı hesablanır. Xahiş edirik, sifariş verərkən diqqətli olun!
              </Accordion.Body>
            </Accordion.Item>
            <br />

            <Accordion.Item className="accor" eventKey="5">
              <Accordion.Header>İzləmə nömrəsi ( "Tracking number") nədir?</Accordion.Header>
              <Accordion.Body className="accor-body">
                Bağlama onlayn mağazada tam qablaşdırıldıqdan sonra alıcıya çatdırılması üçün ölkə daxili
                kuryerlərə verilir.
                <br />
                Kuryer xidməti öz növbəsində bağlamaya Tracking number ( İzləmə nömrəsi ) təyin edir.
                <br />
                Bu nömrələr bağlamaların bəyan olunması üçün lazımdır. Bu nömrələr ölkə daxili kuryerlərdən
                fərqli olaraq fərqli adlandırılır. Bağlamanı izləmək üçün UPS karqo “Tracking number”,
                Trendyol express “Gönderi numarası”, Yurtiçi karqo “Gönderi kodu”, Aras karqoda “Kargo takip
                numarası”, Kargoist karqoda "müşteri barkod", PTT Kargo “barkod no”, MNG karqo “Fatura no”,
                Sürat Kargo “Kargo takip no” və s. təqdim edir.
                <br />
                Tracking number (izləmə nömrəsi) bağlamanın kuryerin anbarından təyinat məntəqəsinə
                çatdırılanadək mövqeyini izləməyə imkan yaradır. İzləmə nömrəsi (Tracking number) hər bağlama
                üçün ayrı-ayrılıqda verilir, fərqli olur və təkrarlanmır.
                <br />
                Bağlamanız daşıyıcı şirkətin anbarına çatdırılanadək yükün mövqeyini daxili kuryer xidmətinin
                səhifəsində izləyə bilərsiniz.
              </Accordion.Body>
            </Accordion.Item>
            <br />

            <Accordion.Item className="accor" eventKey="6">
              <Accordion.Header>Türkiyə anbarının iş saatları</Accordion.Header>
              <Accordion.Body className="accor-body">
                Xarici anbarın iş qrafiki aşağıdakı kimidir:
                <br />
                <br />
                Türkiyə anbarı:
                <br />
                <br />
                Bazar ertəsi – Cümə: 9:00 – 18:00
                <br />
                Şənbə: 9:00 – 13:00
                <br />
                Bazar: Qeyri-iş günü
              </Accordion.Body>
            </Accordion.Item>
            <br />

            <Accordion.Item className="accor" eventKey="7">
              <Accordion.Header>Bəyənnamə nədir? Necə doldurulur?</Accordion.Header>
              <Accordion.Body className="accor-body">
                Gecikmələrin yaranmaması və bağlama hesabında əks olunması üçün müştəri şəxsi hesabına daxil
                olaraq, sifarişi haqqında məlumatı əvvəlcədən bəyan etməlidir. Bəyənnamə - müştərinin sifariş
                etdiyi bağlama haqqında yük xarici anbara daxil olmazdan ƏVVƏL Glob.az şəxsi hesabında “BƏYAN
                ET” bölməsində məlumat verməsidir. Sifariş haqqında məlumat bağlama xarici anbarlara
                ÇATDIRILMAMIŞDAN əvvəl qeyd olunmalıdır. Yükün bəyan edilməsi yalnız bağlama satıcı tərəfindən
                kuryerə verildikdən və izləmə nömrəsi (Tracking number,Teslimat no,Gönderi numarası, Kargo
                takip numarası, Barkod no, MNG kargoda Fatura No) təqdim edildikdən sonra mümkündür. Bağlama
                “sipariş numarası” ilə bəyan oluna bilməz. Bəyənnamədə bağlamanın izləmə nömrəsi( izləmə
                nömrəsi bölməsinə bu nömrələrdən birini yazmaq olar: “Tracking number”, "Teslimat no",
                “Gönderi numarası”, Kargo takip numarası, Barkod no) mağaza adı, məhsulun kategoriyası qeyd
                edilir və satıcı tərəfindən təqdim edilmiş invoys sənədi (fatura) əlavə edilir.
                <br />
                <br />
                İstisnalar:
                <br />
                <br />
                Nadir hallarda satıcılar müştərinin bağlamasını izləmə nömrəsi (tracking number) təyin etmədən
                göndərir. Bu halda yalnız bağlama anbara daxil olduqdan sonra bəyannamə doldurulmalıdır.
                <br />
                <br />
                Məlumatların düzgün qeyd edilməsi bağlamanın vaxtında çatdırılmasının ilkin şərtidir.
                <br />
                <br />
                <b>
                  Bağlamanın düzgün bəyan olunması qaydası ilə və bəyannamə ilə bağlı bütün suallarınıza video
                  təlimatda cavab tapa bilərsiniz.
                </b>
                <br />
                ---
              </Accordion.Body>
            </Accordion.Item>
            <br />

            <Accordion.Item className="accor" eventKey="8">
              <Accordion.Header>Sifarişim neçə gün ərzində çatdırılır?</Accordion.Header>
              <Accordion.Body className="accor-body">
                Bağlamaların çatdırılma müddəti məhsul xarici anbarımıza daxil olduğu vaxtdan hesablanır.
                Türkiyədən yüklərin göndərişi həftədə 2 dəfə həyata keçirilir. Bağlamanız anbarımıza daxil
                olduqdan sonra 5 iş günü ərzində Azərbaycana çatdırılır.
              </Accordion.Body>
            </Accordion.Item>
            <br />

            <Accordion.Item className="accor" eventKey="9">
              <Accordion.Header>Necə işləyir?</Accordion.Header>
              <Accordion.Body className="accor-body">
                <b>Glob.az - da qeydiyyatdan keçin</b>
                <br />
                <br />
                Qeydiyyatdan keçməklə Türkiyədə xarici ünvana sahib olacaqsınız və hesabınızda ünvan qeyd
                olunacaq.
                <br />
                <br />
                <br />
                <b>Sifarişi ünvana göndərin</b>
                <br />
                <br />
                Onlayn mağazalardan alış-veriş edərkən bağlamanızın çatdırılacağı ünvan hissəsinə saytımızda
                qeyd edilən ünvanı yazın və ödəniş edib sifarişinizi tamamlayın.
                <br />
                <br />
                <b> Bağlamanızı təhvil alın</b>
                <br />
                <br />
                Anbarımıza təhvil verilmiş məhsulu 3-5 iş günü ərzində Azərbaycana çatdırırıq.
                <br />
                <br />
              </Accordion.Body>
            </Accordion.Item>
            <br />

            <Accordion.Item className="accor" eventKey="10">
              <Accordion.Header>Ünvan və iş saatlarımız</Accordion.Header>
              <Accordion.Body className="accor-body">
                <b> Azadlıq filialı ünvan:</b> Bakı şəhəri. Binəqədi rayonu, Süleyman Sani Axundov küçəsi 1A
                (Kəmalə Nərmin şadlıq sarayının yanı)
                <br />
                <br />
                <b>Yeni Yasamal filialı ünvan:</b> Bakı şəhəri. Yasamal rayonu, Dadaş Bünyadzadə və Talıblı
                küçəsinin kəsişməsi (Azza şiriniyyat evinin yanı)
                <br />
                <br />
                <b>Xırdalan filialı ünvan:</b> Xırdalan ş., H.Əliyev prospekti 11,bina 4 (Kristal Abşeron 2)
                <br />
                <br />
                <b>28 may filialı ünvan: </b> Nəsimi rayonu, Şəmsi Bədəldbəyli küçəsi 100a (28 mallın yanı)
                <br />
                <br />
                <br />
                <br />
                <b> İş saatları: </b>
                <br />
                <br />
                Müştəri xidmətləri və Mənim üçün Sifariş Et xidməti:
                <br />
                <br />
                <br />
                Müştəri xidmətləri - Bazar ertəsi - Şənbə: 10:00 - 19:00
                <br />
                <br />
                Anbar - Bazar ertəsi - Şənbə: 10:00 -19:00
                <br />
                <br />
              </Accordion.Body>
            </Accordion.Item>
            <br />

            <Accordion.Item className="accor" eventKey="11">
              <Accordion.Header>Onlayn alış-veriş edərkən nəyi bilməyiniz mütləqdir</Accordion.Header>
              <Accordion.Body className="accor-body">
                Onlayn alış-veriş zamanı “shipping address” bölməsinin xanaları Glob.az hesabınızda təqdim
                edilən ünvana uyğun olaraq doldurulmalıdır.
                <br />
                <br />
                Daşıyıcı şirkət istehsalçı deyil və heç bir satış xidməti göstərmir;
                <br />
                <br />
                İstehsalçının səhvinə, satıcı firmanın göndərdiyi məhsulun keyfiyyətinə, tamlığına, tərkibinə,
                ölçü və formasına, satış anbarında tükənməsinə görə və ya sifarişin satıcı tərəfindən ləğv
                olunmasına görə məsuliyyət daşımır;
                <br />
                <br />
                Satıcı firma tərəfindən malın onun anbarına çatdırılması vaxtına görə heç bir məsuliyyət
                daşımır;
                <br />
                <br />
              </Accordion.Body>
            </Accordion.Item>
            <br />

            <Accordion.Item className="accor" eventKey="12">
              <Accordion.Header>“Sifariş et” xidmətinin qaydaları</Accordion.Header>
              <Accordion.Body className="accor-body">
                Bəzi internet mağazalar məhsullarının ölkədən ixrac olunmasının qarşısını almaq üçün
                məhsullarını xarici ölkələrə göndərmir və beynalxalq kartlarla olan ödənişləri qəbul etmirlər.
                Bu əsasən Türkiyə və ABŞ-da bəzi mağazalara aiddir.
                <br />
                <br />
                Glob.az yükdaşıma şirkəti olaraq müştərilərimizin rahatçılığını düşünərək, sizlərə “Sifariş
                et” xidmətini istifadənizə verdik. Hazırda “Sifariş et” xidməti ilə hazırda yalnız Türkiyədən
                olan sifarişlər qəbul olunur.
                <br />
                <br />
                “Sifariş et” bölməsindən istifadə etmək üçün :
                <br />
                1. Glob.az şəxsi hesabınızda “Sifariş et” bölməsinə daxil olun;
                <br />
                2. Seçdiyiniz məhsulun linkini saytımızda “Məhsulun URL-i” xanasına yerləşdirin;
                <br />
                3. Digər xanalarda məhsulun məlumatlarını qeyd edin;
                <br />
                4. “Məhsulun qiyməti” xanasında məhsulun dəyərini müvaffiq ölkənin valyutasına əsasən (TL və
                ya USD) qeyd edin;
                <br />
                5. Ölkədaxili “kargo” ödənişli və ya ödənişsiz olduğunu qeyd edin;
                <br />
                6. Yeni link əlavə etmək üçün (+) düyməsinə klik edərək yeni məhsulun linkini əlavə edə
                bilərsiniz.
                <br />
                7. İstifadəçi qaydaları ilə razılaşdığınız təqdirdə “sifariş et” düyməsinə klik edib və
                ödənişi tamamlayın.
                <br />
                8. Sifarişlərinizi ödədikdən sonra “ödənildi” statusunda olan sifarişlər qısa zaman ərzində
                əməkdaşlarımız tərəfindən təsdiq olunur.
                <br />
                9. Alış tamamlandıqdan sonra elektron poçt ünvanınıza bildiriş göndərilir.
                <br />
                Qeyd : “Sifariş et” xidmətinə məhsulun dəyərindən əlavə 5% komissiya tətbiq olunur.
                <br />
                Şirkətimiz sifarişçinin sifariş etdiyi onlayn mağazanın etibarlılığı ilə bağlı heç bir
                məsuliyyət daşımır.
                <br />
                Ödəniş, sifariş olunan xarici ölkənin valyutası ilə aparılır, əlavə bank komissiyalarına görə
                şirkət heç bir məsuliyyət daşımır.
                <br />
                İstehsalçının səhvinə, satıcı firmanın göndərdiyi məhsulun keyfiyyətinə, tamlığına, tərkibinə,
                ölçü və formasına, satış anbarında tükənməsinə görə və ya sifarişin satıcı tərəfindən ləğv
                olunmasına görə məsuliyyət daşımır.
                <br />
                Sifariş olunmuş məhsulun ödənişi hər hansı səbəbdən geri qaytarılarsa, 5% komissiya geri
                qaytarılmır.
                <br />
                Ödənişlərin karta geri qaytarılması, satıcı firmanın məbləği geri qaytarmasından sonra,
                Müştərinin TL balansına əlavə edilir. Müştərinin istəyinə uyğun olaraq əgər məbləğin kartına
                qaytarılmasını istəyirsə, sorğu 15 iş günü müddətində icra olunur. Bəzi hallarda bu müddətə
                bir neçə gün banklardan asılı olaraq əlavə ola bilər.
                <br />
                <br />
              </Accordion.Body>
            </Accordion.Item>
            <br />

            <Accordion.Item className="accor" eventKey="13">
              <Accordion.Header>"Mənim üçün Sifariş Et" xidmətinin detalları nədir?</Accordion.Header>
              <Accordion.Body className="accor-body">
                Bu, Türkiyədən istənilən məhsulun alınmasına xidmət edən kompleks servis xidmətidir. Bu tip
                sifariş zamanı biz sizin adınızdan Türkiyə internet-mağazasından sifariş edirik. Satıcı ilə
                bütün müvafiq tədbir və danışıqları aparırıq. Bu halda bizim komissiyamız ümumi məhsulun
                dəyərinin 5% təşkil edəcək, Azərbaycana daşınma xidmət haqqı bu məbləğə daxil deyil.
                <br />
                <br />
                Xidmətimizdən istifadə ilə bağlı tam məlumatı bu linkdən əldə edə bilərsiniz:
                <br />
                <br />
                ----
                <br />
                <br />
              </Accordion.Body>
            </Accordion.Item>
            <br />

            <Accordion.Item className="accor" eventKey="14">
              <Accordion.Header>Onlayn kuryer sifarişi</Accordion.Header>
              <Accordion.Body className="accor-body">
                “Onlayn kuryer” xidməti vasitəsilə Bakı anbarımıza daxil olan bağlamaların birbaşa evinizə
                çatdırılmasını həyata keçiririk. Ofisə gəlmədən onlayn kuryer sifarişi ilə rahatlıqla
                bağlamalarınızı əldə edin.⁣⁣
                <br />
                <br />
                Kuryer sifarişini Glob.az saytına daxil olaraq onlayn formada həyata keçirə bilərsiniz. Bunun
                üçün Glob.az saytında hesabınıza daxil olun, <b>”Kuryer sifarişi” </b> bölməsinə keçid edərək{' '}
                <b>“Yeni sifariş”</b>
                düyməsinə klikləyin, açılan pəncərədə çatdırılmasını istədiyiniz bağlamaları seçib{' '}
                <b>”Şəhər,nişangah, ünvan, telefon, çatdırılma tarixi”</b>
                bölmələrini dolduraraq <b>“Yadda saxla”</b> düyməsinə klikləyin.
                <br />
                <br />
                ⁣⁣ Bağlamalarınızı 24 saat ərzində təhvil alacaqsınız. Kuryer haqqı sifariş zamanı hesabınızda
                əks olunacaqdır. Bağlamaların daşınma haqqını və kuryer ödənişini istəyinizə görə onlayn və ya
                nağd şəkildə ödəyə bilərsiniz.
                <br />
                <br />
              </Accordion.Body>
            </Accordion.Item>
            <br />

            <Accordion.Item className="accor" eventKey="15">
              <Accordion.Header>Başqa bir şəxs Sizin bağlamanı necə təhvil ala bilər?</Accordion.Header>
              <Accordion.Body className="accor-body">
                Əgər Siz öz hesabınızda Bakı ofismizdə olan bağlama(lar)ınızı yaxınlaşıb, təhvil ala
                bilmirisinizsə, bu zaman başqa bir şəxsə Sizin adınıza bağlamanı təhvil alması üçün etibarnamə
                verə bilərsiniz. Bunun üçün Siz saytımızda hesabınıza daxil olub, şəxsi hesabda
                <b> "Etibarnamələr"</b> bölməsindən bağlamanı təhvil almasını istədiyiniz şəxsin şəxsiyyət
                vəsiqəsində olan məlumatları daxil edib, ona etibarnamə verə bilərsiniz. Etibarnamə verdiyiniz
                şəxs Sizin müştəri kodu və öz şəxsiyyət vəsiqəsi ilə yaxınlaşıb, bağlamanı təhvil ala bilər.
                Etibarnamə verməkdə say limiti yoxdur. Siz istənilən qədər etibarnamə əlavə edə bilərsiniz.
                <br />
                <br />
              </Accordion.Body>
            </Accordion.Item>
            <br />
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default AllCollapseExample;
