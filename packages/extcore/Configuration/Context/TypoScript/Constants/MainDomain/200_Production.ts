[applicationContext == "Production"]
    site.baseUrl = https://mysite.org
    config {
        no_cache = 0
        debug = 0
        compressJs = 1
        compressCss = 1
        concatenateJs = 1
        concatenateCss = 1
        contentObjectExceptionHandler = 1
    }
[end]
