<?php

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

defined('TYPO3_MODE') || die();

$pageTs = [
[
'extKey' => 'extcore',
'filePath' => 'Configuration/TypoScript/MainDomain/TSconfig/Page/init.ts',
'title' => 'Extcore - full'
],
[
'extKey' => 'extcore',
'filePath' => 'Configuration/TypoScript/MainDomain/TSconfig/Page/Base/130_backend_layouts.ts',
'title' => 'Extcore - Backend Layouts'
],

];
foreach ($pageTs as $pageT) {
        ExtensionManagementUtility::registerPageTSConfigFile(
            $pageT['extKey'],
            $pageT['filePath'],
            $pageT['title']
        );
}