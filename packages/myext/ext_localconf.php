<?php

defined('TYPO3') or die();

$extensionKey = 'myext';

call_user_func(function () {
    $extensionKey = 'myext';
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript(
        $extensionKey,
        'setup',
        '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:myext/Configuration/TypoScript/Setup/init.ts">'
    );
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript(
        $extensionKey,
        'constants',
        '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:myext/Configuration/TypoScript/Constants/init.ts">'
    );
//    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
//        '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:myext/Configuration/TypoScript/TSconfig/Page/init.ts">'
//    );

//    \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
//        'RK.Myext',
//        'Archives',
//        [
//            'Archives' => 'view',
//        ],
//        // non-cacheable actions
//        [
//            'Archives' => 'view',
//        ]
//    );
//    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
//        'mod {
//                wizards.newContentElement.wizardItems.forms {
//                    elements {
//                        archives {
//                            iconIdentifier = module-system_BeuserTxBeuser
//                            title = LLL:EXT:myext/Resources/Private/Language/locallang_db.xlf:tx_myext.plugin.archives.label
//                            tt_content_defValues {
//                                CType = list
//                                list_type = myext_archives
//                            }
//                        }
//                    }
//                    show = *
//                }
//            }'
//    );
});
