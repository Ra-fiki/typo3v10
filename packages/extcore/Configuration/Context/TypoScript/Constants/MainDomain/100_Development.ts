[applicationContext == "Development"]
    site.baseUrl = https://mysite.ddev.site/
    styles.content.loginform {
        emailFrom = myemail.google.com
        emailFromName := getEnv(TYPO3__SYS__sitename)
    }
[end]

