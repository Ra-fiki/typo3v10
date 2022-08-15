RTE.default.preset = full

# remove default content elemensts
TCEFORM.tt_content.CType {
#    removeItems = text,table,uploads,div,bullets,header,form, textpic, image, multimedia
}

mod.wizards.newContentElement.wizardItems {
    products {
        header = Product plugins
    }

    rkce {
        header = Content Elements
    }

    special {
        show := removeFromList(shortcut)
        show =
    }

    forms {

    }

    menu {
        show := removeFromList(menu_sitemap,menu_sitemap_pages)
        show =
    }

    common {
        elements {
            html < mod.wizards.newContentElement.wizardItems.special.elements.html
            shortcut < mod.wizards.newContentElement.wizardItems.special.elements.shortcut
            menu_sitemap_pages < mod.wizards.newContentElement.wizardItems.menu.elements.menu_sitemap_pages
            menu_sitemap < mod.wizards.newContentElement.wizardItems.menu.elements.menu_sitemap
        }

        show := addToList(shortcut,form,html,menu_sitemap_pages,menu_sitemap)
    }
}

## Default Image cropping ##
TCEFORM.sys_file_reference.crop.config.cropVariants {
    default {
        title = Desktop
        selectedRatio = 1_1
        allowedAspectRatios {
            NaN {
                title = Free
                value = 0.0
            }

            16_9 {
                title = 16:9


                value = 1.7777777
            }
        }
    }
}

TCEFORM.tt_content.frame_class {
    removeItems = ruler-before, ruler-after, indent, indent-left, indent-right, none
    addItems {
        container = Container
    }
}
