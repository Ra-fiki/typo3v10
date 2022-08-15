ajaxConfig = PAGE
ajaxConfig {
    config {
        disableAllHeaderCode = 1
        xhtml_cleaning = 0
        admPanel = 0
        debug = 0
        no_cache = 1
    }
}

ajaxJsonConfig < ajaxConfig
ajaxJsonConfig {
    config {
        additionalHeaders = Content-type:application/json
    }
}

ajaxHtmlConfig < ajaxConfig
ajaxHtmlConfig {
    config {
        additionalHeaders = Content-type:text/html
    }
}

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:fluid_styled_content/Configuration/TypoScript/setup.typoscript">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:fluid_styled_content/Configuration/TypoScript/Styling/setup.typoscript">

# extensions
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:extcore/Configuration/TypoScript/MainDomain/Setup/Base" extensions="ts">
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:extcore/Configuration/TypoScript/MainDomain/Setup/ContentElements" extensions="ts">

#<INCLUDE_TYPOSCRIPT: source="FILE:EXT:extcore/Configuration/TypoScript/setup.txt">

<INCLUDE_TYPOSCRIPT: source="DIR:EXT:extcore/Configuration/TypoScript/MainDomain/Setup/Plugins/" extensions="ts">
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:extcore/Configuration/TypoScript/MainDomain/Setup/Libs" extensions="ts">
