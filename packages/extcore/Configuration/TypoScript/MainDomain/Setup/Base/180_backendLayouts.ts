page {
    10 = FLUIDTEMPLATE
    10 {
        file.stdWrap.cObject = CASE
        file.stdWrap.cObject {
            key.data = pagelayout

            default = TEXT
            default.value = EXT:extcore/Resources/Private/BackendLayouts/Templates/Index.html

            3 = TEXT
            3.value = EXT:extcore/Resources/Private/BackendLayouts/Templates/Index2.html
        }

        format = html
        partialRootPaths {
            10 = EXT:extcore/Resources/Private/BackendLayouts/Partials/
        }

        layoutRootPaths {
            10 = EXT:extcore/Resources/Private/BackendLayouts/Layouts/
        }


        templateRoothPaths {
            10 = EXT:extcore/Resources/Private/BackendLayouts/Templates/
        }

        variables {
            contentColPos10 < styles.content.get
            contentColPos10.select.where = colPos=0
            contentColPos20 < styles.content.get
            contentColPos20.select.where = colPos=20
            contentColPos30 < styles.content.get
            contentColPos30.select.where = colPos=30
        }

        settings < site
    }
}
