config {
    no_cache = {$config.no_cache}
    pageTitleFirst = 1
    pageTitleSeparator = -
    pageTitleSeparator.noTrimWrap = | | |
    doctype = html5
    removeDefaultJS = {$config.removeDefaultJS}
    admPanel = 1
    debug = {$config.debug}
    headerComment = {$config.headerComment}
    contentObjectExceptionHandler = {$config.contentObjectExceptionHandler}
    // Language Settings
    sys_language_overlay = 1
    sys_language_mode = content_fallback

    // Compression and Concatenation of CSS and JS Files
    compressJs = {$config.compressJs}
    compressCss = {$config.compressCss}
    concatenateJs = {$config.concatenateJs}
    concatenateCss = {$config.concatenateCss}
    doctype = html5
}

page = PAGE
page {
    typeNum = 0

    includeCSS {
        #        style = /assets/styles/main.css
        additional = /typo3conf/ext/extcore/Resources/Public/MainDomain/css/additional.css
    }

    includeJSFooterlibs {

    }
}
