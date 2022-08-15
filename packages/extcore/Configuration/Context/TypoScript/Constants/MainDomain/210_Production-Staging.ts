[applicationContext == "Production/Staging"]
    site.baseUrl = https://mysite.ddev.site/
    styles.content.loginform {
        emailFrom = yemail.google.com
        emailFromName := getEnv(TYPO3__SYS__sitename)
    }
[end]

