page {
    10 {
        file.stdWrap.cObject {
            default.value = EXT:myext/Resources/Private/BackendLayouts/Templates/Index.html
            3.value = EXT:myext/Resources/Private/BackendLayouts/Templates/Index2.html
        }

        partialRootPaths {
            20 = EXT:myext/Resources/Private/BackendLayouts/Partials/
        }

        layoutRootPaths {
            20 = EXT:myext/Resources/Private/BackendLayouts/Layouts/
        }

        templateRoothPaths {
            20 = EXT:myext/Resources/Private/BackendLayouts/Templates/
        }

        settings < site
    }
}
