# E.D.I.T.H. — telefondan sesli komut (Android ve iPhone)

TV'deki uygulama telefondan gelen mesajları dinler. Telefonda iki yol var:

| | Android | iPhone |
|---|---|---|
| **Eller serbest** | "Ok Google, EDITH aç" → komutunu söyle | "Hey Siri, Edith" → komutunu söyle |
| **Sayfa açık dururken** | "Edith, şömineyi aç" | Çekirdeğe dokun, konuş |

Her iki yol için önce **eşleştirme kodu** lazım: TV'de **Benim köşem → Sesli komut** ekranında, `qn90b-` ile başlayan kod.

---

## 1. EDITH sayfasını internete koy (bir kez, ~10 dk, ücretsiz)

Telefonun mikrofonu yalnız `https://` adreslerinde çalıştığı için sayfanın bir adresi olmalı. En kolayı GitHub Pages:

1. **github.com** → Sign up → ücretsiz hesap aç (bilgisayardan daha rahat).
2. Sağ üstte **+** → **New repository** → Repository name: `edith` → **Public** → **Create repository**.
3. Açılan sayfada **uploading an existing file** bağlantısına tıkla.
4. Bu klasördeki 5 dosyayı sürükle: `index.html`, `yt.html`, `manifest.webmanifest`, `sw.js`, `edith-icon.png` → **Commit changes**.
   (`yt.html`, TV'nin EDITH açılış sahnesini ve film müziklerini YouTube'dan oynattığı sayfadır. Telefonu eşleştirince TV bu adresi kendisi öğrenir.)
5. Üstte **Settings** → solda **Pages** → *Branch*: `main`, klasör `/ (root)` → **Save**.
6. 1–2 dakika sonra sayfanın adresi aynı ekranda çıkar: `https://KULLANICIADIN.github.io/edith/`

Sayfada kişisel bilgi yok. Eşleştirme kodu dosyada değil, yalnız senin telefonunda saklanır.

---

## 2A. Android

1. Telefonda **Chrome** ile adresi aç: `https://KULLANICIADIN.github.io/edith/`
2. TV'deki kodu kutuya yaz → **Bağla**. TV'de EDITH açılıp "Dinliyorum patron" demeli.
3. Çekirdeğe dokun → **mikrofon iznine "İzin ver"** de (Chrome sorarsa "Her zaman").
4. Chrome menüsü **⋮** → **Ana ekrana ekle** / **Uygulamayı yükle** → adı **EDITH** kalsın.

**Kullanım:**
- **Eller serbest:** "Ok Google, EDITH aç" de. Uygulama açılınca 10 saniye içinde söylediğin ilk cümle doğrudan TV'ye gider: "ışıkları kıs".
  Açılınca dinlemeye kendiliğinden başlamazsa çekirdeğe bir kez dokun.
- **Sürekli dinleme:** uygulamayı açık bırak (ekran açık kalır, şarja takılı durması iyi olur).
  "Edith, şömineyi aç" ya da önce "Edith", sonra komut.
- Bazı Android telefonlar her dinleme başlangıcında kısa bir "bip" sesi çalar; bu tarayıcının kendi sesi.

---

## 2B. iPhone

### Siri kestirmesi (önerilen, ekran kilitliyken bile çalışır)
1. **Kestirmeler** uygulamasını aç → sağ üstte **+**.
2. **Eylem Ekle** → ara: **Metni Dikte Et** → ekle. Üzerine dokun: Dil **Türkçe**, Dinlemeyi Durdur **Duraklamadan Sonra**.
3. **Eylem Ekle** → ara: **URL'nin İçeriğini Al** → ekle.
   - URL: `https://ntfy.sh/qn90b-...` (TV'deki kodunla)
   - **Daha Fazla Göster** → Yöntem: **POST** → İstek Gövdesi: **Dosya** → dosya olarak **Dikte Edilen Metin**'i seç.
4. (İsteğe bağlı) **Eylem Ekle** → **Metni Seslendir** → "Tamam patron".
5. En üstte kestirmenin adını **Edith** yap → **Bitti**.

**Kullanım:** "Hey Siri, Edith" → Siri dinler → "şömineyi aç". TV hemen yapar.
- Siri "Edith" adını yakalamazsa kestirmenin adını **Asistan** ya da **Televizyon** yap.
- Tek dokunuşla açmak için: Ayarlar → Erişilebilirlik → Dokunma → **Arkaya Dokunma** → Çift Dokunma → **Edith**.
  iPhone 15 Pro ve sonrasında **Eylem düğmesine** de atanabilir.

### EDITH sayfası (isteğe bağlı)
Safari ile `https://KULLANICIADIN.github.io/edith/` adresini aç → kodu gir → Paylaş → **Ana Ekrana Ekle**.
iPhone'da sayfa sürekli dinleyemez; çekirdeğe dokunup konuşursun. Sayfayı bir kez açmak, TV'ye YouTube oynatıcı adresini bildirmek için de gerekir.

---

## Örnek komutlar
- **Temalar:** "şömineyi aç" · "Harry Potter" · "duvar sanatı" · "sonraki sahne"
- **Işıklar:** "ışıkları aç" · "salonu mavi yap" · "ışıkları yüzde 30 yap" · "sinema modu" · "gece modu" · "ışıklar temaya uysun"
- **EDITH:** "tehdit taraması" · "uzay istasyonu nerede" · "piyasa raporu" · "durum raporu" · "zırhı giy"
- **Günlük:** "yarın hava nasıl" · "10 dakika sonra hatırlat çay" · "45 dakika sonra kapat" · "iyi geceler" · "Netflix'i aç"

## Sorun çıkarsa
- **TV tepki vermiyor:** TV'de Sesli komut ekranında "Bağlı" yazıyor mu? Telefondaki kod TV'dekiyle aynı mı?
- **Kod değişti:** TV'de "Yeni eşleştirme kodu"na basıldıysa telefonda "Eşleştirmeyi değiştir" ile yeni kodu gir; iPhone kestirmesindeki URL'yi de güncelle.
- **Hue köprüsü bulunamadı:** Hue uygulaması → Ayarlar → Hue Köprüleri → (i) → IP adresini öğren; telefondan "hue 192.168.1.20" gönder.
