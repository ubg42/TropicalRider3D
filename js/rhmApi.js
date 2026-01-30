// RHM API - Ads Disabled Version
// Tüm reklam fonksiyonları devre dışı, oyun akışı kesintisiz

console.log("RHM API Loaded - Ads Disabled");

// Sahte adBreak ve adConfig fonksiyonları
const adBreak = adConfig = function (o) {
    // Hiçbir şey yapma, sessizce geç
    if (o.onReady) {
        setTimeout(() => o.onReady(), 100);
    }
};

window.adsbygoogle = window.adsbygoogle || [];

// SDK başlatma - hemen başarılı döner
function InitSDKJs() {
    console.log("InitSDKJs called - Ads disabled, skipping...");
    
    // Kısa bir gecikme ile Unity'ye başarılı mesajı gönder
    setTimeout(() => {
        console.log("Init succeed sent to Unity");
        if (typeof myGameInstance !== 'undefined' && myGameInstance) {
            myGameInstance.SendMessage('RHMAdsManager', 'InitSucceed', 'ads-disabled');
        }
        // Rewarded ads "yüklendi" olarak işaretle
        RewardedAdsLoaded();
    }, 100);
}

// Interstitial reklam çağrısı - hemen geçiştir
function CallInterstitialAdsJs() {
    console.log("CallInterstitialAdsJs called - Skipping ad, continuing game...");
    
    // Oyunu duraklatmadan devam et
    setTimeout(() => {
        resumeGameAfterAds();
    }, 50);
}

// Rewarded reklam yükleme - her zaman yüklü göster
function LoadRewardedAdsJs() {
    console.log("LoadRewardedAdsJs called - Marking as loaded...");
    
    setTimeout(() => {
        RewardedAdsLoaded();
    }, 100);
}

// Rewarded reklam gösterme - hemen ödül ver
function CallRewardedAdsJs() {
    console.log("CallRewardedAdsJs called - Skipping ad, giving reward directly...");
    
    // Kısa gecikme ile ödülü ver (reklam izlenmiş gibi)
    setTimeout(() => {
        RewardSuccessful();
    }, 100);
}

// Rewarded reklam yüklendi bildirimi
function RewardedAdsLoaded() {
    console.log("RewardedAdsLoaded - Ads marked as available");
    if (typeof myGameInstance !== 'undefined' && myGameInstance) {
        myGameInstance.SendMessage('RHMAdsManager', 'isRewardedAdsLoaded', 'true');
    }
}

// Rewarded reklam yüklenemedi bildirimi (kullanılmayacak ama tanımlı olsun)
function RewardedAdsNotLoaded() {
    console.log("RewardedAdsNotLoaded called");
    if (typeof myGameInstance !== 'undefined' && myGameInstance) {
        myGameInstance.SendMessage('RHMAdsManager', 'isRewardedAdsLoaded', 'false');
    }
}

// Reklam kapatıldı (kullanılmayacak ama tanımlı olsun)
function RewardedAdsDismissed() {
    console.log("RewardedAdsDismissed called");
    if (typeof myGameInstance !== 'undefined' && myGameInstance) {
        myGameInstance.SendMessage('RHMAdsManager', 'RewardedAdsFailed');
    }
}

// Ödül başarılı
function RewardSuccessful() {
    console.log("RewardSuccessful - Reward granted!");
    if (typeof myGameInstance !== 'undefined' && myGameInstance) {
        myGameInstance.SendMessage('RHMAdsManager', 'RewardedAdsSuccessfull');
    }
}

// Oyunu duraklat
function pauseGameBeforeAds() {
    console.log("pauseGameBeforeAds called");
    if (typeof myGameInstance !== 'undefined' && myGameInstance) {
        myGameInstance.SendMessage('RHMAdsManager', 'pauseGame');
    }
}

// Oyunu devam ettir
function resumeGameAfterAds() {
    console.log("resumeGameAfterAds called");
    if (typeof myGameInstance !== 'undefined' && myGameInstance) {
        myGameInstance.SendMessage('RHMAdsManager', 'resumeGame');
    }
}

// Ekstra güvenlik: Olası diğer çağrılar için boş fonksiyonlar
function showBannerAd() { console.log("showBannerAd - disabled"); }
function hideBannerAd() { console.log("hideBannerAd - disabled"); }
function preloadRewardedAd() { console.log("preloadRewardedAd - disabled"); RewardedAdsLoaded(); }
function preloadInterstitialAd() { console.log("preloadInterstitialAd - disabled"); }