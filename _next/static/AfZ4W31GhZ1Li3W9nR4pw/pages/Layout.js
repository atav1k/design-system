(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{972:function(e,n,a){__NEXT_REGISTER_PAGE("/Layout",function(){return e.exports=a(973),{page:e.exports.default}})},973:function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),m=a(2);function p(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},m=Object.keys(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}n.default=function(e){var n=e.components;p(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",components:n},o.a.createElement(m.MDXTag,{name:"h1",components:n,props:{id:"layout-guide"}},"Layout Guide"),o.a.createElement(m.MDXTag,{name:"p",components:n},"The ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"Box.md"}},"Box")," and ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"Flex.md"}},"Flex")," components are low-level layout components that can handle virtually\nany layout styling that could be handled with a grid system as well as handle a lot of microlayout styles."),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"flexbox"}},"Flexbox"),o.a.createElement(m.MDXTag,{name:"p",components:n},"To effectively use the Flex component, you should be familiar with Flexible Box (flexbox) Layout.\nThe following links can be useful to understand how flexbox works:"),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://www.w3.org/TR/css-flexbox-1/"}},"CSS Flexible Box Layout Module")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes"}},"MDN: Using CSS Flexible Boxes"))),o.a.createElement(m.MDXTag,{name:"p",components:n},"Additionally you should be aware of flexbox's bugs and limitations, especially in regards to IE11 support.\nGenerally the Design System layout components should work as expected in IE11, but it's always good to test."),o.a.createElement(m.MDXTag,{name:"p",components:n},"See the ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/philipwalton/flexbugs"}},"Flexbugs")," project for more information."),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"margins"}},"Margins"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Using the ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/jxnblk/styled-system"}},"styled-system")," library, the Box and Flex components have several style props for handling margins,\nwhile adhering to the Design System's spacing scale."),o.a.createElement(m.MDXTag,{name:"p",components:n},"To add margin around a component, wrap it with the Box component and use the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"m")," (margin) prop."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Box m={3}>\n  <Text>Hello</Text>\n</Box>\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"The number ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"3")," in this example refers to step 3 on the spacing scale (",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"theme.space"),").\nThe spacing scale is an array of numbers that are used as pixel values in the Box component."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""}},"// theme.space\n[ 0, 4, 8, 16, 32, 64, 128 ]\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"To add margin in a particular direction use the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"mt"),", ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"mr"),", ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"mb"),", or ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ml")," props.\nThese props are shorthands for ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"margin-top"),", ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"margin-right"),", ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"margin-bottom"),", and ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"margin-left")," respectively."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Box\n  mt={3}\n  mb={4}>\n  <Text>Hello</Text>\n</Box>\n")),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"shorthand-syntax"}},"Shorthand Syntax"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Much like other libraries, including ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://tachyons.io"}},"Tachyons"),", ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://getbootstrap.com/docs/4.0/utilities/spacing/"}},"Bootstrap"),", and ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://basscss.com"}},"Basscss"),",\nthe Box component uses a shorthand syntax for margin and padding.\nThis has a little bit of a learning curve and requires some internalization,\nbut due to the heavy use of these properties it can help with development velocity."),o.a.createElement(m.MDXTag,{name:"table",components:n},o.a.createElement(m.MDXTag,{name:"thead",components:n,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Shorthand"),o.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Meaning"))),o.a.createElement(m.MDXTag,{name:"tbody",components:n,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"m")),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"margin"))),o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"mt")),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"margin-top"))),o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"mr")),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"margin-right"))),o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"mb")),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"margin-bottom"))),o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"ml")),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"margin-left"))),o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"mx")),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"margin-left")," and ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"margin-right")," (x-axis)")),o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"my")),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"margin-top")," and ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"margin-top")," (y-axis)")),o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"p")),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"padding"))),o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"pt")),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"padding-top"))),o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"pr")),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"padding-right"))),o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"pb")),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"padding-bottom"))),o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"pl")),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"padding-left"))),o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"px")),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"padding-left")," and ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"padding-right")," (x-axis)")),o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"py")),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"padding-top")," and ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"padding-top")," (y-axis)")))),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"padding"}},"Padding"),o.a.createElement(m.MDXTag,{name:"p",components:n},"The Box and Flex components can also set padding, using a similar API to the margin props."),o.a.createElement(m.MDXTag,{name:"p",components:n},"To add padding to a Box, use the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"p")," (padding) prop."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Box p={2}>\n  <Text>Hello</Text>\n</Box>\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"To add padding in a single direction, use ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pt"),", ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pr"),", ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pb"),", or ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pl")," props."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Box pt={2} pb={4}>\n  <Text>Hello</Text>\n</Box>\n")),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"creating-a-responsive-grid-layout"}},"Creating a responsive grid layout"),o.a.createElement(m.MDXTag,{name:"p",components:n},"The Flex and Box components can be used to create a flexbox-based grid layout,\nusing the same principles used in other grid systems such as ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://getbootstrap.com"}},"Bootstrap"),"."),o.a.createElement(m.MDXTag,{name:"p",components:n},"To start, create a wrapping component with padding."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<Box p={4}>\n</Box>\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"Next, add a Flex component with the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"wrap")," prop to set ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"flex-wrap: wrap"),'.\nThis will work similarly to a "row" in traditional grid systems.'),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<Box p={4}>\n  <Flex wrap>\n  </Flex>\n</Box>\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},'Next add some Box components that will act as "columns",\nsetting the ',o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"width")," prop to ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"1")," to make the Boxes fill the full-width of the container\nand stack on top of each other for small viewports."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Box p={4}>\n  <Flex wrap>\n    <Box width={1}>\n      <Text>Hello</Text>\n    </Box>\n    <Box width={1}>\n      <Text>Hello</Text>\n    </Box>\n  </Flex>\n</Box>\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"Next, use the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"width")," prop's ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"#responsive-widths"}},"responsive array")," feature\nto change the width of the Boxes at the ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"small")," breakpoint and up."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Box p={4}>\n  <Flex wrap>\n    <Box width={[ 1, 1/2 ]}>\n      <Text>Hello</Text>\n    </Box>\n    <Box width={[ 1, 1/2 ]}>\n      <Text>Hello</Text>\n    </Box>\n  </Flex>\n</Box>\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"Here, the array value (",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"[ 1, 1/2 ]"),") passed to ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"width")," sets its width to ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"100%")," on small viewports and ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"50%")," on viewports wider than the ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"small")," breakpoint.\nIf you resize your browser with this example, the Boxes should stack at narrow viewport widths, and appear side-by-side on wider viewports."),o.a.createElement(m.MDXTag,{name:"p",components:n},"Next, to add gutters to the grid, use a combination of padding and negative margins.\nAdd ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"mx={-3}")," to the Flex component to set left and right margins to ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"-theme.space[3]")," (-16px).\nThis is how many CSS grid systems compensate for gutters.\nAdd an equal amount of padding to the Box components (",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"px={3}"),") to create gutters between their child components.\nA bottom margin (",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"mb={4}"),") can also be added to the Box components to handle spacing when stacked."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Box p={4}>\n  <Flex\n    wrap\n    mx={-3}>\n    <Box\n      width={[ 1, 1/2 ]}\n      px={3}\n      mb={4}>\n      <Text>Hello</Text>\n    </Box>\n    <Box\n      width={[ 1, 1/2 ]}\n      px={3}\n      mb={4}>\n      <Text>Hello</Text>\n    </Box>\n  </Flex>\n</Box>\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"Note that ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"* { box-sizing: border-box }")," should be set in your application to ensure that the padding and width work as expected in the above example."),o.a.createElement(m.MDXTag,{name:"p",components:n},"Because each Box component in the example above adds left and right padding of ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"px={3}"),",\nthe total amount of space between their children will be double that amount.\nSince the spacing scale is based on powers of two, that amount of space is equal to ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"theme.space[4]"),",\nwhich is why the margin bottom is set to ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"4"),"."),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"creating-a-two-column-layout"}},"Creating a two-column layout"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Often pages will have a two column layout, where the left column contains subnavigation or filters and the right column contains the main content for the page.\nUsing some of the same techniques from above, this can be achieved using the Flex and Box components."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<Flex>\n  <Box\n    px={3}\n    width={1/4}>\n    <Sidebar />\n  </Box>\n  <Box\n    px={3}\n    width={3/4}>\n    <MainContent />\n  </Box>\n</Flex>\n")),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"creating-a-navbar"}},"Creating a navbar"),o.a.createElement(m.MDXTag,{name:"p",components:n},"The Flex and Box components are also well-suited to create things like navbars and toolbars."),o.a.createElement(m.MDXTag,{name:"p",components:n},"Start with a Flex container and set its color to white with a blue background."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<Flex\n  color='white'\n  bg='blue'>\n</Flex>\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"Next, add an Icon and some placeholder Text components for demonstration.\nIn a real application, these would likely be links and buttons."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Flex\n  color='white'\n  bg='blue'>\n  <Icon\n    name='hotel'\n    mr={2}\n  />\n  <Text\n    bold\n    mx={2}>\n    Hello\n  </Text>\n  <Text\n    ml='auto'\n    mr={2}>\n    Right Side\n  </Text>\n</Flex>\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"Note the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ml='auto'")," on the last item.\nSetting ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"margin: auto")," on a flex item will space it away from its sibling,\nin this case moving the item to the right side of the navbar."),o.a.createElement(m.MDXTag,{name:"p",components:n},"Next, add some padding and use the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"align")," prop on the parent Flex component to control the layout."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Flex\n  p={2}\n  align='center'\n  color='white'\n  bg='blue'>\n  <Icon\n    name='hotel'\n    mr={2}\n  />\n  <Text\n    bold\n    mx={2}>\n    Hello\n  </Text>\n  <Text\n    ml='auto'\n    mr={2}>\n    Right Side\n  </Text>\n</Flex>\n")),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"creating-tiled-layout"}},"Creating tiled layout"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Often you'll see cards representing an list of items arranged in a tiled layout.\nUsing the ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"#responsive-widths"}},"responsive width")," feature of the Box component\nand the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"wrap")," prop on the Flex component, this sort of layout can be achieved with the following:"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<Flex wrap>\n  {items.map(item => (\n    <Box\n      key={item.id}\n      p={3}\n      width={[ 1/2, 1/3, 1/4 ]}>\n      <ProductCard {...item} />\n    </Box>\n  ))}\n</Flex>\n")),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"responsive-widths"}},"Responsive Widths"),o.a.createElement(m.MDXTag,{name:"p",components:n},"The ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/jxnblk/styled-system"}},"styled-system")," library supports setting responsive widths that change per breakpoint with a mobile-first approach."),o.a.createElement(m.MDXTag,{name:"p",components:n},"The Box component accepts number values to set percentage-based widths.\nAny number from 0–1 will be converted to a percentage.\nAny number greater than 1 will be converted to fixed pixel values.\nAnd strings may be passed to use other CSS units, such as ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"em")," or ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vw"),"."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"// width: 100%\n<Box width={1} />\n\n// width: 50%\n<Box width={1/2} />\n<Box width={0.5} />\n\n// width: 128px\n<Box width={128} />\n\n// width: 2em\n<Box width='2em' />\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"To set a width that changes at different breakpoints, pass an array to the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"width")," prop."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<Box\n  width={[\n    1,    // 100% at all viewport widths (xs breakpoint)\n    1/2,  // 50% from the small (sm) breakpoint and up\n    1/3,  // 33% from the medium (md) breakpoint and up\n    1/4,  // 25% from the large (lg) breakpoint and up\n    1/8   // 12.5% from the x-large (xl) breakpoint and up\n  ]}\n/>\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"To skip setting a width at a particular breakpoint, use a ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"null")," value in the array."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<Box\n  width={[\n    1,    // 100% for all viewport widths\n    null, // skip the sm breakpoint (stays 100%)\n    1/2  // 50% from the md breakpoint and up\n  ]}\n/>\n")))}}},[[972,1,0]]]);