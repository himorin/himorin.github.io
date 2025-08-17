function FindProxyForURL(url, host) {
    var proxy_cvps = "PROXY 127.0.0.1:8080";

    var proxy_ad = "PROXY 127.0.0.1:8081";
    var proxy_no = "DIRECT";

// AD
//    if (shExpMatch(host, "")) {return proxy_ad; }
    if (shExpMatch(host, "pixel.advertising.com")) {return proxy_ad; }
    if (shExpMatch(host, "*.send.microad.jp")) {return proxy_ad; }
    if (shExpMatch(host, "d-cache.microad.jp")) {return proxy_ad; }
    if (shExpMatch(host, "cdn.apvdr.com")) {return proxy_ad; }
    if (shExpMatch(host, "*.teads.tv")) {return proxy_ad; }
    if (shExpMatch(host, "*.doubleclick.net")) {return proxy_ad; }
    if (shExpMatch(host, "*.g.doubleclick.net")) {return proxy_ad; }
    if (shExpMatch(host, "*.criteo.com")) {return proxy_ad; }
    if (shExpMatch(host, "*.criteo.net")) {return proxy_ad; }
    if (shExpMatch(host, "*.adnxs.com")) {return proxy_ad; }
    if (shExpMatch(host, "cdn.apvdr.com")) {return proxy_ad; }
    if (shExpMatch(host, "bn.maist.jp")) {return proxy_ad; }
    if (shExpMatch(host, "*.adnxs.com")) {return proxy_ad; }
    if (shExpMatch(host, "*.genieesspv.jp")) {return proxy_ad; }
    if (shExpMatch(host, "*.treasuredata.com")) {return proxy_ad; }
    if (shExpMatch(host, "*.taboola.com")) {return proxy_ad; }
    if (shExpMatch(host, "*.cxense.com")) {return proxy_ad; }
    if (shExpMatch(host, "*.impact-ad.jp")) {return proxy_ad; }
    if (shExpMatch(host, "*.im-apps.net")) {return proxy_ad; }
    if (shExpMatch(host, "*.gssprt.jp")) {return proxy_ad; }
    if (shExpMatch(host, "*.amazon-adsystem.com")) {return proxy_ad; }
    if (shExpMatch(host, "*.adingo.jp")) {return proxy_ad; }
    if (shExpMatch(host, "yads.c.yimg.jp")) {return proxy_ad; }
    if (shExpMatch(host, "dsb.yahoo.co.jp")) {return proxy_ad; }
    if (shExpMatch(host, "nkispa.nikkei.com")) {return proxy_ad; }
    if (shExpMatch(host, "ads.rubiconproject.com")) {return proxy_ad; }
    if (shExpMatch(host, "smarttag.rubiconproject.com")) {return proxy_ad; }
    if (shExpMatch(host, "pixon.ads-pixiv.net")) {return proxy_ad; }
    if (shExpMatch(host, "*.ads-twitter.net")) {return proxy_ad; }
    if (shExpMatch(host, "*.ads-twitter.com")) {return proxy_ad; }
    if (shExpMatch(host, "*.amanad.adtdp.com")) {return proxy_ad; }
    if (shExpMatch(host, "sp.gmossp-sp.jp")) {return proxy_ad; }
    if (shExpMatch(host, "*.karte.io")) {return proxy_ad; }
    if (shExpMatch(host, "*.clarity.ms")) {return proxy_ad; }
    if (shExpMatch(host, "*.outbrain.com")) {return proxy_ad; }
    if (shExpMatch(host, "*.cccmh.jp")) {return proxy_ad; }
    if (shExpMatch(host, "*.html-load.com")) {return proxy_ad; }
    if (shExpMatch(host, "*.nakanohito.jp")) {return proxy_ad; }
    if (shExpMatch(host, "*.adpushup.com")) {return proxy_ad; }
    if (shExpMatch(host, "*.caprofitx.com")) {return proxy_ad; }
    if (shExpMatch(host, "*.impactify.media")) {return proxy_ad; }
    if (shExpMatch(host, "*.ladsp.com")) {return proxy_ad; }
    if (shExpMatch(host, "*.creativecdn.com")) {return proxy_ad; }
    if (shExpMatch(host, "*.socdm.com")) {return proxy_ad; }


// h3
//    if (shExpMatch(host, "")) {return proxy_no; }
    if (shExpMatch(host, "*.youtube.com")) {return proxy_no; }
    if (shExpMatch(host, "*.google.com")) {return proxy_no; }
    if (shExpMatch(host, "*.googleapis.com")) {return proxy_no; }
    if (shExpMatch(host, "*.gstatic.com")) {return proxy_no; }
    if (shExpMatch(host, "*.ytimg.com")) {return proxy_no; }
    if (shExpMatch(host, "*.ggpht.com")) {return proxy_no; }
    if (shExpMatch(host, "*.google.co.jp")) {return proxy_no; }
    if (shExpMatch(host, "*.googleusercontent.com")) {return proxy_no; }
    if (shExpMatch(host, "*.googlevideo.com")) {return proxy_no; }
    if (shExpMatch(host, "*.googlesyndication.com")) {return proxy_no; }
    if (shExpMatch(host, "*.facebook.com")) {return proxy_no; }
    if (shExpMatch(host, "*.fbcdn.net")) {return proxy_no; }
    if (shExpMatch(host, "cc3001.dmm.co.jp")) {return proxy_no; }
    if (shExpMatch(host, "*.google-analytics.com")) {return proxy_no; }
    if (shExpMatch(host, "*.github.io")) {return proxy_no; }
    if (shExpMatch(host, "*.twitter.com")) {return proxy_no; }

    return proxy_no;
}
