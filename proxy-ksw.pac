function FindProxyForURL(url, host) {
    var proxy_cvps = "PROXY 127.0.0.1:8080";

    var proxy_ad = "PROXY 127.0.0.1:8081";
    var proxy_no = "DIRECT";

    if (shExpMatch(host, "*.ksw.himor.in")) {return proxy_cvps; }
    if (shExpMatch(host, "ksw.himor.in")) {return proxy_cvps; }
    if (shExpMatch(host, "*.w3c.himor.in")) {return proxy_cvps; }
    if (shExpMatch(host, "w3c.himor.in")) {return proxy_cvps; }
    if (shExpMatch(host, "*.kyoto3d.net")) {return proxy_cvps; }

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

    return proxy_no;
}
