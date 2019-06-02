# Variables

## Addresses

```css
@addressColor: @darkestGray;
@addressFont: @baseFont;
@addressFontSize: @baseFontSize;
@addressFontWeight: normal;
@addressFontStyle: normal;
@addressLineHeight: @paragraphLineHeight;
```

## Base

```css
// Default units

@defaultUnit: rem; // unitless value default
@defaultFontSizeUnit: @defaultUnit;
@defaultLineHeightUnit: em;

// Root sizing

@rootFontSize: 62.5%; // root font size (62.5% = 10px, 100% = 16px)// All rem-based units are relative to the root size above

@baseColor: @darkestGray;
@baseFont: Arial, Helvetica, sans-serif;
@baseFontSize: 1.6;
@baseFontWeight: normal;
@baseLineHeight: 1em;

@bodyBackground: @white; // false to disable
```

## Buttons

```css
@buttonStyled: true;

@buttonColor: @white;
@buttonFont: @baseFont;
@buttonFontSize: @baseFontSize;
@buttonFontWeight: normal;

@buttonPaddingHorizontal: 3;
@buttonPaddingVertical: 1.3;

@buttonMarginBottom: false;

@buttonRounded: @defaultRadius; // false to disable

@buttonTransitionEnabled: false;

@buttonBackground: @darkGray;
@buttonBackgroundHover: darken(@buttonBackground, 5%);
@buttonBackgroundActive: darken(@buttonBackground, 10%);

@buttonBorderColor: false; // false to disable// Colored Buttons

@coloredButtonClassModifier: button-colored;

@coloredButtonColor: @white; // font color

@coloredButtonBackground: @linkColor;
@coloredButtonBackgroundHover: darken(@coloredButtonBackground, 5%);
@coloredButtonBackgroundActive: darken(@coloredButtonBackground, 10%);

@coloredButtonBorderColor: false;

// Disabled Buttons

@disabledButtonClassModifier: button-disabled;

@disabledButtonColor: @darkGray;

@disabledButtonBackground: @lightGray;

@disabledButtonBorderColor: false;

@disabledButtonCursor: not-allowed;
```

## Code

```css
@codeColor: @darkestGray;
@codeFont: monospace;
@codeFontSize: @baseFontSize;
@codeLineHeight: 1.4em;

@codeBackground: @lighterGray;

@codeBorderColor: false;
@codeRounded: false;

@codePaddingHorizontal: .5em;
@codePaddingVertical: .2em;

@codeBlockColor: @lightestGray;
@codeBlockFont: @codeFont;
@codeBlockFontSize: 1.3;
@codeBlockLineHeight: @paragraphLineHeight;
@codeBlockTabSize: 4;
@codeBlockWrap: false;
@codeBlockMarginBottom: @blockMarginBottom;

@codeBlockBackground: @darkestGray;

@codeBlockBorderColor: @codeBorderColor; // false to disable
@codeBlockRounded: false;

@codeBlockPaddingHorizontal: 2;
@codeBlockPaddingVertical: 1.4;
```

## Colors

```css
@primary: #349bb9;
@secondary: #70c1b3;
@tertiary: #f18f01;

@info: #00f;
@success: #008000;
@warning: #f00;
```

## Fonts

```css
@fontPath: '../fonts/'; // absolute or relative path

@woff2Enabled: true; // false to disable
```

## Forms

```css
// Inputs

@inputColor: @darkerGray;
@inputFont: @baseFont;
@inputFontSize: @baseFontSize;
@inputFontWeight: @baseFontWeight;

@inputBackground: @white;

@inputBorderColor: @lighterGray;
@inputBorderColorHover: darken(@inputBorderColor, 10%);
@inputBorderColorFocus: darken(@inputBorderColor, 20%);
@inputBorderWidth: 1px;        // false to disable
@inputRounded: @defaultRadius; // false to disable

@inputMinWidth: 20; // false to disable
@inputMinHeight: 3; // false to disable

@inputPaddingHorizontal: 1.6;
@inputPaddingVertical: 1;

@inputMarginBottom: 2;

@inputPlaceholderColor: lighten(@inputColor, 40%);

// Invalid Inputs

@inputColorInvalid: darken(@inputBorderColorInvalid, 10%);

@inputBackgroundInvalid: @white;

@inputBorderColorInvalid: #a41818;
@inputBorderColorInvalidHover: darken(@inputBorderColorInvalid, 10%);
@inputBorderColorInvalidFocus: darken(@inputBorderColorInvalid, 20%);
@inputBorderWidthInvalid: 1px; // false to disable// Required Inputs

@inputColorRequired: darken(@inputBorderColorRequired, 10%);

@inputBackgroundRequired: @white;

@inputBorderColorRequired: @darkGray;
@inputBorderColorRequiredHover: darken(@inputBorderColorRequired, 10%);
@inputBorderColorRequiredFocus: darken(@inputBorderColorRequired, 20%);
@inputBorderWidthRequired: 1px; // false to disable// Disabled Inputs

@inputColorDisabled: @darkGray;

@inputBackgroundDisabled: @lightestGray;

@inputBorderWidthDisabled: false; // false to disable

@inputCursorDisabled: not-allowed;

// Selects

@multiSelectMinHeight: 8;

// Checkboxes

@checkboxMarginBottom: 1;
@checkboxMarginRight: .5;

// Textareas

@textareaLineHeight: 1.3em;
@textareaMinHeight: 8;
@textareaResize: vertical; // none, horizontal, vertical, both
@textareaPaddingHorizontal: 1.6;
@textareaPaddingVertical: 1;

// Legends

@legendColor: @darkerGray;
@legendFont: @baseFont;
@legendFontSize: 1.8;

@legendMarginBottom: 1.4;

// Labels

@labelFontWeight: normal;
@labelLineHeight: 1.3em;

@labelMarginBottom: .4;
@labelMarginRight: 1;
```

## Grayscale

```css
@white: #fff;
@lightestGray: darken(#fff, 4%);
@lighterGray: darken(#fff, 10%);
@lightGray: darken(#fff, 25%);
@gray: darken(#fff, 35%);
@darkGray: darken(#fff, 55%);
@darkerGray: darken(#fff, 65%);
@darkestGray: darken(#fff, 75%);
@black: #000;
```

## Headings

```css
@headingColor: @baseColor;
@headingFont: Tahoma, Geneva, sans-serif;
@headingFontWeight: @boldFontWeight;
@headingLineHeight: 1.4em;

@headingMarginBottom: 2;

@h1: 3.6; // font sizes
@h2: 3.2;
@h3: 2.8;
@h4: 2.4;
@h5: 2;
@h6: 1.6;
```

## Horizontal Rules

```css
@ruleColor: @lightGray;
@ruleHeight: 1px;
@ruleStyle: solid;
@ruleMargin: @blockMarginBottom;
```

## Images

```css
@imagePath: '../img/';         // absolute or relative path
@spriteFilename: 'sprite.png'; // relative to image path above

@retinaSpriteWidth: auto;
@retinaSpriteHeight: auto;

// Margin applied when using img-left and img-right classes

@imageMarginBottom: 2;
@imageMarginSide: 2;

@retinaSuffix: '-2x'; // retina filename suffix// Figures

@figureBorderColor: false; // false to disable
@figureRounded: false;

@figurePadding: @blockMarginBottom;

// Figure Captions

@figCaptionColor: @darkGray;
@figCaptionFontStyle: italic;
@figCaptionLineHeight: @paragraphLineHeight;

// Alignment

@imageLeftClass: img-left;
@imageRightClass: img-right;
```

## Layout

```css
@minWidth: false;  // min container width, false to disable
@maxWidth: 1280px; // max container width, false to disable

@bumperPadding: 6%;  // bumper padding on containers, false to disable
@padContainer: true; // enable bumperPadding on containers

@gridMargin: 5%; // default margin for spaced columns
@gridColumns: 8; // default number of columns in grid

@gridSpaceless: false; // set to true to eliminate inline grid whitespace hack

@blockMarginBottom: 4; // default spacing for lists, form elements, and other blocks
```

## Links

```css
@linkColor: @primary;
@linkColorHover: darken(@linkColor, 10%);
@linkColorActive: darken(@linkColor, 20%);

@linkDecoration: none;       // none, underline
@linkDecorationHover: false; // none, underline, false
```

## Lists

```css
@listColor: @paragraphColor;
@listLineHeight: @paragraphLineHeight;

@listMarginBottom: @paragraphMarginBottom;
@listMarginLeft: false; // false to disable

@listBulletStyle: disc;      // disc, circle, square, etc
@listBulletPosition: inside; // inside or outside

@nestedListMarginLeft: 2;

@liMarginBottom: .2; // false to disable// Description Lists

@dlMarginBottom: @blockMarginBottom;

// Description List Titles

@dtColor: @darkerGray;
@dtFont: @headingFont;
@dtFontSize: 2;

@dtMarginBottom: .2;

// Description List Items

@ddColor: @gray;
@ddFont: @baseFont;
@ddFontSize: @baseFontSize;

@ddMarginBottom: 1;
```

## Miscellaneous

```css
@smallFontSize: .8em;

@selectionColor: @white;
@selectionBackground: @linkColor;

@boldFontWeight: bold;
@normalFontWeight: normal;

@markColor: @baseColor;
@markBackground: yellow;

@defaultRadius: 3px;
@defaultOpacity: .2;
@defaultDuration: .2s;
@defaultTiming: ease-in-out;

@abbrUnderline: dotted; // dotted, solid, none
```

## Paragraphs

```css
@paragraphColor: @baseColor;
@paragraphFontWeight: @baseFontWeight;
@paragraphLineHeight: 1.7em;

@paragraphMarginBottom: 2;
```

## Print

```
@printPageMargin: 2cm .5cm;
```

## Quotes

```css
@quoteColor: @darkestGray;
@quoteFont: Georgia, Times, serif;
@quoteFontSize: 2;
@quoteFontStyle: italic;
@quoteFontWeight: normal;
@quoteLineHeight: 1.4em;

@quotePaddingHorizontal: 2em;
@quotePaddingVertical: 1em;

// Cites

@citeColor: @gray;
@citeFont: @baseFont;
@citeFontSize: 1.8;
@citeFontStyle: normal;
@citeFontWeight: normal;
@citeLineHeight: 1.2em;

@citeMarginTop: 1.4;

@citeIndicator: '\2014\00a0';
```

## Tables

```css
@tableStyled: true;    // apply base styling by default
@tableBordered: false; // apply outer border by default
@tableStriped: true;   // apply striping by default

@tableFontSize: @baseFontSize;

@tableBorderedClassModifier: table-bordered;
@tableStripedClassModifier: table-striped;

// Table Cells

@tableCellLineHeight: @paragraphLineHeight;

@tableCellBorderColor: @lighterGray;

@tableCellPaddingHorizontal: 1.6;
@tableCellPaddingVertical: .6;

// Table Captions

@tableCaptionFontStyle: italic;

@tableCaptionBackground: @lightestGray;

@tableCaptionPaddingVertical: 1.2;
@tableCaptionPaddingHorizontal: @tableCellPaddingHorizontal;

// Striping

@tableStripedBackground: @lightestGray;
@tableStripedPosition: odd; // even, odd
```