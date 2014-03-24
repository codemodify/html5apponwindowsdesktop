
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- Background     ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
JsKit.Css.eBackground =
{
    BackgroundAttachment    :"background-attachment",
    BackgroundColor         :"background-color",
    BackgroundImage         :"background-image",
    BackgroundPosition      :"background-position",
    BackgroundRepeat        :"background-repeat"
}

JsKit.Css.eBackgroundAttachment = { Scroll      :"scroll",        Fixed       :"fixed"   }

JsKit.Css.eBackgroundColor      = { Transparent :"transparent"                           } // + rgb(255,255,255) or #abc123 or 
                                                                                           //   http://www.w3schools.com/css/css_colornames.asp
JsKit.Css.eBackgroundImage      = { None        :"none"                                  } // + url(image.png)

JsKit.Css.eBackgroundPosition   = { TopLeft     :"top left",      TopCenter   :"top center",
                                    TopRight    :"top right",     CenterLeft  :"center left",
                                    CenterCenter:"center center", CenterRight :"center right",
                                    BottomLeft  :"bottom left",   BottomCenter:"bottom center",
                                    BottomRight :"bottom right"                          } // + "x% y%" or "xpos ypos"

JsKit.Css.eBackgroundRepeat     = { Repeat      :"repeat",        RepeatX     :"repeat-x",
                                    RepeatY     :"repeat-y",      NoRepeat    :"no-repeat"}




// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- Border    ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
JsKit.Css.eBorder =
{
    BorderBottomColor   :"border-bottom-color",
    BorderBottomStyle   :"border-bottom-style",
    BorderBottomWidth   :"border-bottom-width",

    BorderLeftColor     :"border-left-color",
    BorderLeftStyle     :"border-left-style",
    BorderLeftWidth     :"border-left-width",

    BorderRightColor    :"border-right-color",
    BorderRightStyle    :"border-right-style",
    BorderRightWidth    :"border-right-width",

    BorderTopColor      :"border-top-color",
    BorderTopStyle      :"border-top-style",
    BorderTopWidth      :"border-top-width",

    BorderColor         :"border-color",
    BorderStyle         :"border-style",
    BorderWidth         :"border-width"
}

JsKit.Css.eBorderColor    = {                                                   } // rgb(255,255,255)     or 
                                                                                  // #abc123              or
                                                                                  // http://www.w3schools.com/css/css_colornames.asp
JsKit.Css.eBorderStyle    = { None:"none",       Hidden:"hidden",   Dotted:"dotted",
                              Dashed:"dashed",   Solid:"solid",     Double:"double", 
                              Groove:"groove",   Ridge:"ridge",     Inset:"inset",
                              Outset:"outset"                                        }

JsKit.Css.eBorderWidth    = { Medium:"medium",   Thick:"thick",     Length:"length"  }




// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- Classification ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
JsKit.Css.eClassification =
{
    Clear         :"clear",
    Cursor        :"cursor",
    Display       :"display",
    Float         :"float",
    Position      :"position",
    Visibility    :"visibility"
}

JsKit.Css.eClear      = { Left:"left",                 Right:"right",
                          Both:"both",                 None:"none"                                  }

JsKit.Css.eCursor     = { Url:"url",                   Auto:"auto",
                          Crosshair:"crosshair",       Default:"default",
                          Pointer:"pointer",           Move:"move",
                          EResize:"e-resize",          NeResize:"ne-resize",
                          NwResize:"nw-resize",        NResize:"n-resize",
                          SeResize:"se-resize",        SwResize:"sw-resize",
                          SResize:"s-resize",          WResize:"w-resize",
                          Text:"text",                 Wait:"wait",
                          Help:"help"                                                               }

JsKit.Css.eDisplay    = { None:"none",                          Inline:"inline",
                          Block:"block",                        ListItem:"list-item",
                          RunIn:"run-in",                       Compact:"compact",
                          Marker:"marker",                      Table:"table",
                          InlineTable:"inline-table",           TableRowGroup:"table-row-group",
                          TableHeaderGroup:"table-header-group",TableFooterGroup:"table-footer-group",
                          TableRow:"table-row",                 TableColumnGroup:"table-column-group",
                          TableColumn:"table-column",           TableCell:"table-cell",
                          TableCaption:"table-caption"                                              }

JsKit.Css.eFloat      = { Left:"left",      Right:"right",       None:"none"                        }
JsKit.Css.ePosition   = { Static:"static",  Relative:"relative", Absolute:"absolute", Fixed:"fixed" }
JsKit.Css.eVisibility = { Visible:"visible",Hidden:"hidden",     Collapse:"collapse"                }




// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- Dimension ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
JsKit.Css.eDimension =
{
    Height     :"height",
    Width      :"width",

    MaxHeight  :"max-height",
    MaxWidth   :"max-width",
    MinHeight  :"min-height",
    MinWidth   :"min-width",

    LineHeight :"line-height"
}

JsKit.Css.eHeight     = { Auto:"auto"        }   //  +   length  or  %
JsKit.Css.eWidth      = { Auto:"auto"        }   //  +   length  or  %
JsKit.Css.eMaxHeight  = { None:"none"        }   //  +   length  or  %
JsKit.Css.eMaxWidth   = { None:"none"        }   //  +   length  or  %
JsKit.Css.eMinHeight  = {                    }   //  +   length  or  %
JsKit.Css.eMinWidth   = {                    }   //  +   length  or  %
JsKit.Css.eLineHeight = { Normal:"normal"    }   //  +   number  or  length  or  %




// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- Font ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
JsKit.Css.eFont =
{
    FontFamily      :"font-family",
    FontSize        :"font-size",
    FontAizeAdjust  :"font-size-adjust",
    FontStretch     :"font-stretch",
    FontStyle       :"font-style",
    FontVariant     :"font-variant",
    FontWeight      :"font-weight"
}

JsKit.Css.FontFamily      = { serif:"serif", SansSerif:"sans-serif", Monospace:"monospace",
                              Arial:"Arial", Verdana:"Verdana",      Helvetica:"Helvetica"     }   //  +   family-name  or  generic-family

JsKit.Css.FontSize        = { XxSmall:"xx-small",  XSmall:"x-small",  Small:"small",
                              Medium:"medium",     Large:"large",     XLarge:"x-large",
                              XxLarge:"xx-large",  Smaller:"smaller", Larger:"larger"          }   //  +   length  or  %

JsKit.Css.FontSizeAdjust  = { None:"none"                                                      }   //  +   number

JsKit.Css.FontStretch     = { Normal            :"normal",          Wider           :"wider",
                              Narrower          :"narrower",        UltraCondensed  :"ultra-condensed",
                              ExtraCondensed    :"extra-condensed", Condensed       :"condensed",
                              SemiCondensed     :"semi-condensed",  SemiExpanded    :"semi-expanded",
                              Expanded          :"expanded",        ExtraExpanded   :"extra-expanded",
                              UltraExpanded     :"ultra-expanded"                                       }

JsKit.Css.FontStyle       = { Normal:"normal",  Italic      :"italic",      Oblique     :"oblique"      }

JsKit.Css.FontVariant     = { Normal:"normal",  SmallCaps   :"small-caps"                               }

JsKit.Css.FontWeight      = { Normal:"normal",      Bold        :"bold",        Bolder      :"bolder",
                              Lighter:"lighter",    Hundred     :"100",         TwoHundred  :"200",
                              ThreeHundred:"300",   FourHundred :"400",         FiveHundred :"500",
                              SixHundred:"600",     SevenHundred:"700",         EightHundred:"800",
                              NineFiveHundred:"900"                                                     }




// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- Generated Content   ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
JsKit.Css.eGeneratedContent =
{
    Content             :"content",
    CounterIncrement    :"counter-increment",
    CounterReset        :"counter-reset",
    Quotes              :"quotes"
}

// FIXME: do we really need these in CSS ?
JsKit.Css.eContent            = {  }
JsKit.Css.eCounterIncrement   = {  }
JsKit.Css.eCounterReset       = {  }
JsKit.Css.eQuotes             = {  }




// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- List and Marker     ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
JsKit.Css.eListAndMarker =
{
    ListStyleImage      :"list-style-image",
    ListStylePosition   :"list-style-position",
    ListStyleType       :"list-style-type",
    MarkerOffset        :"marker-offset"
}

JsKit.Css.eListStyleImage     = { None:"none"                                   }   //  +   url()

JsKit.Css.eListStylePosition  = { Inside:"inside",           Outside:"outside"  }

JsKit.Css.eListStyleType      = { None          :"none",                Disc                :"disc",
                                  Circle        :"circle",              Square              :"square",
                                  Decimal       :"decimal",             DecimalLeadingZero  :"decimal-leading-zero",
                                  LowerRoman    :"lower-roman",         UpperRoman          :"upper-roman",
                                  LowerAlpha    :"lower-alpha",         UpperAlpha          :"upper-alpha",
                                  LowerGreek    :"lower-greek",         LowerLatin          :"lower-latin",
                                  UpperLatin    :"upper-latin",         Hebrew              :"hebrew",
                                  Armenian      :"armenian",            Georgian            :"georgian",
                                  CjkIdeographic:"cjk-ideographic",     Hiragana            :"hiragana",
                                  Katakana      :"katakana",            HiraganaIroha       :"hiragana-iroha",
                                  KatakanaIroha :"katakana-iroha"                           }

JsKit.Css.eMarkerOFfset       = { auto:"auto"                                               }   //  +   length




// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- Margin    ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
JsKit.Css.eMargin =
{
    MarginBottom    :"margin-bottom",
    MarginLeft      :"margin-left",
    MarginRight     :"margin-right",
    MarginTop       :"margin-top"
}

JsKit.Css.eMarginBottom   = { auto:"auto"                                          }   //  +   length  or  %
JsKit.Css.eMarginLeft     = { auto:"auto"                                          }   //  +   length  or  %
JsKit.Css.eMarginRight    = { auto:"auto"                                          }   //  +   length  or  %
JsKit.Css.eMarginTop      = { auto:"auto"                                          }   //  +   length  or  %



// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- Outline   ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
JsKit.Css.eOutline =
{
    OutlineColor    :"outline-color",
    OutlineStyle    :"outline-style",
    OutlineWidth    :"outline-width"
}

JsKit.Css.eOutlineColor   = { invert:"invert"                                   }   //  +   rgb() / #hex / colorName

JsKit.Css.eOutlineStyle   = { None:"none",      Dotted:"dotted",   Dashed:"dashed",
                              Solid:"solid",    Double:"double",   Groove:"groove",
                              Ridge:"ridge",    Inset:"inset",     Outset:"outset"        }

JsKit.Css.eOutlineWidth   = { Thin:"thin",      Medium:"medium",   Thick:"thick"          }   //  +   length




// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- Padding   ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
JsKit.Css.ePadding =
{
    PaddingBottom   :"padding-bottom",
    PaddingLeft     :"padding-left",
    PaddingRight    :"padding-right",
    PaddingTop      :"padding-top"
}

JsKit.Css.ePaddingBottom  = {  }  //  length  or  %
JsKit.Css.ePaddingLeft    = {  }  //  length  or  %
JsKit.Css.ePaddingRight   = {  }  //  length  or  %
JsKit.Css.ePaddingTop     = {  }  //  length  or  %




// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- Positioning -- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
JsKit.Css.ePositioning =
{
    Bottom          :"bottom",
    Clip            :"clip",
    Left            :"left",
    Overflow        :"overflow",
    Position        :"position",
    Right           :"right",
    Top             :"top",
    VerticalAlign   :"vertical-align",
    ZIndex          :"z-index"
}

JsKit.Css.eBottom         = { Auto:"auto"                                          }   //  +   %   or  length
JsKit.Css.eClip           = { Auto:"auto"                                          }   //  +   shape 
JsKit.Css.eLeft           = { Auto:"auto"                                          }   //  +   %   or  length
JsKit.Css.eOverflow       = { visible:"visible",    Hidden:"hidden",        Scroll:"scroll",        Auto:"auto"    }
JsKit.Css.ePosition       = { Static:"static",      Relative:"relative",    Absolute:"absolute",    Fixed:"fixed"  }
JsKit.Css.eRight          = { Auto:"auto"                                          }   //  +   %   or  length
JsKit.Css.eTop            = { Auto:"auto"                                          }   //  +   %   or  length

JsKit.Css.eVerticalAlign  = { Baseline:"baseline",  Sub:"sub",          Super:"super",
                              Top:"top",            TextTop:"text-top", Middle:"middle",
                              Bottom:"bottom",      TextBottom:"text-bottom"       }   //  +   %   or  length

JsKit.Css.eZIndex         = { Auto:"auto"                                          }   //  +   number




// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- Table     ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
JsKit.Css.eTable =
{
    BorderCollapse: "border-collapse",
    BorderSpacing:  "border-spacing",
    CaptionSide:    "caption-side",
    EmptyCells:     "empty-cells",
    TableLayout:    "table-layout"
}

JsKit.Css.eBorderCollapse = { Collapse:"collapse",  Separate:"separate"                         }
JsKit.Css.eBorderSpacing  = {                                                                   }   //  length length
JsKit.Css.eCaptionSide    = { Top:"top",    Bottom:"bottom",    Left:"left",    Right:"right"   }
JsKit.Css.eEmptyCells     = { Show:"show",  Hide:"hide"                                         }
JsKit.Css.eTableLayout    = { Auto:"auto",  Fixed:"fixed"                                       }




// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- Text ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
JsKit.Css.eText =
{
    Color           :"color",
    Direction       :"direction",
    LineHeight      :"line-height",
    LetterSpacing   :"letter-spacing",
    TextAlign       :"text-align",
    TextDecoration  :"text-decoration",
    TextIndent      :"text-indent",
    TextShadow      :"text-shadow",
    TextTransform   :"text-transform",
    UnicodeBidi     :"unicode-bidi",
    WhiteSpace      :"white-space",
    WordSpacing     :"word-spacing"
}

JsKit.Css.eColor          = {                                                   }   //  color
JsKit.Css.eDirection      = { Ltr:"ltr",            Rtl:"rtl"                   }
JsKit.Css.eLineHeight     = { Normal:"normal"                                   }   //  number  or  length  or  %
JsKit.Css.eLetterSpacing  = { Normal:"normal"                                   }   //  length
JsKit.Css.eTextAlign      = { Left:"left",          Right:"right",
                              Center:"center",      Justify:"justify"           }

JsKit.Css.eTextDecoration = { None:"none",          Underline:"underline",
                              Overline:"overline",  LineThrough:"line-through",
                              Blink:"blink"                                     }

JsKit.Css.eTextIndent     = {                                                   }   //  length  or  %
JsKit.Css.eTextShadow     = { None:"none"                                       }   //  color   or  length

JsKit.Css.eTextTransform  = { None:"none",          Capitalize:"capitalize",
                              Uppercase:"uppercase",Lowercase:"lowercase"       }

JsKit.Css.eUnicodeBidi    = { Normal:"normal",      Embed:"embed",    BidiOverride:"bidi-override" }
JsKit.Css.eWhiteSpace     = { Normal:"normal",      Pre:"pre",        Nowrap:"nowrap"              }
JsKit.Css.eWordSpacing    = { Normal:"normal"                                                      }   //  length




// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- PseudoClass--- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
JsKit.Css.ePseudoClass =
{
    Active      :":active",
    Focus       :":focus",
    Hover       :":hover",
    Link        :":link",
    Visited     :":visited",
    FirstChild  :":first-child",
    Lang        :":lang"
}




// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- PseudoElement  ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
JsKit.Css.ePseudoElement =
{
    FirstLetter :":first-letter" ,
    FirstLine   :":first-line",
    Before      :":before",
    After       :":after"
}
