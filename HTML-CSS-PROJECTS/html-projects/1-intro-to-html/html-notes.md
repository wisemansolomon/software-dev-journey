### HTML entities/special characters:
They are codes used to represent special characters in HTML such as symbols, accented characters. They are used to avoid conflicts with HTML syntax and special characters as well as ensure compatibility across different browsers

### HTML attributes:
They modify how an element behaves. e.g the element that is used to link websites is the anchor tag, <a href="https:/www.youtube.com" target="_blank">Link to a wesite</a>. The attributes modify the behaviour of elements e.g href tells the computer to jump to the specified website, and the target tells the computer to open the link on a new tab, if empty, the website opens on the same tab as the already opened web page/current.

### Weird quirks of the html language.
* Extra spaces are ignored in html: Beginners often think that by adding extra spaces, it would translate to extra spaces on the webpage but no. There is an element for that and other tehnique for that.

### The dev tools:
The dev tools is a very useful tool for development. It allows us to have an indepth view of all the html and styling on our webpage as well as any webpage we are on. Clik on the pointer and hover over any item on the webpage and the backend of the element will be in view for our inspection. If we are making a project of any webpage, we can use the dev tools to copy the styling exactly and apply on ours to get exact replica and so on. Use inspect or F12 to access dev tools. 

### Converting from one color measurement to another.
Just google hex to rgb or vice versa and we can convert to preferred styling and apply. Hint: Try to stick with rgb/ rgba

### The computed tab.
The computed tab is found when we have clicked on inspect on dev tools mode. It is very useful in that it shows us all the final styles applied to an element we are inspecting. So we can get the exact on any object we are replicating on for a replica project.

### CSS Box Model: 
The box model describes the structure of an HTML element as a rectangular box, consisting of:  It also tells us we can style an element using these 3 props.
  * Content Area: The innermost part where the element's content is displayed. It is the default visible part of the element, where the text, images, background color,or other content is displayed. At this point: padding: 0, margin: 0 and border is not visible for text elements or visible for non-text elements like buttons, input elements.
  * Padding: The space between content area and border. 
  * Border: The outline of the box/the boundary of the box separating the content area and the outer environment.
  * Margin: The space between the element's box model and other elements.

  ### Relationship between an element's height, width, margin and padding
  (1) Height and/or Width:
      *They define the size of an element's content area.
      * Height and width properties set the dimensions of the element's box model.
      * Can be set using px, %, em, rem etc.
  (2) Padding:
      * Adds space between the content area and border.
      * Increases the size of the element's box model.
      * Can be set using px, %, or other units.
  (3) Margin: 
      * Adds space between the element's box model and other elements.
      * Does not increase the size of the element's box model.
      * Can be set using px, %, or other units.
    
    The width of an element is by default a function of the content of the element. But suppose we set a fixed width, some contents may overflow. So it is adviced that in dev, we can set a width but if later on we add a content, we can remove the fixed width and the content will be contained by default.
  ### Discouraged to set width and height:
  Elements by default are designed to adjust to the dynamism of their content. Due to this reason, it is not encouraged to set width and height of element expecially if the content is changing because a set width and height may result in content overflow.

  Best practice: 
  Use padding and other flexible spacing methods whenever possibe, and reseerve fixed widths and heights for situations where they're necessary or desirable like in some images and media and fixed layout requirements.

  ### About font weights: How we set the font boldness
  font-weight of 400 is normal, 500 is semi-bold and 700 is bold. It is a unitless property.

  ### Vertical alignment properties.
  Often when we style, sometimes we may notice that elements will align along the same lines as the text contents. This is the default behaviour of web browsers because originally web browsers were all text based. To correct this use vertical-align: top so all elements align with the top outline.

  ### Styling images Notes
  * By default images on web pages like to keep their original dimensions when loaded on the page. Messing around with height and width properties of the image tag can mess up the image's dimensions.
  * But to help us, when we set an image width alone, the height auto adjusts to give the image the best dimension for that width. Therefore, it is not a good idea to set width and then height for an image. This often distorts the image. And we will then be forced to set object-fit, object-position etc.
  * But suppose we have a need to set an image width and height manually. There is an image css property called 'object-fit': cover/contain (an example value, forces image to adjust width and height to retain a best dimension)
  * Further to this object-fit, we can use object-position:left/right/top/bottom. Remember the image element also takes the box model, where the image itself is the content. If we set width and height, we are setting the dimension and sometimes the image will not fit perfectly. For texts we notice that width makes the text wrap but for images, we will not just see the image's best view.

  ### Extra tip: How to keep images in their container
  * select the image element with css and style.
  * Use max-width: 100% . Remember when we use % it is always in reference to its container dimensions.

  ### One of the most important CSS property - display
  The display property of elements determine how elements are displayed by default on a webpage. There are 2 types default with a hybrid manually set.

  * display: block: These are elements that always start on a new line, take up the entire width of a container, irrespective of the width of content (can even set a width and height and still pushes all other element away to a new line). Can set margins and padding (top/bottom/left/right)  div, p, h1-h6, ul, ol, li, table

  * display: inline: These are elements that do not by default start on a new line, but flow within the line of text and only take up as much width they need to fit their content and no more. Unless the content spans the whole line, that is when they force elements to a new line. Can only set margin/padding (left/right  but top/bottom, height/width of any container is not respected as they can cause overlap) e.g img, input, span, a, button, strong, em,. 

  * display: inline-block: Elements do not have this display property by default and have to be manually set. They also do NOT start on a new line but what makes them block is that we can set width and height, like block elements. e.g div with display: inline-block, span with display: inline-block and img with display: inline-block. 

  * 

  * By using the display property, we can specify manually how an element is displayed (force it) even against the default. 

  * All block level elements have a width of 100% (1 reason for being block, so if we are to make inline-block, the width must be reduced as well...)

  Lastly, there's actually a display none and display hidden property that we can set for elements.

  ### div: The most important html element:
  div stands for division, are block level, and no default styling. Their best use is as containers for grouping a set of elements to make layouts efficient - hence their use in building complex real-world websites. 
  
  However, it is important to be aware that containers like div are designed to contain and layout block-level elements like p, h1, div etc. However, images (are files with their own intrinsic width and height determined by the image's resolution & aspect ratio.) So browsers, when rendering an image file with the img element uses the image file's dimensions to determine its display size. 

  So in essence, images often need explicit width to be set to be forced to conform to the container's width like width:100%

  Images as we shall see often is special because the auto ajust their height when we set a width. This is to allow for rendering the best image quality, dimension and resolution. However, in some instances, one may want to actually set a specific width and height and what we see is that the image is distorted. To correct this, there are some properties specific to images like 'object-fit: cover/contain' "object-position: center/left/right".

  ### Nested Layouts Technique
  This is probably the most important lesson to master in HTML/CSS and it will take us to a professional level. 

  The basic idea is that there are two types of layouts. Mostly implemented with div elements.
  # 1 Vertical Layout
  This layout is when items/contents are stacked one on top of the other to form a vertical stack or what looks like a stack of rectangles in an upright position.
  # 2 Horizontal Layout
  This layout is when items are stacked one beside the other in what looks like  horizontal stack or a barchart sort of way.
  # 1 + # 2
  By using a combination of vertical and horizontal layouts, we can create a grid-like structure of any kind allowing us create complex layouts and can adapt todifferent screen sizes and devices. For example, in web development, nested layouts can be achieved using CSS Flexbox or CSS Grid or a combination of both/ or by using display: inline-grid ()

  In a nested layout, a container can hold multiple child elements or other containers, each with its own layout properties. For instance, a parent container might use a flex layout to align its children, while each child container could have its own grid layout to manage its internal elements.
  In summary, the nested layout technique is a powerful method for creating flexible and responsive designs, allowing developers to organize and align elements in a hierarchical and adaptable manner.

  Lastly, because paragraph elements and other block elements can stack on top of oneanother to form a vertical layout, there is usually no need to wrap div elements around them if they already form a stack that we want.

  ### Use of image editing software;
  It is good practice to use an image editing software to draw out the combination of vertical and horizontal layout which would help as a guide in our code. eg Google draw.

  ### CSS Grid
  It is a much better way to create horizontal layouts. Recall that so far, in the projects we have done, we were using display: inline-block and then setting a width in order to have a layout side by side but there are some problems with display: inline-block that we will talk about. (1) There can be alignment problems where one of the inline-block container will have a higher height than the other one causing a misalignment which can cause issues in styling from one container to another. However, CSS grid, which helps us create perfectly aligned layouts. (2) extra spaces between two inline-block containers which sometimes we do not want.
    #
  What is a grid: A grid in CSS is a layout that has rows and columns e.g 2X3 grid= 2 rows and 3 columns.

  To set a grid, we have to set it within a container with a fair idea about the number of div elements we want for our grid columns. The parent container will have the property of display: grid. And also the parent container will be a second property of how many grid template columns we want in px, %, fr, and other measures (because we are actually drawing a template). When we do that, any element will automatically be forced to take up an empty grid space. each space acting like a mini webpage sort of. 
    #
  The advantage over inline-block is that, the height of the more lengthy grid content determines the height of that grid row resulting in a perfectly aligned grid. Grid maintain alignment much better.
    #
  And whenever we have more elements (say we have grid template colums: 100px 100px 200px and we have more elements say 5 elements) than we have columns (grid template), the first three takes the first three columns while the 4th and 5th wraps around to form a new row below the 3 from left to right to continue. Meaning at most we will have 3 columns but an unlimited number of rows as more elements are added.
  #
  We can add spaces between the grid containers with margin as usual. but within the grid if we add margin, we begin to distort the grid cell. To add space between grid lines, we use the property:
  ### the fr units in defining grid tamplates columns or rows
  The fr in css grid stands for "fraction" or "fractionl unit". It represents a fractional portion of the available space in a grid container.

  When we use fr, we are defining a 'flexible' track (row/column) that absorbs a fraction of the available space. *The number of fr units we use determines how many fractions of the available space each track will occupy*. 
  e.g grid-template-columns: 1fr 2fr 1fr; (25% 50% 25%)
  
  -> The space will be divided into 4 tracks. 1fr allocated to 1 track, 2fr allocated 2 tracks merged, and last 1fr takes last track.

  e.g grid-template-columns: 1fr; 
  -> Available space will be divided by 1 and allocated to 1fr of the defined grid-template-row/column.

  Note: we cannot have grid-template-column/row: 2fr because it is same as if template is just for 1fr because total space dicided into 2 and allocated to 2fr - one track implies all space allocated to 1 track.
  # fr vs. %
  While *%* represents a percentage of the parent container's width or height, *fr* represents a fraction of the available space within the grid container. So, fr is more flexible and powerful than %, as it allows us to define flexible and responsive grid tracks that adapts to the available space. Say we have a container of width 1000px.  If i specify tmplate-column as 30% and 70%. -> 300px and 700px. Suppose i want to add a 70px content, I will not be able to unless I go to change the grid template to 23% 7% 70% but with fraction, i can add something and available space would adjust to fraction sent so i can do 7% 1fr 2fr.

  # Every container no matter how small can be made a grid 
  That is why we will use grid to modify our youtube clone page.
  
  # What happens when we make a grid container:
  * When we make a grid container, unless the child element needs a fixed width, we do not set a width for the child element, the box model e.g div content takes up the div space or the grid space is left completely for the next element, whichever it is.

  * for images, we only need to set the width as a % not fixed px so that since the grid is flexible, the image will adjust in size dynamically as the view page is adjusted.

  ### CSS Flexbox
  The Flexbox is similar to Grid in that it is another way to create layouts but it is more flexible.
  * When we set display flex, unlike in display: grid, where we draw a virtual grids (setting template colums/rows) and elements fill them out - making it a little more rigid, display: flex makes any child element (divs), all inline and flexible ( by default no fixed width template is set unless a particular child element is selected & given a fixed width. ) Or think of flexboxes provides more control to how individual container contents' layout should be. Meaning we set a container and flexbox and then we can use that to control its contents unlike a grid container where we map a grid inside it and elements just fill it out.

  * Flexboxes also maintain their alignments say we make one flexbox taller (e.g puting a <p> content in another row inside one of the boxes), all other ones in that row take same height to maintain the alignment.
  * But how do we know how many children makes a row? Well it is not as straight-forward as grid. 
  -> The default width of child contents tend to be maintained until the end of the parent container.
  -> At that container end, contents like <p> will try to wrap to try and squeze in more child items, if there are more
  -> But there is flex-basis property which when set on item(s) lets us set a starting width for a flex item(s).This 
  -> But most flex properties are respected when the property flex-wrap: wrap; is set 

  ************************************
  Your summary of how Flexbox works is mostly correct. Here's a breakdown:

Correct points
- Flex container and child items: When you set display: flex on a container, its child items become flex items and are subject to flexbox rules.
- Layout direction: By default, flex items are laid out in a row (horizontally) with no fixed width, and their width is determined by their content or an explicit width set on the item.
- Flexibility: Flex items can adapt to the container's width, and if the container's width shrinks, the flex items can wrap to a new line or even a single column if necessary.
- Content styling: The content of a flex item is not bound by the flexbox rules, and you can make a flex item a flexbox or grid container independently to style its content.

Minor clarifications
- Default flex direction: The default flex direction is row, but you can change it to column using the flex-direction property.
- Flex wrap: By default, flex items will try to fit on one line. To allow wrapping, you need to set flex-wrap: wrap on the flex container.
- Flex item width: While flex items don't have a fixed width by default, you can set a width or use the flex-basis property to define a initial width.

Flex items can adapt to the parent width, but it's subject to the flex property (or its individual components: flex-grow, flex-shrink, and flex-basis) rather than just the flex-direction property.

Flex property
The flex property determines how flex items adapt to the available space in the flex container. It consists of three components:

- flex-grow: Determines how much the item can grow relative to other items.
- flex-shrink: Determines how much the item can shrink relative to other items.
- flex-basis: Sets the initial width (or height, depending on the flex direction) of the item.

By setting the flex property, you can control how flex items adapt to the parent width.

Flex direction
The flex-direction property determines the direction of the flex layout, such as row or column, but it doesn't directly control the flexibility of the items.

If you want the flex items to wrap to a single column as the parent width shrinks, you don't necessarily need to set flex-direction: column. Instead, you can use flex-wrap: wrap on the flex container.

How it works - the flex wrap and flex direction: One is for strict layout setting while the other is for adapting fex items to wrap if it reaches the end of a container width.

When you set flex-wrap: wrap, the flex items will wrap to a new line when there's not enough space on the current line. As the parent width shrinks, the items will continue to wrap until they're in a single column.

No need to set flex-direction: column
You don't need to set flex-direction: column to achieve this behavior. The flex-direction property determines the direction of the flex layout, while flex-wrap controls whether the items wrap to a new line.

By using flex-wrap: wrap, you can allow the flex items to adapt to the parent width and ultimatly wrap to a single column without changing the flex direction.
**********************************

  * In CSS grid, we saw we could set a template on the parent container for how many grid columns we want and also set a fractional cut of the remaining space using fr. But in flexbox, we cannot set it on a container, rather we select each child item and decide how much of the the space we want it to have. The property, flex: 10px, % or a unitless value of 1, 2 or 3 tells us how much of the remaining space should be taken by that element. if only one item is there, then a 
  flex: 1; means take 1:1, if 2 or more elements are there, a flex: 1; flex: 2, flex: 1 means fraction of total of 4. item a takes 1, item b takes 2 and item c 1. Sort of like 1fr 2fr 1fr;

  * In summary, CSS grid is more rigid because the columns are set on the parent container and items within that grid takes that set columns property. But with flexbox- even from the name flexible box, we have flexibility. Always think about it is given us more control of a box and its contents (size, position, spacing btw/around etc). Any item given a particular item property irrespective of its position inside the parent container

  NOTE: When we set a container as flexbox, its immediate children behave somewhat like inline-block elements by default: 1. Take only as much as as content, 2. line up horizontally, 3. Have the flex: initial. This leads to unused space. We can make any child take up a fraction of available space by setting flex: 1 or flex 2 etc based on number of sibling elements around it and how many has a flex property set. This means we dont need to necessarily set a width for the other child items unless we need to.

  ### Which one of these two layouts should be used: 
  The truth is that it depends on choice but but for the most part, CSS grid is best (the grid template determines the layout pattern) for a layout where the layout where what we want to display is the same always e.g youtube video preview content. But use a flexbox in cases where the display content is dynamic e.g the content elements determines the layout pattern and also when we want control over placing element whether at the start, end, center.

  * for flex box, everything starts on the left (start) and then we begin to use item properties to adjust things how we want.

  ->justify-content:start| center| end | space-between | space-around This aligns contents horizontally or distributes contents horizontally. If a width is given to a content, that width is maintained- and you will see it affect a distributed space..
  -> align-items:This defines how items are aligned vertically. The default is 'stretch' where items stretch to fill up the vertical space. start | end| center

  NOTE: In flexbox, when flex direction is row (default), justify content affects horizontal positioning while align items affect vertical position. The reverse is the case if flex direction is column.

  ### THE CSS WIDTH

  ### The max-width and min-width property
  The max-width and min-width property is a very important property in web development. 
  
  Max-width allows your content to determine the with of the container but with a limit to how much it can grow. It is used to control content from growing/expanding beyond a desired width.
  
  Min-width on the other hand is used to set a start with of a container but with an allowance to grow if the content demands.
  
  In other words, When combined: 
  * Width: is the initial width of the container if specified irrespective of content.
  * Min-width: If set, when the container is forced to shrink (e.g due to screen size or parent container constraints) the min-width will override the width and prevent the cintainer from from getting smaller than the specified min-width.
  * Max-width: If set, when the container is forced to grow (due to content or parent container constraints), the max-width value will override the set width and grow but prevent the container from exceeding the specified min-width.
  * If no min-width or max width is set, then the container maintains a fixed width and if forced to shrink (smaller parent container or screen), the content will be cut off/overflow. The reverse is the case for larger container, the container will maintain its width and not expand.
  * Best Practice: 
    -> Use min-width and max-width: Instead of width, when we want to create a responsive container that adapts to different screen sizes.
    -> Set width only when necessary: If we need a fixed width, then use width.

  ### Constrained width;
  For fixed widths like px, as we adjust the display size, the fixed width does not change but there is a constrained width meaning a width imposed by the container that appears to be smaller than the fixed width but if we inspect the container, we see the actual fixed shape, part of which is shaded out.

  ### The BOX SHADOW styling
  box-shadow: px px px px rgba(x,y,z, 0-1)
  Note: must set atleast vertical and horizontal shadow positions while others are optional.

  inset or vacant mean means the shadow is inside or outside/outset which is the default. 
  1st px is horizontal position
  2nd px is vertical position
  3rd px is blur intensity
  4th px is blur spread spanning wider area or less
  rgba is color and the alpha is the transparency of color.

  ### The border radius property
  It can have from one to four values. One value applies same value to all for corners of the elements.
  * Four values - border-radius: 15px 50px 30px 5px; (first value applies to top-left corner, second value applies to top-right corner, third value applies to bottom-right corner, and fourth value applies to bottom-left corner) in a clockwise manner. and a cross reference relationship. ie, top-left/bottom right relationship and vice versa if 2 or 3 values are given.
  
  ### The flex-shrink property: 
  You notice that in some web pages, there are layouts that are designed not to shrink as the view width is being minimized. It is a wierd property that is observable with a flex-box (a box with layout set to flex) This results in a situation where the spacing between items within a flexbox shrink as the layout is minimized. Often this is not what we want. To stop this, we use the 'flex-shrink' property is what allows us to make this happen. It can be set to 0 or 1. This is very useful like where we want icons lined up in a flexible container to maintain their position. 

  ### The aspect ratio property:
  The aspect ratio property is useful for images. There are some images that by default have an aspect ratio that makes it difficult to style such as making a perfectly round image with border radius, where the image will have an oval shape. So the aspect ratio property will let us force the ratio to how we want it. 1/1 or 1:1, 16:9 or 16/9, 4:3 or 4/3, 3:4 or 3/4, 21:9 or 21/9, 9:6 or 9/6. Namely: square, widescreen, fullscreen, portrait, cinema, amd vertical video respectively.

### The default width of some type of elements
Some elements actually have a default width, expecially elements that are special and like input elements which without even having a content in them, they have a default width. When layout design, sometimes we want it to be that when we expand or minimize the page, even element such as those with default width should shrink as well. To do this, we select that element and set its width to 0.

### THE CSS POSITION PROPERTY
The position property is a very critical property in designing our webpage. It is a property that is most commonly used to set one or more element on top of the main layout elements by positoning/sitting the element on a separate stacking context or we can say on a layer above everything else.
It has values: static, relative, absolute, fixed and sticky. All except static uses the additional property top, right, bottom, left for positioning. Although static comes by default meaning no special positioning.
* It helps in such things as when we want a web page in which things like the header portion of  a webpage is when we scroll (if it is what the page requires)
* It also helps us keep the sidebar at the top of the page
* Infact whenever we stick an element ontop of another element, to appear as if it is on a different layer than the base layout, we do this by using CSS position property. e.g a video time ontop of a thumbnail, a notification count ontop of a notification bell icon or a tooltip that appears ontop of a an icon upon hovering. All is done with the position property. 

So a CSS position property adds another dimension to our page.

*** static it is the default. If we do not explicitly set a position property, that is the default by design for how a browser renders an element normally i.e they appear in the order that they are written in html. Setting top, right, bottom and left properties have no effect. the browser simply ignores them if it is set.

*** fixed is for setting an element to be fixed relative to the viewport. keep visible to viewer at all time concept (- the visible area of the webpage within a browser window/ the part of the document currently visible. | Does not include the scrollable area outside the immediate visible portion. - viewport = visible window. Note: The entire page (visible and scrolled content is called the document)) ie even when we scroll the page, the fixed element will stay in the same place on the screen. The top, right, bottom, and left properties work on fixed elements allowing us the freedom to precisely place the elememt within the viewport. Think of a sticky note. The element sits on another stacking context or a layer above everything else.



  *** A special feature to note about the top right bottom and left is the stretching feature. This occurs if we set values in the opposite directions, (because the value are how far or how near the element should be from the window - for fixed etc or static self for relative) the element would stretch to meet this condition. eg left 50px right 50px is saying the element left should be 50px from the left of the window and the element's right shoulf be 50px from the right of the window. Think of it as top value from top, right value from right, left value from left of window, bottom value from bottom of window.

  ### The top, right, bottom, left property and why they are used (in position fixed).
  We have already introduced the top, right, bottom,left property but for more depth.
  So when we give an element a position property we can actually use height and width to set the the element but it is highly imprecise. For instance on another perhaps bigger screen how would the element be rendered. But we cannot place the element anywhere else except where its html is written. But with the top, right, bottom, top, we are able to say 'element x, be 10px away from top of the window, be 0px from right edge of the window, be 0px away from the bottom and be 50px away from the left edge of the window. As we see, we have placed the element effectively somewhere else. Basically, hte top, bottom, left, right properties are used for more precise positioning of an element within the relative element.

  Additionally, we should note that we can use -ve numbers for our top, right, bottom, and left. This is useful when we want to set our element beyond the supposed top, left, right and bottom should be. Useful for notifications where the notifications are somehow placed a little away from the icon body therefore allowing the icon not to be covered.
  ### Position fixed and and setting a padding inside the body tag - How toing content
  when working with position property, when we set a fixed element at the top of the page (a web page header) or side bar, because the kinda sit atop a different stack on top of the layout we have, they cover any element when we scroll too the top or full right or left if it is a side bar.. To correct this, one would think to set a margin-top on the covered element but the issue with that is suppose that covered element is moved from that position, the element to take its place will suffer same. So best way is to add space within the body of the container itself, most times it is the body element. This would push the covered element further away from the fixed position element so it is not covered.

  Note: When we set top, right, bottom, left, it is reponsive to the vh/vw. So if we want a fixed width or a fixed height, use the width or height property. It does not change with size of the window.

  ### POSITION ABSOLUTE AND POSITION RELATIVE 
  *** relative is used to change the position of an element relative to its normal position if the element was static. ie relative to where the element would be normally - like offset. The top, right, bottom, left work differently as it now works relative to if the element were statically being rendered.
  position: relative
  top: 30px
  left: 30px 
  this will shift the top down from where its top would be by 30px (relative) and shift the left side of our element by 30px from the left side of the element if it were static.

  In truth all the position property are relative to something.

  - position: absolute (start position before top, right, bottom, left)
    * Relative to: nearest positioned ancestor (any ancestor with position set to anything except static - meaning if a position absolute is nested directly inside another positioned element e.g fixed or relative, the positioning of the absolute element is relative to the ancestor position)
    * If no positioned ancestor exists: It is relative to the document (intial containing block, typically <html>)
    * Key behavior: Removed from normal document flow.
    * Think of the word absolute to mean it is absolute to the document. Often times, we dont use it when no positioned ancestor exist. We use it with positioned elements
  
  - position: fixed ((start position before top, right, bottom, left))
    * Relative to: Viewport (browser window) - used to set it anywhere on the viewport
    * Key behavior: Stays in the same place even when scrolling (removed from document flow).
    * Exception:  Affected by 'transform', 'perspective', or 'filter' properties on ancestors (in modern browsers)

  - position: relative ((start position before top, right, bottom, left))
    * Relative to: Its normal position in the document flow (where it would be if position were static)
    * Key behavior: Doesn't remove from the document flow (space is still reserved in the main document and element appears as it should be by default but its position has been set relative to itself.)

 - position: sticky
  * Also relative to its containing block (like relative) until it hits a scroll threshold, then behaves like fixed within the container.

  So in summary, the position property as we have seen basically work in the ways described above. But we begin to see interesting things and multi-layered/complex concepts when we begin to have nested positioned elements i.e a positioned element/container within another positioned container, thereby changing the positional relativity of the subject element to its container. Recall that we can conceptualize that positioned fixed relative container is the viewport, position absolute container is the nearest positioned ancestor or the document, and position relative is the element itself as if it were static. Therefore, finally, to achieve a layering effect of an element over another, both the layered element and the layering element's position property must and cannot be static. But what we find most commonly though is that we have positioned fixed nesting position absolute element or position relative nesting a position absolute element in order to get most layerings we see to work. So finally we see that position relative bar any change, doesn't affect how an element/container is displayed normally, but it can change if we want it to move-it is the benefit of position relative.

  The usefulness of position absolute is that enables us to move element around relative to whether it is nested within or the whole document.

### The z-index property
The z-index property controls the stacking order of positioned elements (those with position: absolute, relative, fixed, or sticky) along the z-axis (front-to-back). Some web pages can have a lot of layers so it is good to know.

How it works:
* Higher values appear in front of lower values.
* Default value is auto (which typically equals 0)
* Only works on positioned elements (elements with non-static positions)
* Creates stacking contexts.

Main uses:
* Overlapping elements. Where we want one element to appear above another like in modals.
* Dropdown menus- To ensure that menus appear above the page content.
* In tooltips
* In fixed headers/navigations - to keep headers above scrolling content.

### Writing tooltips:
Tooltips are the tips about what an icon does that usually displays over the icon or a section of the icon when hovered with a mouse. There are several ways to add tooltips like
* HTML only: Use the title property on any element.
* CSS only: Using position absolute on position relative and using the general idea of how developers make an element appear to appear and disappear, kinda. This is by setting an element's opacity to 0 (opacity is how see through the element is) when not being hovered (a html-css interactivity that does not require js) and then to higher opacity e.g 1 (full opacity) when hovered upon
* Bootstrap

#### Which elements can be containers
All elements can be containers but especially elements with opening and closing tags. This statement on the surface does not mean anything but when we begin to look at using elements in a postion relative/position abosolute situation, we then begin to see the import of this statement. For instance img element vs btn element. Hence if for instance we want show a notification icon over an image element not by itself in a container, we use a div to set as the image's container before setting aother div for the position absolute element.

#### CSS Selectors
So we know that CSS selectors are basically the various patterns designed within the CSS technology that developers use to target(select) and style HTML elements (from the HTML technology). Selectors ranges from using the HTML names or an attribute name of an element to more specialized patterns like class, id, universal, pseudo selectors and combinator selectors (how to style two or more selectors (patterns) at ones)

The main types of selectors can be categorized into 4: 

1. Main selectors/simple selectors - these selectors or patterns are used to select elements when in their normal state. They are sub-categorzed into:
  -> Element selector: select elements by its name e.g h1, p, div. Note this styling will be generally applied and may not be what is wanted
  -> Class selector: (.classname): Used to select one or more element with a given class name. Helps avoid general selection as in above. Used commonly if the styles is to be applied to more than one element. Also fine if just one element is styled but affords flexibility.
  -> ID selector: (#idName): It is useful to select only one element. The style cannot be applied to another element, meaning no two element can have same ID name. Avoid overusing this.
  -> The Universal Selector (*): When this selector is styled in your CSS, it will apply to every element in your HTML.
NOTE: Using selectors separated by comma behaves the same way as normal selectors. They difference is that we are selecting multiple selectors at a time to give them the same styling in one go as opposed to writing a longer code if we did it individually.

2. Attribute Selectors: Selects elements based on its attributes  or attribute values. Useful for styling 'form' elements or custom data or custom data attributes.

3. Combinators: Special patterns that combine two selectors to add a syling based on their relationship in the HTML documents, ie there must be arelationship between the elements for this selector type to work. The important thing to note is the relationship type. We have the empty space, the >, and the tilde (~). In combinators, the second selector is the object being styled while the first selector is used to determine the relationship - meaning, it is the relationship between the second selector with the first that is the determinant in the selector. Or "when we see a combinator selector, the second selector is the target element, but the first selector is used for its relationship that helps us target the second selector as opposed to the all of the same type of the target element in the document". Not to mistake it as in the case of using comma as separator. Combinator selectors is also useful when we want to target an element because of a state of a related element. For instance, if a parent element is being hovered, and we want to select its child in that hovered state, we cannot just select the child as we would do ordinarily with a class, we have to use that special state to select the child otherwise we wouln't have been able to. div:hover .p {}. Helps us also not to come up with a unique name for the specific .p selector.

  -> Descendant Selector (e.g div p): Uses a single space between them. Means all paragraph that is a descendant of div (or any other selector type that starts this). Decendants means any element inside of the first selector regardless of level. Notice that div is not the target but it is a facilitator.
  -> Child Selector (e.g div > p): Unlike descendants, the greater than symbol this selects only p element that is a direct child. More specific than descendant selector. div is facilitating.
  -> Adjacent Sibling Selector (e.g h1 + p): Selects the first element that is immediately after another. Here it is 'first' p element that is beside the h1 and not inside it.
  -> Gen Sibling Selector (e.g h ~ p): Selects all siblings that follow. Broader than adjacent sibling selector, as it selects all the element on the same level. Just like saying "I want to target this p based on the relationship h ~ p"

4. Pseudo Selectors: the term pseudo means 'false'. In CSS it indicates that these selectors don't target 'real' HTML elements in the traditional sense where the element is just existing (an elements static identity) on the document but a more specialized way, beyond regular selectors, of identifying elements. They are of two types
--> Pseudo-classes: Element's are assigned these false (pseudo) classes automatically to be styled based on: 
  * their state (dynamic/interactive conditions) e.g 
    -  :hover, :active, :focus, :visited (user driven), :checked, :disabled (form driven)
  * their position/relationship (structural or same-type siblings -where the element sits) e.g
    -  :first-child,:nth-of-type(odd) - any element attached to it, if looks for that position

--> Pseudo-elements: They are used to style or write into a part of an element's content (creating false (pseudo) elements that don't exist in the dom  or used to style things that are not real HTML nodes - virtual content) e.g ::before, ::first-line, ::first-letter

### The pointer-event property: none or default
The pointer-event property is a css property worth knowing about. It is an to create advanced interactive designs where we need precise control over how elements respond to user input like hover, mouse clicks, touch events and stylus input. When we use it,we are saying to the browser: "ignore all mouse/pointer interations (hover, click, touch etc) on this element." Basically saying, when applied to the element, element becomes blind to these events on itself and a parent element (ie, propagation up to parent element is not possible) e.g Used to disable pointer response of an element.For instance, in the youtube project, we implemented a tooltip that switches opacity from 0 to 1 depending on whether it is being hovered or not. But for clarity, what happened was that the button served as a container for two elements. img, and a div. We want the div to be used as position absolute so we set the btn as relative. We also styled the bottom of the div as -ve so it appeared displayed away from the btn but it is important to note that it being displayed away from where the btn, it is infact still an extension of the btn - the img and the div are both children of the btn and anyone in focus is techhnically hovering over the btn due to propagation...
Note that disabling pointer event on a parent element also affects the child or children elements. So take care when disabling pointer events.

### Responsive Design: - More CSS features
Responsive design is a very important concept in web development. The main idea is how to make our website look as good as possibe when viewed on different screen sizes. Case in point, the youtube project. Notice that for the video tiles, the grid template we used was 1fr 1fr 1fr and no matter the screen width, we always have 3 videos (either narrow or wide). Imagine that on a small phone, on a 14inch laptop,  on a 21 inch monitor and for people that can afford it, imagine that on a 95inch smart tv. That would be a waste of space for the big screens and too crowded for a small phone screen. So how do we have less tiles horizontally on say a smartphone and more tiles on a larger screen?

In our development, all the styles we write is for a general width (essentially we are writing a general query.)

To make our website responsive, we use something in called media query. It helps us query our media (screensize) and adjusts the styling for specified media that we query. Essentially, it is like we are writing sub-style within a general styling document. Everything we styled in the general script still applies. We take the selector we want (either already styled or select as new) and style it. Note only the property we need to change for this query. No need to redefine existing styles we want to be common for all.

In media query, we use the term property: min-width and max-width 

-> min-width:  for this width and upwards.
-> max-width: for this width and under.

and we can combine both to cater for inbetweens to set a closed query
@media (min-width: 751px) and (max-width: 999px) {

}


Note. Best finish the overall project then work on the query.

### CSS Inheritance
CSS Inheritance means that certain CSS properties when applied to a parent element are automatically passed down to its nested children. Its usefulness is that it helps reduce redundant code (repetition) and ensures consistent styling across related elements.
  -> How It works: Say a property e.g font-family is set on a parent, its children inherit that values unless explicitly overridden.
  -> Common Inherited properties: 
      * Text-related properties like color, font-family, font-size, line-height, text-align,  
      * Visibility property: visibility
  -> Common non-inherited properties:
      * Layout/box-model: width, height, margin, padding, border, background, text-decoration (reason for text-decoration not inherited)
      * Positioning properties: display, position, float, z-index
  -> Controlling Inheritance Explicitly: The following values for properties can be used.
      * 'inherit': Forces a child to use the parent's value (even for non-inherited properties) e.g padding: inherit
      * 'initial': Resets to the browser defined default value
      * 'unset': It is like one value that does two things depending on context - smart reset value. If that property is a inheritatable then it works as if the property was set to inherit, if not, it acts as if the property was set to initial. Basically, unset saves us from checking inheritance rules. It does the right thing for each property type.

  Practical example, we select a body and set a font-family and it applies to the whole document. That is inheritance at play.

  Note: Specificity applies. Inherited values have lower priority than more specific/direct styles. Essentially we are saying that children can override inherited properties.
 
 ### Semantic Elements/tags:
 Semantic tags are elements that clearly describe their meaning to both the browser and the developer by clearly defining the purpose of their content (e.g headers, navigation, articles) instead of just presentation (like non-sematic div or span). They improve accessibility, SEO, and code readability. This elements work the same way as a div, i.e, no inherent styling, are block level, can wrap contents or other elements

* Key Semantic tags and their uses:
<header>: For intro content (page/section header). e.g Site logo, page title, navigation.
<nav>: Navigation links (menus, tables of contents). e.g main menu, sidebar links. can have primary nav/secondary nav. Can stand alone or, inside header, or inside footer.
<main>: Primary content of page (use once per page): e.g blog posts, product listings.
<article>: For self-contained content. (used more in blog posts, news articles). e.g Forum posts, product card.
<section>: Thematic grouping of content (usually with a heading) e.g Chapters, tabbed content.
<aside>: Indirectly related content (sidebars, pull quotes). e.g Ads, related links, author bio.
<footer>: Closing content (page or section footer). e.g copyright info, contact details, social media links.
<figure>: Self-contained media + caption (<figcaption>). e.g images, diagrams, code snippets.
<time>: For machine-readable date/time (datetime attribute). e.g Event dates, puclication times.
<mark>: Highlighted text for relevance. Search result, key terms.

* Why use Semantic Tags:
** Accessibility: Screen readers use semantic tags to navigate content (e.g., skipping to <main>).
** SEO: Search engines prioritize well-structured content (e.g <article> for blog posts).
** Maintainability: Clearer code structure makes updates easier.
** Future-proofing: Browsers/device APIs leverage semantic meaning for better user experiences.

* Best Practice:
-> Use <main> once per page for primary content.
-> Nest <article>/<section> logically (e.g blogposts in sections). For instance, we may have something below our youtube project video grid within the main, so we call our video grid a section of our main.
-> Combine with ARIA roles for complex widgets (e.g role="search")
-> Avoid overusing <section>; prefer <article> for standalone content

* Sample structure:***********************
<body>
  <header>
    <h1>Website Title</h1>
    <nav>...</nav>
  </header>
  
  <main>
    <article>
      <h2>Article Title</h2>
      <section>...</section>
    </article>
    <aside>...</aside>
  </main>
  
  <footer>...</footer>
</body>

***************************************

### The margin/padding reset and the box-sixing property: The start point of CSS styling
It is common practice of setting the * {margin:0; padding: 0; box-sizing:border-box}.
In CSS it serves an important purpose for consistent web development. Here's why.
-> Margin/Padding Reset - (margin:0; padding: 0;). This is to solve the problem of different browsers applying different default margins/padding to elements like body, p, h1 etc. For instance, chrome adds 8px to body and headings have top/bottom margins. When we reset, we create a consistent baseline across browsers because without this,  layouts appear insonsitent.
-> Box-sizing: border-box; (The Game-Changer). 
  * The default behavior (if not set) is box-sizing: content-box; This means that when we set the width/height of any element, it only applies to the content. If we set padding, or border, they will add to the overall size of the element. And before this box-sizing property was a thing, setting width required calculated values like cal(100% - 40px) to account for padding. In general, for default, content width stays fixed, but element grows with padding/border.
  * With box-sizing: border-box: Total element's size is auto calculated to include the content, the padding and the border to maintain consistency. Meaning if we had set box-sizing to border-box, all element set to maybe a width of 200px will be 200px irrespective of padding/border -  the content area shrinks to accommodate them. Border-box is essential because it allows for setting width without fear of overflowing when adding padding/border, it also eliminates the need for math calculations for width,  very good for responsve design- especially for percentage based layouts to work reliably on all screen sizes and finally, it is also great for consistent component sizing - UI elements e.g buttons, cardss, maintain exact dimensions regardless of padding/border.

### The form section of any webpage:
It is the part of a webpage that serves as the primary interface for user interaction and data collection

### THE WEBKIT SCROLLBAR - HOW TO CREATE CUSTOM SCROLLBARS
Chrome, Edge, Safari, and Opera support the non-standard ::-webkit-scrollbar pseudo element, which allows us to modify the look of the browser's scrollbar.
::-webkit-scrollbar {} is used to style the scrollbar area itself such as the width, 
::-webkit-scrollbar-track {} is used to style the track (aka the progress bar) like background etc, 
::-webkit-scrollbar-thumb {} is used to style the handle, 
::-webkit-scrollbar-thumb-hover{} is used to style the handle on hover.
::-webkit-scollbar-button {} is used to style the buttons on the scrollbar (the arrows pointing upwards and downwards)
::-webkit-scrollbar-corner {} used to style the bottom corner of the scrollbar, where both the horizontal and vertical scrollbars meet.
::-webkit-scrollbar-track-piece used to style the track (progress bar) NOT covered by the handle.
::-webkit-resizer {} used to style the draggable resizing handle that appearsat the bottom corner of some elements.

### Hidding scrollbars
To hide scrollbars, set it on the body tag: overflow: hidden. Note there is overflow-x and overflow-y

So in some web projects, it could be a requirement to hide the scrollbars for reasons like
-> Aesthetic reasons: 
    * Clean design: Scrollbars can be visually unappealing and hiding them can create cleaner and more minimalist design.
    * Branding consistency: By hiding scrollbars, you can maintain a consistent look and feel throughout our web ap, aligning with our brand's visual identity.
-> User Experience reasons
    * Immersive experience: Hiding scrollbars can create a more immersive  experience for users, expecially in applications where contents is the primary focus.
    * Reduced visual clutter: By hiding scrollbars, we can reduce visual clutter and draw attention to the content, improving the overall user experience.
-> Functional reasons
    * Custom scrollbar implemetation: Might want to hide the default scrolbar to implement a custom scrollbar solution that better fits our web app's design and functionality.
    * Touch-friendly design: On touch devices, scrollbars can be unnecessary, and hiding them can improve the overall touch experience.
But as a rule of thumb, you hide scrollbars when
  * The content is not too long and does not require frequent scrolling
  * If a custom scrollbar is to be implemented.
Drwabacks:
  * Accessibility issues: Hiding scrollbars can make it difficult for users with disabilities to navigate our web app.
  * User confusion: If not implemented correctly, hiding scrollbars can confuse users and make it harder for them to understand that content is scrollable.

### THE MOBILE-FIRST DEVELOPMENT STRATEGY
I learnt a fundamental lesson in the X (formerly twitter) page project that I did. I started out developing for the full web desktop screen layout, and although it initially looked great, when i tried to modify it for smaller screens, i noticed that it was difficult. I even noticed that I had initially thought of the layout the wrong way even though it appeared to look great at first. Hence my going deeper into the mobile first development concept.

Mobile-first development is a strategy that involves designing for mobile devices first, and then scaling up for larger screens. Here's why it is a great approach.
-> Improved User experience: By focusing on mobile devices, we prioritize simplicity, clarity, and ease of use, which benefits users across all devices.
-> Faster development: Mobile-first encourages a more streamlined and efficient development process, as you're forced to prioritize essential features and content.
-> Better performance: Mobile devices often have limited resources, so optimizing for mobile ensures our site or app is well-suited for majority of users.
-> Easier Maintenance: By buidling a solid foundation for mobile, we can easily add features and styles for larger screens. 

Why is it essential:
- Mobile dominance: Withe mobile devices accounting for a significant portion of internet traffic, a mobile-first approach ensures we're catering to the majority of users.
- Google's mobile-first indexing: Google prioritizes mobile-friendly sites in search results, making a mobile-first approach crucial for SEO.

Best Practices:
- Design for mobile first: Start with a mobile friendly design and then scale up for larger screens.
- Use flexible units: Smartly use relative units like %, em, rem to ensure our layout adapts to different screen sizes.
- Test and iterate: Test our site on various devices and screen sizes to ensure a smooth user experience.

THE MOBILE-FIRST WORKFLOW
* Default styles: We write our default CSS styles for mobile devices (smallest screen) without using a media query.
* Media queries for larger screens: Go on to add media queries for larger screen sizes to either override or add styles as needed.
Example
  /* default mobile styles*/
  .element {
    width: 100%
    padding: 16px
  }

  /* media query for tablet and larger screens */
  @media (min-width: 768px) {
    .element {
      width: 75%
      padding: 32px
    }
  }

  /* media query for desktop and larger screens */
  @media (min-width: 1200px) {
    .element {
      width: 50%
      padding: 48px
    }
  }