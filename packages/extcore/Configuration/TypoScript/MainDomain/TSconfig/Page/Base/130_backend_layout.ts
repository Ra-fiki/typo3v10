mod.web_layout.BackendLayouts {
    Index {
        title = Index1-one_column
        icon = EXT:extcore/Resources/Public/MainDomain/Icons/Backendlayouts/BackendLayout-1column.png
        config {
            backend_layout {
                colCount = 1
                rowCount = 1
                rows {
                    1 {
                        columns {
                            1 {
                                name = Content
                                colPos = 10
                            }
                        }
                    }
                }
            }
        }
    }

    Index2 {
        title = Index2-two_columns
        icon = EXT:extcore/Resources/Public/MainDomain/Icons/Backendlayouts/BackendLayout-2column.png
        config {
            backend_layout {
                colCount = 2
                rowCount = 1
                rows {
                    1 {
                        columns {
                            1 {
                                name = ContentLeft
                                colPos = 10
                            }

                            2 {
                                name = ContentRight
                                colPos = 20
                            }
                        }
                    }
                }
            }
        }
    }

    Index3 {
        title = Index3-one-two-one-columns
        icon = EXT:extcore/Resources/Public/MainDomain/Icons/Backendlayouts/BackendLayout-1-2-1columns.png
        config {
            backend_layout {
                colCount = 2
                rowCount = 3
                rows {
                    1 {
                        columns {
                            1 {
                                name = ContentUpMiddle
                                colPos = 10
                                colspan = 1
                            }
                        }
                    }

                    2 {
                        columns {
                            1 {
                                name = ContentLeft
                                colPos = 20
                            }

                            2 {
                                name = ContentRight
                                colPos = 30
                            }
                        }
                    }

                    3 {
                        columns {
                            1 {
                                name = ContentDownMiddle
                                colPos = 40
                                colspan = 1
                            }
                        }
                    }
                }
            }
        }
    }
}
